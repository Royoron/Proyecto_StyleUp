import { ZodError } from "zod";
import { StatusCodes } from "http-status-codes";
export function validate(schema) {
    return (req, res, next) => {
        try {
            const parsed = schema.parse({
                body: req.body,
                query: req.query,
                params: req.params,
            });
            req.body = parsed.body ?? req.body;
            next();
        }
        catch (err) {
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
//# sourceMappingURL=validate.js.map