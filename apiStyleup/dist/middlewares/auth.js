import { StatusCodes } from "http-status-codes";
import { verifyAccessToken } from "../utils/jwt.js";
export function auth(req, res, next) {
    const header = req.headers.authorization;
    if (!header?.startsWith("Bearer ")) {
        return res.status(StatusCodes.UNAUTHORIZED).json({ message: "No autenticado" });
    }
    const token = header.slice("Bearer ".length).trim();
    try {
        const claims = verifyAccessToken(token);
        req.user = { sub: claims.sub, role: claims.role };
        next();
    }
    catch {
        return res.status(StatusCodes.UNAUTHORIZED).json({ message: "Token inválido o expirado" });
    }
}
//# sourceMappingURL=auth.js.map