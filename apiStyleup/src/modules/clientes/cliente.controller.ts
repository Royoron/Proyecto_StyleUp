import type { Request, Response, NextFunction } from "express";
import { StatusCodes } from "http-status-codes";
import { createCliente, deleteCliente, getClienteByCedula, updateCliente } from "./cliente.service.js";

export async function createClienteController(req: Request, res: Response, next: NextFunction) {
  try {
    const created = await createCliente(req.body);
    return res.status(StatusCodes.CREATED).json(created);
  } catch (err) {
    next(err);
  }
}

export async function getClienteByCedulaController(req: Request, res: Response, next: NextFunction) {
  try {
    const cliente = await getClienteByCedula(String(req.params.cedula_cliente));
    return res.json(cliente);
  } catch (err) {
    next(err);
  }
}

export async function updateClienteController(req: Request, res: Response, next: NextFunction) {
  try {
    const updated = await updateCliente(String(req.params.cedula_cliente), req.body);
    return res.json(updated);
  } catch (err) {
    next(err);
  }
}

export async function deleteClienteController(req: Request, res: Response, next: NextFunction) {
  try {
    const result = await deleteCliente(String(req.params.cedula_cliente));
    return res.json(result);
  } catch (err) {
    next(err);
  }
}

