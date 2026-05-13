import { StatusCodes } from "http-status-codes";
import { prisma } from "../../config/prisma.js";
import { ApiError } from "../../utils/apiError.js";

const especialidadSelect = {
  id_especialidad: true,
  especialidad: true,
  tiempo_estimado: true,
};

export async function listEspecialidades() {
  return prisma.especialidad.findMany({
    select: especialidadSelect,
    orderBy: { id_especialidad: "asc" },
  });
}

export async function getEspecialidadById(id_especialidad: number) {
  const especialidad = await prisma.especialidad.findUnique({
    where: { id_especialidad },
    select: especialidadSelect,
  });
  if (!especialidad)
    throw new ApiError(StatusCodes.NOT_FOUND, "Especialidad no encontrada");
  return especialidad;
}

export async function createEspecialidad(input: {
  especialidad: string;
  tiempo_estimado: number;
}) {
  const existing = await prisma.especialidad.findUnique({
    where: { especialidad: input.especialidad },
  });
  if (existing)
    throw new ApiError(StatusCodes.CONFLICT, "La especialidad ya existe");

  return prisma.especialidad.create({
    data: input,
    select: especialidadSelect,
  });
}

export async function updateEspecialidad(
  id_especialidad: number,
  patch: Partial<{
    especialidad: string;
    tiempo_estimado: number;
  }>,
) {
  const current = await prisma.especialidad.findUnique({
    where: { id_especialidad },
  });
  if (!current)
    throw new ApiError(StatusCodes.NOT_FOUND, "Especialidad no encontrada");

  if (patch.especialidad && patch.especialidad !== current.especialidad) {
    const existing = await prisma.especialidad.findUnique({
      where: { especialidad: patch.especialidad },
    });
    if (existing)
      throw new ApiError(StatusCodes.CONFLICT, "La especialidad ya existe");
  }

  return prisma.especialidad.update({
    where: { id_especialidad },
    data: patch,
    select: especialidadSelect,
  });
}

export async function deleteEspecialidad(id_especialidad: number) {
  const current = await prisma.especialidad.findUnique({
    where: { id_especialidad },
  });
  if (!current)
    throw new ApiError(StatusCodes.NOT_FOUND, "Especialidad no encontrada");

  const [barberosCount, citasCount] = await Promise.all([
    prisma.barbero.count({ where: { id_especialidad } }),
    prisma.cita.count({ where: { id_especialidad } }),
  ]);

  if (barberosCount > 0 || citasCount > 0) {
    throw new ApiError(
      StatusCodes.CONFLICT,
      "No se puede eliminar la especialidad porque esta en uso",
    );
  }

  await prisma.especialidad.delete({ where: { id_especialidad } });
  return { deleted: true };
}
