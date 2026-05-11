import { StatusCodes } from "http-status-codes";
import { prisma } from "../../config/prisma.js";
import { ApiError } from "../../utils/apiError.js";

export async function createHorario(input: {
  cedula_barbero: string;
  id_estado: number;
  hora_inicio: string;
  hora_fin: string;
  fecha: Date;
}) {
  return prisma.horarioBarbero.create({ data: input });
}

export async function getHorarioById(id_horario: number) {
  const horario = await prisma.horarioBarbero.findUnique({ where: { id_horario } });
  if (!horario) throw new ApiError(StatusCodes.NOT_FOUND, "Horario no encontrado");
  return horario;
}

export async function updateHorario(id_horario: number, patch: Partial<{
  id_estado: number;
  hora_inicio: string;
  hora_fin: string;
  fecha: Date;
}>) {
  const current = await prisma.horarioBarbero.findUnique({ where: { id_horario } });
  if (!current) throw new ApiError(StatusCodes.NOT_FOUND, "Horario no encontrado");
  return prisma.horarioBarbero.update({ where: { id_horario }, data: patch });
}

export async function deleteHorario(id_horario: number) {
  const current = await prisma.horarioBarbero.findUnique({ where: { id_horario } });
  if (!current) throw new ApiError(StatusCodes.NOT_FOUND, "Horario no encontrado");
  await prisma.horarioBarbero.delete({ where: { id_horario } });
  return { deleted: true };
}

