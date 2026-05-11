import { Router } from "express";
import { auth } from "../../middlewares/auth.js";
import { authorize } from "../../middlewares/authorize.js";
import { validate } from "../../middlewares/validate.js";
import {
  createHorarioController,
  deleteHorarioController,
  getHorarioByIdController,
  updateHorarioController,
} from "./horario.controller.js";
import { createHorarioSchema, idHorarioParamsSchema, updateHorarioSchema } from "./horario.schemas.js";

export const horarioRoutes = Router();

horarioRoutes.post("/", auth, authorize(["SUPERADMIN"]), validate(createHorarioSchema), createHorarioController);
horarioRoutes.get("/:id_horario", auth, validate(idHorarioParamsSchema), getHorarioByIdController);
horarioRoutes.put("/:id_horario", auth, authorize(["SUPERADMIN"]), validate(updateHorarioSchema), updateHorarioController);
horarioRoutes.delete("/:id_horario", auth, authorize(["SUPERADMIN"]), validate(idHorarioParamsSchema), deleteHorarioController);

