import { Router } from "express";
import { auth } from "../../middlewares/auth.js";
import { authorize } from "../../middlewares/authorize.js";
import {
  metricasController,
  reporteBarberosController,
  reporteClientesController,
} from "./reporte.controller.js";

export const reporteRoutes = Router();

reporteRoutes.get("/metricas", auth, authorize(["SUPERADMIN"]), metricasController);
reporteRoutes.get("/barberos", auth, authorize(["SUPERADMIN"]), reporteBarberosController);
reporteRoutes.get("/clientes", auth, authorize(["SUPERADMIN"]), reporteClientesController);
