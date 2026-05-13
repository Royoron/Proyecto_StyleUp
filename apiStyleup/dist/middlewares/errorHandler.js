import { StatusCodes } from "http-status-codes";
import { ApiError } from "../utils/apiError.js";
export function errorHandler(err, _req, res, _next) {
    console.error("API error", err);
    if (err instanceof ApiError) {
        return res.status(err.statusCode).json({
            message: err.message,
            details: err.details,
        });
    }
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
        message: "Error interno del servidor",
    });
}
//# sourceMappingURL=errorHandler.js.map