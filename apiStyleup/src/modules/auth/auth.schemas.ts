import { z } from "zod";
import { cedulaSchema } from "../clientes/cliente.schemas.js";

export const loginClienteSchema = z.object({
  body: z.object({
    cedula_cliente: cedulaSchema,
    contrasena: z.string().min(1),
  }),
  query: z.any().optional(),
  params: z.any().optional(),
});

export const loginBarberoSchema = z.object({
  body: z.object({
    cedula_barbero: cedulaSchema,
    contrasena: z.string().min(1),
  }),
  query: z.any().optional(),
  params: z.any().optional(),
});

export const loginSuperAdminSchema = z.object({
  body: z.object({
    correo: z.string().email(),
    contrasena: z.string().min(1),
  }),
  query: z.any().optional(),
  params: z.any().optional(),
});

export const refreshSchema = z.object({
  body: z.object({
    refreshToken: z.string().min(1),
  }),
  query: z.any().optional(),
  params: z.any().optional(),
});

export const logoutSchema = refreshSchema;

