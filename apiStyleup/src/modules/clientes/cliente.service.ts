import { StatusCodes } from "http-status-codes";
import { prisma } from "../../config/prisma.js";
import { ApiError } from "../../utils/apiError.js";
import { hashPassword } from "../../utils/password.js";

export async function createCliente(input: {
  cedula_cliente: string;
  nombre: string;
  apellido: string;
  telefono: string;
  correo: string;
  contrasena: string;
}) {
  const existing = await prisma.cliente.findUnique({ where: { correo: input.correo } });
  if (existing) throw new ApiError(StatusCodes.CONFLICT, "El correo ya está registrado");

  const hashed = await hashPassword(input.contrasena);

  return prisma.cliente.create({
    data: {
      cedula_cliente: input.cedula_cliente,
      nombre: input.nombre,
      apellido: input.apellido,
      telefono: input.telefono,
      correo: input.correo,
      contrasena: hashed,
    },
    select: {
      cedula_cliente: true,
      nombre: true,
      apellido: true,
      telefono: true,
      correo: true,
      fecha_registro: true,
    },
  });
}

export async function getClienteByCedula(cedula_cliente: string) {
  const cliente = await prisma.cliente.findUnique({
    where: { cedula_cliente },
    select: {
      cedula_cliente: true,
      nombre: true,
      apellido: true,
      telefono: true,
      correo: true,
      fecha_registro: true,
    },
  });
  if (!cliente) throw new ApiError(StatusCodes.NOT_FOUND, "Cliente no encontrado");
  return cliente;
}

export async function updateCliente(
  cedula_cliente: string,
  patch: Partial<{
    nombre: string;
    apellido: string;
    telefono: string;
    correo: string;
    contrasena: string;
  }>
) {
  const current = await prisma.cliente.findUnique({ where: { cedula_cliente } });
  if (!current) throw new ApiError(StatusCodes.NOT_FOUND, "Cliente no encontrado");

  if (patch.correo && patch.correo !== current.correo) {
    const existing = await prisma.cliente.findUnique({ where: { correo: patch.correo } });
    if (existing) throw new ApiError(StatusCodes.CONFLICT, "El correo ya está registrado");
  }

  const data: Record<string, unknown> = { ...patch };
  if (patch.contrasena) data.contrasena = await hashPassword(patch.contrasena);

  return prisma.cliente.update({
    where: { cedula_cliente },
    data,
    select: {
      cedula_cliente: true,
      nombre: true,
      apellido: true,
      telefono: true,
      correo: true,
      fecha_registro: true,
    },
  });
}

export async function deleteCliente(cedula_cliente: string) {
  const current = await prisma.cliente.findUnique({ where: { cedula_cliente } });
  if (!current) throw new ApiError(StatusCodes.NOT_FOUND, "Cliente no encontrado");
  await prisma.cliente.delete({ where: { cedula_cliente } });
  return { deleted: true };
}

