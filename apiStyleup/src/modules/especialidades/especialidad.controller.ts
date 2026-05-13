import type { NextFunction, Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import {
  createEspecialidad,
  deleteEspecialidad,
  getEspecialidadById,
  listEspecialidades,
  updateEspecialidad,
} from "./especialidad.service.js";

export async function listEspecialidadesController(
  req: Request,
  res: Response,
  next: NextFunction,
) {
  try {
    const result = await listEspecialidades();
    return res.json(result);
  } catch (err) {
    next(err);
  }
}

export async function getEspecialidadByIdController(
  req: Request,
  res: Response,
  next: NextFunction,
) {
  try {
    const id_especialidad = Number(req.params.id_especialidad);
    const result = await getEspecialidadById(id_especialidad);
    return res.json(result);
  } catch (err) {
    next(err);
  }
}

export async function createEspecialidadController(
  req: Request,
  res: Response,
  next: NextFunction,
) {
  try {
    const created = await createEspecialidad(req.body);
    return res.status(StatusCodes.CREATED).json(created);
  } catch (err) {
    next(err);
  }
}

export async function updateEspecialidadController(
  req: Request,
  res: Response,
  next: NextFunction,
) {
  try {
    const id_especialidad = Number(req.params.id_especialidad);
    const updated = await updateEspecialidad(id_especialidad, req.body);
    return res.json(updated);
  } catch (err) {
    next(err);
  }
}

export async function deleteEspecialidadController(
  req: Request,
  res: Response,
  next: NextFunction,
) {
  try {
    const id_especialidad = Number(req.params.id_especialidad);
    const result = await deleteEspecialidad(id_especialidad);
    return res.json(result);
  } catch (err) {
    next(err);
  }
}
