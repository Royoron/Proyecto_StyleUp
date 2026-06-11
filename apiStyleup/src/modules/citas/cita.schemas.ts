import { z } from "zod";
import { cedulaSchema } from "../clientes/cliente.schemas.js";

export const citaEstadoSchema = z.enum(["Pendiente", "Confirmada", "Cancelada", "Completada"]);

export const horaSchema = z
  .string()
  .regex(/^([01]\d|2[0-3]):[0-5]\d$/, "La hora debe tener formato HH:MM");

export const createCitaSchema = z.object({
  body: z.object({
    cedula_cliente: cedulaSchema,
    cedula_barbero: cedulaSchema,
    id_especialidad: z.coerce.number().int().positive(),
    fecha: z.coerce.date(),
    hora: horaSchema,
  }),
  query: z.any().optional(),
  params: z.any().optional(),
});

export const cancelarCitaSchema = z.object({
  params: z.object({
    id_cita: z.string().min(1),
  }),
  body: z.object({}).optional(),
  query: z.any().optional(),
});

export const actualizarEstadoCitaSchema = z.object({
  params: z.object({
    id_cita: z.string().min(1),
  }),
  body: z.object({
    estado: citaEstadoSchema,
  }),
  query: z.any().optional(),
});

export const listarCitasPorDiaSchema = z.object({
  query: z
    .object({
      fecha: z.string().regex(/^\d{4}-\d{2}-\d{2}$/).optional(),
      cedula_barbero: cedulaSchema.optional(),
      cedula_cliente: cedulaSchema.optional(),
    })
    .refine((query) => query.fecha || query.cedula_barbero || query.cedula_cliente, {
      message: "Debe enviar fecha, cedula_barbero o cedula_cliente",
    }),
  body: z.any().optional(),
  params: z.any().optional(),
});
