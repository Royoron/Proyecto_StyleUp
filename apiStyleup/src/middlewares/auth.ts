import type { NextFunction, Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import { verifyAccessToken, type UserRole } from "../utils/jwt.js";

export type AuthUser = { sub: string; role: UserRole };

declare global {
  // eslint-disable-next-line no-var
  var __styleup_auth: unknown;
}

declare module "express-serve-static-core" {
  interface Request {
    user?: AuthUser;
  }
}

export function auth(req: Request, res: Response, next: NextFunction) {
  const header = req.headers.authorization;
  if (!header?.startsWith("Bearer ")) {
    return res.status(StatusCodes.UNAUTHORIZED).json({ message: "No autenticado" });
  }

  const token = header.slice("Bearer ".length).trim();
  try {
    const claims = verifyAccessToken(token);
    req.user = { sub: claims.sub, role: claims.role };
    next();
  } catch {
    return res.status(StatusCodes.UNAUTHORIZED).json({ message: "Token inválido o expirado" });
  }
}

