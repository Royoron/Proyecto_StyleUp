import { StatusCodes } from "http-status-codes";
import { ApiError } from "../../utils/apiError.js";
import { createHorario, deleteHorario, getHorarioById, listHorariosByBarbero, replaceHorarioSemanalBarbero, updateHorario, } from "./horario.service.js";
function assertPuedeGestionarHorario(req, cedula_barbero) {
    if (req.user?.role === "SUPERADMIN")
        return;
    if (req.user?.role === "BARBERO" && req.user.sub === cedula_barbero)
        return;
    throw new ApiError(StatusCodes.FORBIDDEN, "No autorizado");
}
export async function createHorarioController(req, res, next) {
    try {
        const created = await createHorario(req.body);
        return res.status(StatusCodes.CREATED).json(created);
    }
    catch (err) {
        next(err);
    }
}
export async function getHorarioByIdController(req, res, next) {
    try {
        const horario = await getHorarioById(Number(req.params.id_horario));
        return res.json(horario);
    }
    catch (err) {
        next(err);
    }
}
export async function updateHorarioController(req, res, next) {
    try {
        const updated = await updateHorario(Number(req.params.id_horario), req.body);
        return res.json(updated);
    }
    catch (err) {
        next(err);
    }
}
export async function deleteHorarioController(req, res, next) {
    try {
        const result = await deleteHorario(Number(req.params.id_horario));
        return res.json(result);
    }
    catch (err) {
        next(err);
    }
}
export async function listHorariosByBarberoController(req, res, next) {
    try {
        const cedula_barbero = String(req.params.cedula_barbero);
        assertPuedeGestionarHorario(req, cedula_barbero);
        const horarios = await listHorariosByBarbero(cedula_barbero);
        return res.json(horarios);
    }
    catch (err) {
        next(err);
    }
}
export async function replaceHorarioBarberoController(req, res, next) {
    try {
        const cedula_barbero = String(req.params.cedula_barbero);
        assertPuedeGestionarHorario(req, cedula_barbero);
        const horarios = await replaceHorarioSemanalBarbero(cedula_barbero, req.body.horario);
        return res.json(horarios);
    }
    catch (err) {
        next(err);
    }
}
//# sourceMappingURL=horario.controller.js.map