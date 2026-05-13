import { StatusCodes } from "http-status-codes";
import { actualizarEstadoCita, cancelarCita, createCitaTx, listarCitasPorBarbero, listarCitasPorDia, } from "./cita.service.js";
export async function createCitaController(req, res, next) {
    try {
        const created = await createCitaTx(req.body);
        return res.status(StatusCodes.CREATED).json(created);
    }
    catch (err) {
        next(err);
    }
}
export async function cancelarCitaController(req, res, next) {
    try {
        const updated = await cancelarCita(String(req.params.id_cita));
        return res.json(updated);
    }
    catch (err) {
        next(err);
    }
}
export async function actualizarEstadoCitaController(req, res, next) {
    try {
        const updated = await actualizarEstadoCita(String(req.params.id_cita), req.body.estado);
        return res.json(updated);
    }
    catch (err) {
        next(err);
    }
}
export async function listarCitasPorDiaController(req, res, next) {
    try {
        if (req.query.cedula_barbero) {
            const citas = await listarCitasPorBarbero(String(req.query.cedula_barbero));
            return res.json(citas);
        }
        const citas = await listarCitasPorDia(req.query.fecha);
        return res.json(citas);
    }
    catch (err) {
        next(err);
    }
}
//# sourceMappingURL=cita.controller.js.map