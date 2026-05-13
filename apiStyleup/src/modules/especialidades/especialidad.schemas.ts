import { z } from "zod";

const especialidadIdSchema = z.coerce.number().int().positive();

export const especialidadBodySchema = z.object({
  especialidad: z.string().min(1),
  tiempo_estimado: z.coerce.number().int().positive(),
});

export const createEspecialidadSchema = z.object({
  body: especialidadBodySchema,
  query: z.any().optional(),
  params: z.any().optional(),
});

export const updateEspecialidadSchema = z.object({
  body: especialidadBodySchema.partial(),
  params: z.object({ id_especialidad: especialidadIdSchema }),
  query: z.any().optional(),
});

export const getEspecialidadSchema = z.object({
  params: z.object({ id_especialidad: especialidadIdSchema }),
  body: z.any().optional(),
  query: z.any().optional(),
});
