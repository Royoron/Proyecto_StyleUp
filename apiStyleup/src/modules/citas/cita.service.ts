import { StatusCodes } from "http-status-codes";
import { prisma } from "../../config/prisma.js";
import { ApiError } from "../../utils/apiError.js";
import { ensureNotPastDate } from "../../utils/date.js";

/**
 * Día de la semana (0=Domingo) de una fecha de cita.
 * Las citas se guardan a medianoche UTC, por eso getUTCDay.
 */
export function diaSemanaCita(fecha: Date) {
  return fecha.getUTCDay();
}

/**
 * Día de la semana de una fila de horario_barbero.
 * Los horarios se guardan a medianoche local (ver horario.service),
 * por eso getDay.
 */
export function diaSemanaHorario(fecha: Date) {
  return fecha.getDay();
}

/** Franjas del horario del barbero que aplican al día de la cita */
export function franjasDelDia(
  horarios: { fecha: Date; hora_inicio: string; hora_fin: string }[],
  fechaCita: Date,
) {
  const dia = diaSemanaCita(fechaCita);
  return horarios.filter((h) => diaSemanaHorario(h.fecha) === dia);
}

export async function createCitaTx(input: {
  cedula_cliente: string;
  cedula_barbero: string;
  id_especialidad: number;
  fecha: Date | string;
  hora: string;
}) {
  const fecha =
    input.fecha instanceof Date
      ? input.fecha
      : new Date(`${input.fecha}T00:00:00.000Z`);

  if (Number.isNaN(fecha.getTime())) {
    throw new ApiError(StatusCodes.BAD_REQUEST, "Fecha invalida");
  }

  if (!ensureNotPastDate(fecha)) {
    throw new ApiError(StatusCodes.BAD_REQUEST, "La fecha no puede ser menor a la fecha actual");
  }

  return prisma.$transaction(async (tx) => {
    const barbero = await tx.barbero.findUnique({
      where: { cedula_barbero: input.cedula_barbero },
      select: { id_especialidad: true },
    });

    if (!barbero) {
      throw new ApiError(StatusCodes.BAD_REQUEST, "El barbero no existe");
    }

    if (barbero.id_especialidad !== input.id_especialidad) {
      throw new ApiError(
        StatusCodes.BAD_REQUEST,
        "El barbero seleccionado no pertenece a la especialidad elegida",
      );
    }

    // La cita debe caer dentro del horario laboral del barbero
    const horarios = await tx.horarioBarbero.findMany({
      where: { cedula_barbero: input.cedula_barbero },
      select: { fecha: true, hora_inicio: true, hora_fin: true },
    });

    const franjas = franjasDelDia(horarios, fecha);

    if (!franjas.length) {
      throw new ApiError(
        StatusCodes.BAD_REQUEST,
        "El barbero no atiende el día seleccionado",
      );
    }

    const dentroDeFranja = franjas.some(
      (f) => f.hora_inicio <= input.hora && input.hora < f.hora_fin,
    );

    if (!dentroDeFranja) {
      const rangos = franjas
        .map((f) => `${f.hora_inicio} a ${f.hora_fin}`)
        .join(", ");
      throw new ApiError(
        StatusCodes.BAD_REQUEST,
        `El barbero atiende ese día de ${rangos}`,
      );
    }

    const citaExistente = await tx.cita.findFirst({
      where: {
        cedula_barbero: input.cedula_barbero,
        fecha,
        hora: input.hora,
        estado: { not: "Cancelada" },
      },
    });

    if (citaExistente) {
      throw new ApiError(
        StatusCodes.CONFLICT,
        "El barbero ya tiene una cita en esa fecha y hora",
      );
    }

    const created = await tx.cita.create({
      data: {
        cedula_cliente: input.cedula_cliente,
        cedula_barbero: input.cedula_barbero,
        id_especialidad: input.id_especialidad,
        fecha,
        hora: input.hora,
        estado: "Pendiente",
      },
    });

    await tx.historialCita.create({
      data: {
        cedula_cliente: input.cedula_cliente,
        id_cita: created.id_cita,
      },
    });

    return created;
  });
}

export async function cancelarCita(id_cita: string) {
  const cita = await prisma.cita.findUnique({ where: { id_cita } });
  if (!cita) throw new ApiError(StatusCodes.NOT_FOUND, "Cita no encontrada");
  return prisma.cita.update({ where: { id_cita }, data: { estado: "Cancelada" } });
}

export async function actualizarEstadoCita(id_cita: string, estado: string) {
  const cita = await prisma.cita.findUnique({ where: { id_cita } });
  if (!cita) throw new ApiError(StatusCodes.NOT_FOUND, "Cita no encontrada");
  return prisma.cita.update({ where: { id_cita }, data: { estado } });
}

export async function listarCitasPorDia(fechaIso: string) {
  const start = new Date(`${fechaIso}T00:00:00.000Z`);
  const end = new Date(`${fechaIso}T23:59:59.999Z`);

  return prisma.cita.findMany({
    where: { fecha: { gte: start, lte: end } },
    orderBy: [{ hora: "asc" }],
  });
}

export async function listarCitasPorBarbero(cedula_barbero: string) {
  return prisma.cita.findMany({
    where: { cedula_barbero },
    orderBy: [{ fecha: "asc" }, { hora: "asc" }],
  });
}

export async function listarCitasPorBarberoYDia(
  cedula_barbero: string,
  fechaIso: string,
) {
  const start = new Date(`${fechaIso}T00:00:00.000Z`);
  const end = new Date(`${fechaIso}T23:59:59.999Z`);

  return prisma.cita.findMany({
    where: { cedula_barbero, fecha: { gte: start, lte: end } },
    orderBy: [{ hora: "asc" }],
  });
}

export async function listarCitasClientes(cedula_cliente : string){
  return prisma.cita.findMany({
    where: {cedula_cliente},
    orderBy: [{fecha : "asc"}, {hora : "asc"}]
  })
}
