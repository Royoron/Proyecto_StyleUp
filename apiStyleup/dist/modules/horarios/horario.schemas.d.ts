import { z } from "zod";
export declare const createHorarioSchema: z.ZodObject<{
    body: z.ZodObject<{
        cedula_barbero: z.ZodString;
        id_estado: z.ZodCoercedNumber<unknown>;
        hora_inicio: z.ZodString;
        hora_fin: z.ZodString;
        fecha: z.ZodCoercedDate<unknown>;
    }, z.core.$strip>;
    query: z.ZodOptional<z.ZodAny>;
    params: z.ZodOptional<z.ZodAny>;
}, z.core.$strip>;
export declare const updateHorarioSchema: z.ZodObject<{
    params: z.ZodObject<{
        id_horario: z.ZodCoercedNumber<unknown>;
    }, z.core.$strip>;
    body: z.ZodObject<{
        id_estado: z.ZodOptional<z.ZodCoercedNumber<unknown>>;
        hora_inicio: z.ZodOptional<z.ZodString>;
        hora_fin: z.ZodOptional<z.ZodString>;
        fecha: z.ZodOptional<z.ZodCoercedDate<unknown>>;
    }, z.core.$strip>;
    query: z.ZodOptional<z.ZodAny>;
}, z.core.$strip>;
export declare const idHorarioParamsSchema: z.ZodObject<{
    params: z.ZodObject<{
        id_horario: z.ZodCoercedNumber<unknown>;
    }, z.core.$strip>;
    body: z.ZodOptional<z.ZodAny>;
    query: z.ZodOptional<z.ZodAny>;
}, z.core.$strip>;
export declare const horarioBarberoParamsSchema: z.ZodObject<{
    params: z.ZodObject<{
        cedula_barbero: z.ZodString;
    }, z.core.$strip>;
    body: z.ZodOptional<z.ZodAny>;
    query: z.ZodOptional<z.ZodAny>;
}, z.core.$strip>;
export declare const replaceHorarioBarberoSchema: z.ZodObject<{
    params: z.ZodObject<{
        cedula_barbero: z.ZodString;
    }, z.core.$strip>;
    body: z.ZodObject<{
        horario: z.ZodArray<z.ZodObject<{
            dia: z.ZodEnum<{
                Lunes: "Lunes";
                Martes: "Martes";
                Miércoles: "Miércoles";
                Jueves: "Jueves";
                Viernes: "Viernes";
                Sábado: "Sábado";
                Domingo: "Domingo";
            }>;
            hora_inicio: z.ZodString;
            hora_fin: z.ZodString;
        }, z.core.$strip>>;
    }, z.core.$strip>;
    query: z.ZodOptional<z.ZodAny>;
}, z.core.$strip>;
//# sourceMappingURL=horario.schemas.d.ts.map