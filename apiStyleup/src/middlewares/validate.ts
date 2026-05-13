import type { NextFunction, Request, Response } from "express";
import type { ZodTypeAny } from "zod";
import { ZodError } from "zod";
import { StatusCodes } from "http-status-codes";

type ParsedRequestParts = {
  body?: unknown;
};

export function validate(schema: ZodTypeAny) {
  return (req: Request, res: Response, next: NextFunction) => {
    try {
      const parsed = schema.parse({
        body: req.body,
        query: req.query,
        params: req.params,
      }) as ParsedRequestParts;
      req.body = parsed.body ?? req.body;
      next();
    } catch (err) {
      if (err instanceof ZodError) {
        return res.status(StatusCodes.BAD_REQUEST).json({
          message: "Validación fallida",
          issues: err.issues,
        });
      }
      next(err);
    }
  };
}
