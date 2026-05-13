import { z } from "zod";
export declare const citaEstadoSchema: z.ZodEnum<{
    Pendiente: "Pendiente";
    Cancelada: "Cancelada";
    Confirmada: "Confirmada";
    Completada: "Completada";
}>;
export declare const createCitaSchema: z.ZodObject<{
    body: z.ZodObject<{
        cedula_cliente: z.ZodString;
        cedula_barbero: z.ZodString;
        id_especialidad: z.ZodCoercedNumber<unknown>;
        fecha: z.ZodCoercedDate<unknown>;
        hora: z.ZodString;
    }, z.core.$strip>;
    query: z.ZodOptional<z.ZodAny>;
    params: z.ZodOptional<z.ZodAny>;
}, z.core.$strip>;
export declare const cancelarCitaSchema: z.ZodObject<{
    params: z.ZodObject<{
        id_cita: z.ZodString;
    }, z.core.$strip>;
    body: z.ZodOptional<z.ZodObject<{}, z.core.$strip>>;
    query: z.ZodOptional<z.ZodAny>;
}, z.core.$strip>;
export declare const actualizarEstadoCitaSchema: z.ZodObject<{
    params: z.ZodObject<{
        id_cita: z.ZodString;
    }, z.core.$strip>;
    body: z.ZodObject<{
        estado: z.ZodEnum<{
            Pendiente: "Pendiente";
            Cancelada: "Cancelada";
            Confirmada: "Confirmada";
            Completada: "Completada";
        }>;
    }, z.core.$strip>;
    query: z.ZodOptional<z.ZodAny>;
}, z.core.$strip>;
export declare const listarCitasPorDiaSchema: z.ZodObject<{
    query: z.ZodObject<{
        fecha: z.ZodOptional<z.ZodString>;
        cedula_barbero: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>;
    body: z.ZodOptional<z.ZodAny>;
    params: z.ZodOptional<z.ZodAny>;
}, z.core.$strip>;
//# sourceMappingURL=cita.schemas.d.ts.map