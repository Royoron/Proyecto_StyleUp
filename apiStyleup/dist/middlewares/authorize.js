import { StatusCodes } from "http-status-codes";
export function authorize(roles) {
    return (req, res, next) => {
        if (!req.user) {
            return res.status(StatusCodes.UNAUTHORIZED).json({ message: "No autenticado" });
        }
        if (!roles.includes(req.user.role)) {
            return res.status(StatusCodes.FORBIDDEN).json({ message: "No autorizado" });
        }
        next();
    };
}
//# sourceMappingURL=authorize.js.map