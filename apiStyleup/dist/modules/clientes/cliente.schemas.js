import { z } from "zod";
export const cedulaSchema = z
    .string()
    .regex(/^[0-9]{6,10}$/, "La cédula debe tener 6-10 dígitos numéricos");
export const createClienteBodySchema = z.object({
    cedula_cliente: cedulaSchema,
    nombre: z.string().min(1),
    apellido: z.string().min(1),
    telefono: z.string().min(1),
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
//# sourceMappingURL=cliente.schemas.js.map