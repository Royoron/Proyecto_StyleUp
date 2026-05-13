import type { NextFunction, Request, Response } from "express";
import { type UserRole } from "../utils/jwt.js";
export type AuthUser = {
    sub: string;
    role: UserRole;
};
declare global {
    var __styleup_auth: unknown;
}
declare module "express-serve-static-core" {
    interface Request {
        user?: AuthUser;
    }
}
export declare function auth(req: Request, res: Response, next: NextFunction): Response<any, Record<string, any>> | undefined;
//# sourceMappingURL=auth.d.ts.map