import { z } from "zod";
export declare const createBarberoBodySchema: z.ZodObject<{
    cedula_barbero: z.ZodString;
    nombre: z.ZodString;
    apellido: z.ZodString;
    id_especialidad: z.ZodCoercedNumber<unknown>;
    correo: z.ZodString;
    contrasena: z.ZodString;
    telefono: z.ZodString;
}, z.core.$strip>;
export declare const createBarberoSchema: z.ZodObject<{
    body: z.ZodObject<{
        cedula_barbero: z.ZodString;
        nombre: z.ZodString;
        apellido: z.ZodString;
        id_especialidad: z.ZodCoercedNumber<unknown>;
        correo: z.ZodString;
        contrasena: z.ZodString;
        telefono: z.ZodString;
    }, z.core.$strip>;
    query: z.ZodOptional<z.ZodAny>;
    params: z.ZodOptional<z.ZodAny>;
}, z.core.$strip>;
export declare const updateBarberoSchema: z.ZodObject<{
    body: z.ZodObject<{
        correo: z.ZodOptional<z.ZodString>;
        nombre: z.ZodOptional<z.ZodString>;
        apellido: z.ZodOptional<z.ZodString>;
        telefono: z.ZodOptional<z.ZodString>;
        contrasena: z.ZodOptional<z.ZodString>;
        id_especialidad: z.ZodOptional<z.ZodCoercedNumber<unknown>>;
    }, z.core.$strip>;
    params: z.ZodObject<{
        cedula_barbero: z.ZodString;
    }, z.core.$strip>;
    query: z.ZodOptional<z.ZodAny>;
}, z.core.$strip>;
export declare const disponiblesSchema: z.ZodObject<{
    query: z.ZodObject<{
        id_especialidad: z.ZodCoercedNumber<unknown>;
    }, z.core.$strip>;
    body: z.ZodOptional<z.ZodAny>;
    params: z.ZodOptional<z.ZodAny>;
}, z.core.$strip>;
//# sourceMappingURL=barbero.schemas.d.ts.map