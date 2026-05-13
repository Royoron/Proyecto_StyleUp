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
  await prisma.barbero.delete({ where: { cedula_barbero } });
  return { deleted: true };
}

export async function getBarberosDisponiblesByEspecialidad(
  id_especialidad: number,
) {
  return prisma.barbero.findMany({
    where: { id_especialidad },
    select: barberoPublicSelect,
    orderBy: [{ nombre: "asc" }, { apellido: "asc" }],
  });
}
