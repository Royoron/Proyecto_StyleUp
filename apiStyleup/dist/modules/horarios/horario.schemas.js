import { z } from "zod";
import { cedulaSchema } from "../clientes/cliente.schemas.js";
const diaSemanaSchema = z.enum([
    "Lunes",
    "Martes",
    "Miércoles",
    "Jueves",
    "Viernes",
    "Sábado",
    "Domingo",
]);
const horaSchema = z.string().regex(/^\d{2}:\d{2}$/);
const franjaSemanalSchema = z
    .object({
    dia: diaSemanaSchema,
    hora_inicio: horaSchema,
    hora_fin: horaSchema,
})
    .refine((franja) => franja.hora_inicio < franja.hora_fin, {
    message: "La hora de inicio debe ser menor a la hora de fin",
});
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
export const horarioBarberoParamsSchema = z.object({
    params: z.object({
        cedula_barbero: cedulaSchema,
    }),
    body: z.any().optional(),
    query: z.any().optional(),
});
export const replaceHorarioBarberoSchema = z.object({
    params: z.object({
        cedula_barbero: cedulaSchema,
    }),
    body: z.object({
        horario: z.array(franjaSemanalSchema),
    }),
    query: z.any().optional(),
});
//# sourceMappingURL=horario.schemas.js.map