import { z } from "zod";

export const cedulaSchema = z
  .string()
  .regex(/^[0-9]{6,10}$/, "La cédula debe tener 6-10 dígitos numéricos");

// Acepta "-" como marcador de "sin teléfono" (lo envía el frontend)
export const telefonoSchema = z
  .string()
  .regex(
    /^(-|\+?[0-9][0-9\s-]{5,14})$/,
    "El teléfono debe tener 6-15 dígitos",
  );

export const nombreSchema = z.string().trim().min(1).max(60);

export const createClienteBodySchema = z.object({
  cedula_cliente: cedulaSchema,
  nombre: nombreSchema,
  apellido: nombreSchema,
  telefono: telefonoSchema,
  correo: z.string().email(),
  contrasena: z.string().min(6),
});

export const createClienteSchema = z.object({
  body: createClienteBodySchema,
  query: z.any().optional(),
  params: z.any().optional(),
});

export const updateClienteSchema = z.object({
  body: createClienteBodySchema.partial().omit({ cedula_cliente: true }),
  params: z.object({ cedula_cliente: cedulaSchema }),
  query: z.any().optional(),
});

