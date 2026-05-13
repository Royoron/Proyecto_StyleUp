import { StatusCodes } from "http-status-codes";
import { createBarbero, deleteBarbero, getBarberoByCedula, getBarberosDisponiblesByEspecialidad, updateBarbero, } from "./barbero.service.js";
export async function createBarberoController(req, res, next) {
    try {
        const created = await createBarbero(req.body);
        return res.status(StatusCodes.CREATED).json(created);
    }
    catch (err) {
        next(err);
    }
}
export async function getBarberoByCedulaController(req, res, next) {
    try {
        const barbero = await getBarberoByCedula(String(req.params.cedula_barbero));
        return res.json(barbero);
    }
    catch (err) {
        next(err);
    }
}
export async function updateBarberoController(req, res, next) {
    try {
        const updated = await updateBarbero(String(req.params.cedula_barbero), req.body);
        return res.json(updated);
    }
    catch (err) {
        next(err);
    }
}
export async function deleteBarberoController(req, res, next) {
    try {
        const result = await deleteBarbero(String(req.params.cedula_barbero));
        return res.json(result);
    }
    catch (err) {
        next(err);
    }
}
export async function disponiblesController(req, res, next) {
    try {
        const id_especialidad = Number(req.query.id_especialidad);
        const result = await getBarberosDisponiblesByEspecialidad(id_especialidad);
        return res.json(result);
    }
    catch (err) {
        next(err);
    }
}
//# sourceMappingURL=barbero.controller.js.map