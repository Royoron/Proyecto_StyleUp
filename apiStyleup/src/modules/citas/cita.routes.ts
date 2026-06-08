import { Router } from "express";
import { auth } from "../../middlewares/auth.js";
import { validate } from "../../middlewares/validate.js";
import {
  actualizarEstadoCitaController,
  cancelarCitaController,
  createCitaController,
  listarCitasPorDiaController,
} from "./cita.controller.js";
import {
  actualizarEstadoCitaSchema,
  cancelarCitaSchema,
  createCitaSchema,
  listarCitasPorDiaSchema,
} from "./cita.schemas.js";

export const citaRoutes = Router();

citaRoutes.post("/", auth, validate(createCitaSchema), createCitaController);
citaRoutes.post("/:id_cita/cancelar", auth, validate(cancelarCitaSchema), cancelarCitaController);
citaRoutes.patch("/:id_cita/estado", auth, validate(actualizarEstadoCitaSchema), actualizarEstadoCitaController);
citaRoutes.get("/", auth, validate(listarCitasPorDiaSchema), listarCitasPorDiaController);
