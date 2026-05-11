import type { NextFunction, Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import { createHorario, deleteHorario, getHorarioById, updateHorario } from "./horario.service.js";

export async function createHorarioController(req: Request, res: Response, next: NextFunction) {
  try {
    const created = await createHorario(req.body);
    return res.status(StatusCodes.CREATED).json(created);
  } catch (err) {
    next(err);
  }
}

export async function getHorarioByIdController(req: Request, res: Response, next: NextFunction) {
  try {
    const horario = await getHorarioById(Number(req.params.id_horario));
    return res.json(horario);
  } catch (err) {
    next(err);
  }
}

export async function updateHorarioController(req: Request, res: Response, next: NextFunction) {
  try {
    const updated = await updateHorario(Number(req.params.id_horario), req.body);
    return res.json(updated);
  } catch (err) {
    next(err);
  }
}

export async function deleteHorarioController(req: Request, res: Response, next: NextFunction) {
  try {
    const result = await deleteHorario(Number(req.params.id_horario));
    return res.json(result);
  } catch (err) {
    next(err);
  }
}

