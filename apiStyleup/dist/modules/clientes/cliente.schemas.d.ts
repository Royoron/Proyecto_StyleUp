import { z } from "zod";
export declare const cedulaSchema: z.ZodString;
export declare const createClienteBodySchema: z.ZodObject<{
    cedula_cliente: z.ZodString;
    nombre: z.ZodString;
    apellido: z.ZodString;
    telefono: z.ZodString;
    correo: z.ZodString;
    contrasena: z.ZodString;
}, z.core.$strip>;
export declare const createClienteSchema: z.ZodObject<{
    body: z.ZodObject<{
        cedula_cliente: z.ZodString;
        nombre: z.ZodString;
        apellido: z.ZodString;
        telefono: z.ZodString;
        correo: z.ZodString;
        contrasena: z.ZodString;
    }, z.core.$strip>;
    query: z.ZodOptional<z.ZodAny>;
    params: z.ZodOptional<z.ZodAny>;
}, z.core.$strip>;
export declare const updateClienteSchema: z.ZodObject<{
    body: z.ZodObject<{
        correo: z.ZodOptional<z.ZodString>;
        nombre: z.ZodOptional<z.ZodString>;
        apellido: z.ZodOptional<z.ZodString>;
        telefono: z.ZodOptional<z.ZodString>;
        contrasena: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>;
    params: z.ZodObject<{
        cedula_cliente: z.ZodString;
    }, z.core.$strip>;
    query: z.ZodOptional<z.ZodAny>;
}, z.core.$strip>;
//# sourceMappingURL=cliente.schemas.d.ts.map