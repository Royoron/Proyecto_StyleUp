import { z } from "zod";
import { cedulaSchema } from "../clientes/cliente.schemas.js";

export const createBarberoBodySchema = z.object({
  cedula_barbero: cedulaSchema,
  nombre: z.string().min(1),
  apellido: z.string().min(1),
  id_especialidad: z.coerce.number().int().positive(),
  correo: z.string().email(),
  contrasena: z.string().min(6),
  telefono: z.string().min(1),
});

export const createBarberoSchema = z.object({
  body: createBarberoBodySchema,
  query: z.any().optional(),
  params: z.any().optional(),
});

export const updateBarberoSchema = z.object({
  body: createBarberoBodySchema.partial().omit({ cedula_barbero: true }),
  params: z.object({ cedula_barbero: cedulaSchema }),
  query: z.any().optional(),
});

export const disponiblesSchema = z.object({
  query: z.object({
    id_especialidad: z.coerce.number().int().positive(),
  }),
  body: z.any().optional(),
  params: z.any().optional(),
});

