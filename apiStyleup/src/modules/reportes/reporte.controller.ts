import type { NextFunction, Request, Response } from "express";
import {
  obtenerMetricas,
  reporteBarberos,
  reporteClientesFieles,
} from "./reporte.service.js";

export async function metricasController(_req: Request, res: Response, next: NextFunction) {
  try {
    const metricas = await obtenerMetricas();
    return res.json(metricas);
  } catch (err) {
    next(err);
  }
}

export async function reporteBarberosController(_req: Request, res: Response, next: NextFunction) {
  try {
    const reporte = await reporteBarberos();
    return res.json(reporte);
  } catch (err) {
    next(err);
  }
}

export async function reporteClientesController(req: Request, res: Response, next: NextFunction) {
  try {
    const limite = req.query.limite ? Number(req.query.limite) : undefined;
    const reporte = await reporteClientesFieles(
      Number.isInteger(limite) && limite! > 0 ? limite : undefined,
    );
    return res.json(reporte);
  } catch (err) {
    next(err);
  }
}
