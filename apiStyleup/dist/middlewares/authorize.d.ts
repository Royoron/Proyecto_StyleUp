import type { NextFunction, Request, Response } from "express";
import type { UserRole } from "../utils/jwt.js";
export declare function authorize(roles: UserRole[]): (req: Request, res: Response, next: NextFunction) => Response<any, Record<string, any>> | undefined;
//# sourceMappingURL=authorize.d.ts.map