import { z } from "zod";
export declare const loginClienteSchema: z.ZodObject<{
    body: z.ZodObject<{
        cedula_cliente: z.ZodString;
        contrasena: z.ZodString;
    }, z.core.$strip>;
    query: z.ZodOptional<z.ZodAny>;
    params: z.ZodOptional<z.ZodAny>;
}, z.core.$strip>;
export declare const loginBarberoSchema: z.ZodObject<{
    body: z.ZodObject<{
        cedula_barbero: z.ZodString;
        contrasena: z.ZodString;
    }, z.core.$strip>;
    query: z.ZodOptional<z.ZodAny>;
    params: z.ZodOptional<z.ZodAny>;
}, z.core.$strip>;
export declare const loginSuperAdminSchema: z.ZodObject<{
    body: z.ZodObject<{
        correo: z.ZodString;
        contrasena: z.ZodString;
    }, z.core.$strip>;
    query: z.ZodOptional<z.ZodAny>;
    params: z.ZodOptional<z.ZodAny>;
}, z.core.$strip>;
export declare const refreshSchema: z.ZodObject<{
    body: z.ZodObject<{
        refreshToken: z.ZodString;
    }, z.core.$strip>;
    query: z.ZodOptional<z.ZodAny>;
    params: z.ZodOptional<z.ZodAny>;
}, z.core.$strip>;
export declare const logoutSchema: z.ZodObject<{
    body: z.ZodObject<{
        refreshToken: z.ZodString;
    }, z.core.$strip>;
    query: z.ZodOptional<z.ZodAny>;
    params: z.ZodOptional<z.ZodAny>;
}, z.core.$strip>;
//# sourceMappingURL=auth.schemas.d.ts.map