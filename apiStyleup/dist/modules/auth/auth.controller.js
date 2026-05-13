import { loginBarbero, loginCliente, loginSuperAdmin, logout, refreshTokens } from "./auth.service.js";
export async function loginClienteController(req, res, next) {
    try {
        const { cedula_cliente, contrasena } = req.body;
        const tokens = await loginCliente(cedula_cliente, contrasena);
        return res.json(tokens);
    }
    catch (err) {
        next(err);
    }
}
export async function loginBarberoController(req, res, next) {
    try {
        const { cedula_barbero, contrasena } = req.body;
        const tokens = await loginBarbero(cedula_barbero, contrasena);
        return res.json(tokens);
    }
    catch (err) {
        next(err);
    }
}
export async function loginSuperAdminController(req, res, next) {
    try {
        const { correo, contrasena } = req.body;
        const tokens = await loginSuperAdmin(correo, contrasena);
        return res.json(tokens);
    }
    catch (err) {
        next(err);
    }
}
export async function refreshController(req, res, next) {
    try {
        const { refreshToken } = req.body;
        const tokens = await refreshTokens(refreshToken);
        return res.json(tokens);
    }
    catch (err) {
        next(err);
    }
}
export async function logoutController(req, res, next) {
    try {
        const { refreshToken } = req.body;
        const result = await logout(refreshToken);
        return res.json(result);
    }
    catch (err) {
        next(err);
    }
}
//# sourceMappingURL=auth.controller.js.map