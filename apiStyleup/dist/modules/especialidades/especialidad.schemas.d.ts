import { z } from "zod";
export declare const especialidadBodySchema: z.ZodObject<{
    especialidad: z.ZodString;
    tiempo_estimado: z.ZodCoercedNumber<unknown>;
}, z.core.$strip>;
export declare const createEspecialidadSchema: z.ZodObject<{
    body: z.ZodObject<{
        especialidad: z.ZodString;
        tiempo_estimado: z.ZodCoercedNumber<unknown>;
    }, z.core.$strip>;
    query: z.ZodOptional<z.ZodAny>;
    params: z.ZodOptional<z.ZodAny>;
}, z.core.$strip>;
export declare const updateEspecialidadSchema: z.ZodObject<{
    body: z.ZodObject<{
        especialidad: z.ZodOptional<z.ZodString>;
        tiempo_estimado: z.ZodOptional<z.ZodCoercedNumber<unknown>>;
    }, z.core.$strip>;
    params: z.ZodObject<{
        id_especialidad: z.ZodCoercedNumber<unknown>;
    }, z.core.$strip>;
    query: z.ZodOptional<z.ZodAny>;
}, z.core.$strip>;
export declare const getEspecialidadSchema: z.ZodObject<{
    params: z.ZodObject<{
        id_especialidad: z.ZodCoercedNumber<unknown>;
    }, z.core.$strip>;
    body: z.ZodOptional<z.ZodAny>;
    query: z.ZodOptional<z.ZodAny>;
}, z.core.$strip>;
//# sourceMappingURL=especialidad.schemas.d.ts.map