import { StatusCodes } from "http-status-codes";
import { createCliente, deleteCliente, getClienteByCedula, updateCliente } from "./cliente.service.js";
export async function createClienteController(req, res, next) {
    try {
        const created = await createCliente(req.body);
        return res.status(StatusCodes.CREATED).json(created);
    }
    catch (err) {
        next(err);
    }
}
export async function getClienteByCedulaController(req, res, next) {
    try {
        const cliente = await getClienteByCedula(String(req.params.cedula_cliente));
        return res.json(cliente);
    }
    catch (err) {
        next(err);
    }
}
export async function updateClienteController(req, res, next) {
    try {
        const updated = await updateCliente(String(req.params.cedula_cliente), req.body);
        return res.json(updated);
    }
    catch (err) {
        next(err);
    }
}
export async function deleteClienteController(req, res, next) {
    try {
        const result = await deleteCliente(String(req.params.cedula_cliente));
        return res.json(result);
    }
    catch (err) {
        next(err);
    }
}
//# sourceMappingURL=cliente.controller.js.map