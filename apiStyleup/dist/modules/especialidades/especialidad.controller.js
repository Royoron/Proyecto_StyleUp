import { StatusCodes } from "http-status-codes";
import { createEspecialidad, deleteEspecialidad, getEspecialidadById, listEspecialidades, updateEspecialidad, } from "./especialidad.service.js";
export async function listEspecialidadesController(req, res, next) {
    try {
        const result = await listEspecialidades();
        return res.json(result);
    }
    catch (err) {
        next(err);
    }
}
export async function getEspecialidadByIdController(req, res, next) {
    try {
        const id_especialidad = Number(req.params.id_especialidad);
        const result = await getEspecialidadById(id_especialidad);
        return res.json(result);
    }
    catch (err) {
        next(err);
    }
}
export async function createEspecialidadController(req, res, next) {
    try {
        const created = await createEspecialidad(req.body);
        return res.status(StatusCodes.CREATED).json(created);
    }
    catch (err) {
        next(err);
    }
}
export async function updateEspecialidadController(req, res, next) {
    try {
        const id_especialidad = Number(req.params.id_especialidad);
        const updated = await updateEspecialidad(id_especialidad, req.body);
        return res.json(updated);
    }
    catch (err) {
        next(err);
    }
}
export async function deleteEspecialidadController(req, res, next) {
    try {
        const id_especialidad = Number(req.params.id_especialidad);
        const result = await deleteEspecialidad(id_especialidad);
        return res.json(result);
    }
    catch (err) {
        next(err);
    }
}
//# sourceMappingURL=especialidad.controller.js.map