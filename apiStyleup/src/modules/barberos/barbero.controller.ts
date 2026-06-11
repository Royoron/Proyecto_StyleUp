import type { NextFunction, Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import {
  createBarbero,
  deleteBarbero,
  getBarberoByCedula,
  getBarberosDisponiblesByEspecialidad,
  listBarberos,
  updateBarbero,
} from "./barbero.service.js";

export async function listBarberosController(_req: Request, res: Response, next: NextFunction) {
  try {
    const barberos = await listBarberos();
    return res.json(barberos);
  } catch (err) {
    next(err);
  }
}

export async function createBarberoController(req: Request, res: Response, next: NextFunction) {
  try {
    const created = await createBarbero(req.body);
    return res.status(StatusCodes.CREATED).json(created);
  } catch (err) {
    next(err);
  }
}

export async function getBarberoByCedulaController(req: Request, res: Response, next: NextFunction) {
  try {
    const barbero = await getBarberoByCedula(String(req.params.cedula_barbero));
    return res.json(barbero);
  } catch (err) {
    next(err);
  }
}

export async function updateBarberoController(req: Request, res: Response, next: NextFunction) {
  try {
    const updated = await updateBarbero(String(req.params.cedula_barbero), req.body);
    return res.json(updated);
  } catch (err) {
    next(err);
  }
}

export async function deleteBarberoController(req: Request, res: Response, next: NextFunction) {
  try {
    const result = await deleteBarbero(String(req.params.cedula_barbero));
    return res.json(result);
  } catch (err) {
    next(err);
  }
}

export async function disponiblesController(req: Request, res: Response, next: NextFunction) {
  try {
    const id_especialidad = Number(req.query.id_especialidad);
    const fecha = req.query.fecha ? String(req.query.fecha) : undefined;
    const result = await getBarberosDisponiblesByEspecialidad(
      id_especialidad,
      fecha,
    );
    return res.json(result);
  } catch (err) {
    next(err);
  }
}

