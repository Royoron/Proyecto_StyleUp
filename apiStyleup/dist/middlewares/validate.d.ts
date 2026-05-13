import type { NextFunction, Request, Response } from "express";
import type { ZodTypeAny } from "zod";
export declare function validate(schema: ZodTypeAny): (req: Request, res: Response, next: NextFunction) => Response<any, Record<string, any>> | undefined;
//# sourceMappingURL=validate.d.ts.map