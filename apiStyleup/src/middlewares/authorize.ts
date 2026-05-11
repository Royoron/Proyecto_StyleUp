import type { NextFunction, Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import type { UserRole } from "../utils/jwt.js";

export function authorize(roles: UserRole[]) {
  return (req: Request, res: Response, next: NextFunction) => {
    if (!req.user) {
      return res.status(StatusCodes.UNAUTHORIZED).json({ message: "No autenticado" });
    }
    if (!roles.includes(req.user.role)) {
      return res.status(StatusCodes.FORBIDDEN).json({ message: "No autorizado" });
    }
    next();
  };
}

