import type { NextFunction, Request, Response } from "express";
import { loginBarbero, loginCliente, loginSuperAdmin, logout, refreshTokens } from "./auth.service.js";

export async function loginClienteController(req: Request, res: Response, next: NextFunction) {
  try {
    const { cedula_cliente, contrasena } = req.body as { cedula_cliente: string; contrasena: string };
    const tokens = await loginCliente(cedula_cliente, contrasena);
    return res.json(tokens);
  } catch (err) {
    next(err);
  }
}

export async function loginBarberoController(req: Request, res: Response, next: NextFunction) {
  try {
    const { cedula_barbero, contrasena } = req.body as { cedula_barbero: string; contrasena: string };
    const tokens = await loginBarbero(cedula_barbero, contrasena);
    return res.json(tokens);
  } catch (err) {
    next(err);
  }
}

export async function loginSuperAdminController(req: Request, res: Response, next: NextFunction) {
  try {
    const { correo, contrasena } = req.body as { correo: string; contrasena: string };
    const tokens = await loginSuperAdmin(correo, contrasena);
    return res.json(tokens);
  } catch (err) {
    next(err);
  }
}

export async function refreshController(req: Request, res: Response, next: NextFunction) {
  try {
    const { refreshToken } = req.body as { refreshToken: string };
    const tokens = await refreshTokens(refreshToken);
    return res.json(tokens);
  } catch (err) {
    next(err);
  }
}

export async function logoutController(req: Request, res: Response, next: NextFunction) {
  try {
    const { refreshToken } = req.body as { refreshToken: string };
    const result = await logout(refreshToken);
    return res.json(result);
  } catch (err) {
    next(err);
  }
}

