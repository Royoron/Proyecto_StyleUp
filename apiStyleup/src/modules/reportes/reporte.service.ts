import { prisma } from "../../config/prisma.js";

export async function obtenerMetricas() {
  const inicioHoy = new Date();
  inicioHoy.setUTCHours(0, 0, 0, 0);

  const [
    totalClientes,
    totalBarberos,
    totalCitas,
    citasProximas,
    porEstado,
    porEspecialidad,
    porBarbero,
    especialidades,
    barberos,
  ] = await Promise.all([
    prisma.cliente.count(),
    prisma.barbero.count(),
    prisma.cita.count(),
    prisma.cita.count({
      where: {
        fecha: { gte: inicioHoy },
        estado: { notIn: ["Cancelada", "Completada"] },
      },
    }),
    prisma.cita.groupBy({ by: ["estado"], _count: { _all: true } }),
    prisma.cita.groupBy({ by: ["id_especialidad"], _count: { _all: true } }),
    prisma.cita.groupBy({ by: ["cedula_barbero"], _count: { _all: true } }),
    prisma.especialidad.findMany({
      select: { id_especialidad: true, especialidad: true },
    }),
    prisma.barbero.findMany({
      select: { cedula_barbero: true, nombre: true, apellido: true },
    }),
  ]);

  const nombreEspecialidad = new Map(
    especialidades.map((e) => [e.id_especialidad, e.especialidad]),
  );
  const nombreBarbero = new Map(
    barberos.map((b) => [b.cedula_barbero, `${b.nombre} ${b.apellido}`]),
  );

  return {
    totales: {
      clientes: totalClientes,
      barberos: totalBarberos,
      citas: totalCitas,
      citasProximas,
    },
    citasPorEstado: porEstado.map((e) => ({
      estado: e.estado,
      total: e._count._all,
    })),
    citasPorEspecialidad: porEspecialidad.map((e) => ({
      id_especialidad: e.id_especialidad,
      especialidad: nombreEspecialidad.get(e.id_especialidad) ?? "Desconocida",
      total: e._count._all,
    })),
    citasPorBarbero: porBarbero.map((b) => ({
      cedula_barbero: b.cedula_barbero,
      barbero: nombreBarbero.get(b.cedula_barbero) ?? "Desconocido",
      total: b._count._all,
    })),
  };
}

type ConteoEstados = {
  total: number;
  completadas: number;
  pendientes: number;
  canceladas: number;
};

function conteoVacio(): ConteoEstados {
  return { total: 0, completadas: 0, pendientes: 0, canceladas: 0 };
}

function acumularEstado(conteo: ConteoEstados, estado: string, cantidad: number) {
  conteo.total += cantidad;
  if (estado === "Completada") conteo.completadas += cantidad;
  else if (estado === "Cancelada") conteo.canceladas += cantidad;
  else conteo.pendientes += cantidad;
}

/** Ranking de barberos por citas atendidas (gestión del superadmin) */
export async function reporteBarberos() {
  const inicioHoy = new Date();
  inicioHoy.setUTCHours(0, 0, 0, 0);

  const [barberos, especialidades, porEstado, proximas] = await Promise.all([
    prisma.barbero.findMany({
      select: {
        cedula_barbero: true,
        nombre: true,
        apellido: true,
        correo: true,
        telefono: true,
        id_especialidad: true,
      },
      orderBy: [{ nombre: "asc" }, { apellido: "asc" }],
    }),
    prisma.especialidad.findMany({
      select: { id_especialidad: true, especialidad: true },
    }),
    prisma.cita.groupBy({
      by: ["cedula_barbero", "estado"],
      _count: { _all: true },
    }),
    prisma.cita.groupBy({
      by: ["cedula_barbero"],
      where: {
        fecha: { gte: inicioHoy },
        estado: { notIn: ["Cancelada", "Completada"] },
      },
      _count: { _all: true },
    }),
  ]);

  const nombreEspecialidad = new Map(
    especialidades.map((e) => [e.id_especialidad, e.especialidad]),
  );

  const conteos = new Map<string, ConteoEstados>();
  for (const fila of porEstado) {
    const conteo = conteos.get(fila.cedula_barbero) ?? conteoVacio();
    acumularEstado(conteo, fila.estado, fila._count._all);
    conteos.set(fila.cedula_barbero, conteo);
  }

  const proximasPorBarbero = new Map(
    proximas.map((p) => [p.cedula_barbero, p._count._all]),
  );

  return barberos
    .map((b) => ({
      cedula_barbero: b.cedula_barbero,
      nombre: b.nombre,
      apellido: b.apellido,
      correo: b.correo,
      telefono: b.telefono,
      id_especialidad: b.id_especialidad,
      especialidad:
        nombreEspecialidad.get(b.id_especialidad) ?? "Desconocida",
      citas: conteos.get(b.cedula_barbero) ?? conteoVacio(),
      citasProximas: proximasPorBarbero.get(b.cedula_barbero) ?? 0,
    }))
    .sort((a, b) => b.citas.completadas - a.citas.completadas);
}

/** Clientes más fieles: ordenados por citas completadas y totales */
export async function reporteClientesFieles(limite = 20) {
  const [porEstado, ultimas] = await Promise.all([
    prisma.cita.groupBy({
      by: ["cedula_cliente", "estado"],
      _count: { _all: true },
    }),
    prisma.cita.groupBy({
      by: ["cedula_cliente"],
      _max: { fecha: true },
    }),
  ]);

  const conteos = new Map<string, ConteoEstados>();
  for (const fila of porEstado) {
    const conteo = conteos.get(fila.cedula_cliente) ?? conteoVacio();
    acumularEstado(conteo, fila.estado, fila._count._all);
    conteos.set(fila.cedula_cliente, conteo);
  }

  const ultimaCita = new Map(
    ultimas.map((u) => [u.cedula_cliente, u._max.fecha]),
  );

  const ranking = Array.from(conteos.entries())
    .sort(([, a], [, b]) =>
      b.completadas !== a.completadas
        ? b.completadas - a.completadas
        : b.total - a.total,
    )
    .slice(0, limite);

  const clientes = await prisma.cliente.findMany({
    where: { cedula_cliente: { in: ranking.map(([cedula]) => cedula) } },
    select: {
      cedula_cliente: true,
      nombre: true,
      apellido: true,
      correo: true,
      telefono: true,
    },
  });
  const datosCliente = new Map(clientes.map((c) => [c.cedula_cliente, c]));

  return ranking.map(([cedula, citas]) => {
    const cliente = datosCliente.get(cedula);
    return {
      cedula_cliente: cedula,
      nombre: cliente?.nombre ?? "Desconocido",
      apellido: cliente?.apellido ?? "",
      correo: cliente?.correo ?? "",
      telefono: cliente?.telefono ?? "",
      citas,
      ultima_cita: ultimaCita.get(cedula) ?? null,
    };
  });
}
