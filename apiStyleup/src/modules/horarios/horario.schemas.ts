import { z } from "zod";
import { cedulaSchema } from "../clientes/cliente.schemas.js";

export const createHorarioSchema = z.object({
  body: z.object({
    cedula_barbero: cedulaSchema,
    id_estado: z.coerce.number().int().positive(),
    hora_inicio: z.string().min(1),
    hora_fin: z.string().min(1),
    fecha: z.coerce.date(),
  }),
  query: z.any().optional(),
  params: z.any().optional(),
});

export const updateHorarioSchema = z.object({
  params: z.object({
    id_horario: z.coerce.number().int().positive(),
  }),
  body: z
    .object({
      id_estado: z.coerce.number().int().positive().optional(),
      hora_inicio: z.string().min(1).optional(),
      hora_fin: z.string().min(1).optional(),
      fecha: z.coerce.date().optional(),
    })
    .refine((v) => Object.keys(v).length > 0, "Debe enviar al menos un campo"),
  query: z.any().optional(),
});

export const idHorarioParamsSchema = z.object({
  params: z.object({
    id_horario: z.coerce.number().int().positive(),
  }),
  body: z.any().optional(),
  query: z.any().optional(),
});

