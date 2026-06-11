import { StatusCodes } from "http-status-codes";
import { prisma } from "../../config/prisma.js";
import { ApiError } from "../../utils/apiError.js";
import { hashPassword } from "../../utils/password.js";

const barberoPublicSelect = {
  cedula_barbero: true,
  nombre: true,
  apellido: true,
  id_especialidad: true,
  correo: true,
  telefono: true,
  fecha_registro: true,
};

export async function createBarbero(input: {
  cedula_barbero: string;
  nombre: string;
  apellido: string;
  id_especialidad: number;
  correo: string;
  contrasena: string;
  telefono: string;
}) {
  const existingByCorreo = await prisma.barbero.findUnique({
    where: { correo: input.correo },
  });
  if (existingByCorreo)
    throw new ApiError(StatusCodes.CONFLICT, "El correo ya está registrado");

  const existingByCedula = await prisma.barbero.findUnique({
    where: { cedula_barbero: input.cedula_barbero },
  });
  if (existingByCedula)
    throw new ApiError(StatusCodes.CONFLICT, "La cedula ya esta registrada");

  const especialidad = await prisma.especialidad.findUnique({
    where: { id_especialidad: input.id_especialidad },
  });
  if (!especialidad)
    throw new ApiError(StatusCodes.BAD_REQUEST, "La especialidad no existe");

  const hashed = await hashPassword(input.contrasena);

  return prisma.barbero.create({
    data: { ...input, contrasena: hashed },
    select: barberoPublicSelect,
  });
}

export async function getBarberoByCedula(cedula_barbero: string) {
  const barbero = await prisma.barbero.findUnique({
    where: { cedula_barbero },
    select: barberoPublicSelect,
  });
  if (!barbero)
    throw new ApiError(StatusCodes.NOT_FOUND, "Barbero no encontrado");
  return barbero;
}

export async function updateBarbero(
  cedula_barbero: string,
  patch: Partial<{
    nombre: string;
    apellido: string;
    id_especialidad: number;
    correo: string;
    contrasena: string;
    telefono: string;
  }>,
) {
  const current = await prisma.barbero.findUnique({
    where: { cedula_barbero },
  });
  if (!current)
    throw new ApiError(StatusCodes.NOT_FOUND, "Barbero no encontrado");

  if (patch.correo && patch.correo !== current.correo) {
    const existing = await prisma.barbero.findUnique({
      where: { correo: patch.correo },
    });
    if (existing)
      throw new ApiError(StatusCodes.CONFLICT, "El correo ya está registrado");
  }

  const data: Record<string, unknown> = { ...patch };
  if (patch.contrasena) data.contrasena = await hashPassword(patch.contrasena);

  return prisma.barbero.update({
    where: { cedula_barbero },
    data,
    select: barberoPublicSelect,
  });
}

export async function deleteBarbero(cedula_barbero: string) {
  const current = await prisma.barbero.findUnique({
    where: { cedula_barbero },
  });
  if (!current)
    throw new ApiError(StatusCodes.NOT_FOUND, "Barbero no encontrado");

  const totalCitas = await prisma.cita.count({ where: { cedula_barbero } });
  if (totalCitas > 0) {
    throw new ApiError(
      StatusCodes.CONFLICT,
      "No se puede eliminar: el barbero tiene citas registradas",
    );
  }

  await prisma.$transaction([
    prisma.horarioBarbero.deleteMany({ where: { cedula_barbero } }),
    prisma.barbero.delete({ where: { cedula_barbero } }),
  ]);
  return { deleted: true };
}

export async function listBarberos() {
  return prisma.barbero.findMany({
    select: barberoPublicSelect,
    orderBy: [{ nombre: "asc" }, { apellido: "asc" }],
  });
}

export async function getBarberosDisponiblesByEspecialidad(
  id_especialidad: number,
  fechaIso?: string,
) {
  const barberos = await prisma.barbero.findMany({
    where: { id_especialidad },
    select: barberoPublicSelect,
    orderBy: [{ nombre: "asc" }, { apellido: "asc" }],
  });

  if (!fechaIso) return barberos;

  // Solo barberos con franja de horario el día de la semana solicitado.
  // Las citas usan medianoche UTC y los horarios medianoche local
  // (ver cita.service / horario.service).
  const diaSemana = new Date(`${fechaIso}T00:00:00.000Z`).getUTCDay();

  const horarios = await prisma.horarioBarbero.findMany({
    where: { cedula_barbero: { in: barberos.map((b) => b.cedula_barbero) } },
    select: {
      cedula_barbero: true,
      fecha: true,
      hora_inicio: true,
      hora_fin: true,
    },
  });

  const franjasPorBarbero = new Map<
    string,
    { hora_inicio: string; hora_fin: string }
  >();
  for (const h of horarios) {
    if (h.fecha.getDay() !== diaSemana) continue;
    const actual = franjasPorBarbero.get(h.cedula_barbero);
    if (!actual) {
      franjasPorBarbero.set(h.cedula_barbero, {
        hora_inicio: h.hora_inicio,
        hora_fin: h.hora_fin,
      });
    } else {
      // Si hay varias franjas se toma el rango más amplio
      actual.hora_inicio =
        h.hora_inicio < actual.hora_inicio ? h.hora_inicio : actual.hora_inicio;
      actual.hora_fin =
        h.hora_fin > actual.hora_fin ? h.hora_fin : actual.hora_fin;
    }
  }

  return barberos
    .filter((b) => franjasPorBarbero.has(b.cedula_barbero))
    .map((b) => ({
      ...b,
      horario_dia: franjasPorBarbero.get(b.cedula_barbero)!,
    }));
}
