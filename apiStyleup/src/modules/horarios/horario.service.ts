import { StatusCodes } from "http-status-codes";
import { prisma } from "../../config/prisma.js";
import { ApiError } from "../../utils/apiError.js";

type DiaSemana =
  | "Lunes"
  | "Martes"
  | "Miércoles"
  | "Jueves"
  | "Viernes"
  | "Sábado"
  | "Domingo";

type FranjaSemanal = {
  dia: DiaSemana;
  hora_inicio: string;
  hora_fin: string;
};

const diaIndice: Record<DiaSemana, number> = {
  Domingo: 0,
  Lunes: 1,
  Martes: 2,
  Miércoles: 3,
  Jueves: 4,
  Viernes: 5,
  Sábado: 6,
};

function inicioHoy() {
  const hoy = new Date();
  hoy.setHours(0, 0, 0, 0);
  return hoy;
}

function fechaParaDia(dia: DiaSemana) {
  const fecha = inicioHoy();
  const diferencia = (diaIndice[dia] - fecha.getDay() + 7) % 7;
  fecha.setDate(fecha.getDate() + diferencia);
  return fecha;
}

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

export async function listHorariosByBarbero(cedula_barbero: string) {
  return prisma.horarioBarbero.findMany({
    where: {
      cedula_barbero,
      fecha: { gte: inicioHoy() },
    },
    orderBy: [{ fecha: "asc" }, { hora_inicio: "asc" }],
  });
}

export async function replaceHorarioSemanalBarbero(
  cedula_barbero: string,
  horario: FranjaSemanal[],
) {
  const barbero = await prisma.barbero.findUnique({
    where: { cedula_barbero },
    select: { cedula_barbero: true },
  });

  if (!barbero) {
    throw new ApiError(StatusCodes.NOT_FOUND, "Barbero no encontrado");
  }

  const disponible = await prisma.estadoBarbero.findUnique({
    where: { estado: "Disponible" },
  });

  if (!disponible) {
    throw new ApiError(
      StatusCodes.BAD_REQUEST,
      "No existe el estado Disponible para horarios",
    );
  }

  return prisma.$transaction(async (tx) => {
    await tx.horarioBarbero.deleteMany({
      where: {
        cedula_barbero,
        fecha: { gte: inicioHoy() },
      },
    });

    if (horario.length) {
      await tx.horarioBarbero.createMany({
        data: horario.map((franja) => ({
          cedula_barbero,
          id_estado: disponible.id_estado,
          hora_inicio: franja.hora_inicio,
          hora_fin: franja.hora_fin,
          fecha: fechaParaDia(franja.dia),
        })),
      });
    }

    return tx.horarioBarbero.findMany({
      where: {
        cedula_barbero,
        fecha: { gte: inicioHoy() },
      },
      orderBy: [{ fecha: "asc" }, { hora_inicio: "asc" }],
    });
  });
}
