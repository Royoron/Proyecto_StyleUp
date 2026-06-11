import { z } from "zod";
import {
  cedulaSchema,
  nombreSchema,
  telefonoSchema,
} from "../clientes/cliente.schemas.js";

export const createBarberoBodySchema = z.object({
  cedula_barbero: cedulaSchema,
  nombre: nombreSchema,
  apellido: nombreSchema,
  id_especialidad: z.coerce.number().int().positive(),
  correo: z.string().email(),
  contrasena: z.string().min(6),
  telefono: telefonoSchema,
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
    fecha: z
      .string()
      .regex(/^\d{4}-\d{2}-\d{2}$/, "La fecha debe tener formato YYYY-MM-DD")
      .optional(),
  }),
  body: z.any().optional(),
  params: z.any().optional(),
});

