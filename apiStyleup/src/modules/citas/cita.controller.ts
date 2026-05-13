import type { NextFunction, Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import {
  actualizarEstadoCita,
  cancelarCita,
  createCitaTx,
  listarCitasPorBarbero,
  listarCitasPorDia,
} from "./cita.service.js";

export async function createCitaController(req: Request, res: Response, next: NextFunction) {
  try {
    const created = await createCitaTx(req.body);
    return res.status(StatusCodes.CREATED).json(created);
  } catch (err) {
    next(err);
  }
}

export async function cancelarCitaController(req: Request, res: Response, next: NextFunction) {
  try {
    const updated = await cancelarCita(String(req.params.id_cita));
    return res.json(updated);
  } catch (err) {
    next(err);
  }
}

export async function actualizarEstadoCitaController(req: Request, res: Response, next: NextFunction) {
  try {
    const updated = await actualizarEstadoCita(String(req.params.id_cita), req.body.estado);
    return res.json(updated);
  } catch (err) {
    next(err);
  }
}

export async function listarCitasPorDiaController(req: Request, res: Response, next: NextFunction) {
  try {
    if (req.query.cedula_barbero) {
      const citas = await listarCitasPorBarbero(String(req.query.cedula_barbero));
      return res.json(citas);
    }

    const citas = await listarCitasPorDia(req.query.fecha as string);
    return res.json(citas);
  } catch (err) {
    next(err);
  }
}
