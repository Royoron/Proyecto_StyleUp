import { Router } from "express";
import { auth } from "../../middlewares/auth.js";
import { authorize } from "../../middlewares/authorize.js";
import { validate } from "../../middlewares/validate.js";
import { createHorarioController, deleteHorarioController, getHorarioByIdController, listHorariosByBarberoController, replaceHorarioBarberoController, updateHorarioController, } from "./horario.controller.js";
import { createHorarioSchema, horarioBarberoParamsSchema, idHorarioParamsSchema, replaceHorarioBarberoSchema, updateHorarioSchema, } from "./horario.schemas.js";
export const horarioRoutes = Router();
horarioRoutes.get("/barbero/:cedula_barbero", auth, validate(horarioBarberoParamsSchema), listHorariosByBarberoController);
horarioRoutes.put("/barbero/:cedula_barbero", auth, validate(replaceHorarioBarberoSchema), replaceHorarioBarberoController);
horarioRoutes.post("/", auth, authorize(["SUPERADMIN"]), validate(createHorarioSchema), createHorarioController);
horarioRoutes.get("/:id_horario", auth, validate(idHorarioParamsSchema), getHorarioByIdController);
horarioRoutes.put("/:id_horario", auth, authorize(["SUPERADMIN"]), validate(updateHorarioSchema), updateHorarioController);
horarioRoutes.delete("/:id_horario", auth, authorize(["SUPERADMIN"]), validate(idHorarioParamsSchema), deleteHorarioController);
//# sourceMappingURL=horario.routes.js.map