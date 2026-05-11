import { StatusCodes } from "http-status-codes";
import { prisma } from "../../config/prisma.js";
import { ApiError } from "../../utils/apiError.js";
import { ensureNotPastDate } from "../../utils/date.js";

export async function createCitaTx(input: {
  cedula_cliente: string;
  cedula_barbero: string;
  id_especialidad: number;
  fecha: Date;
  hora: string;
}) {
  if (!ensureNotPastDate(input.fecha)) {
    throw new ApiError(StatusCodes.BAD_REQUEST, "La fecha no puede ser menor a la fecha actual");
  }

  return prisma.$transaction(async (tx) => {
    const created = await tx.cita.create({
      data: {
        cedula_cliente: input.cedula_cliente,
        cedula_barbero: input.cedula_barbero,
        id_especialidad: input.id_especialidad,
        fecha: input.fecha,
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

