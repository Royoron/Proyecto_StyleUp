import { Router } from "express";
import { auth } from "../../middlewares/auth.js";
import { authorize } from "../../middlewares/authorize.js";
import { validate } from "../../middlewares/validate.js";
import { createEspecialidadController, deleteEspecialidadController, getEspecialidadByIdController, listEspecialidadesController, updateEspecialidadController, } from "./especialidad.controller.js";
import { createEspecialidadSchema, getEspecialidadSchema, updateEspecialidadSchema, } from "./especialidad.schemas.js";
export const especialidadRoutes = Router();
especialidadRoutes.get("/", listEspecialidadesController);
especialidadRoutes.get("/:id_especialidad", validate(getEspecialidadSchema), getEspecialidadByIdController);
especialidadRoutes.post("/", auth, authorize(["SUPERADMIN"]), validate(createEspecialidadSchema), createEspecialidadController);
especialidadRoutes.put("/:id_especialidad", auth, authorize(["SUPERADMIN"]), validate(updateEspecialidadSchema), updateEspecialidadController);
especialidadRoutes.delete("/:id_especialidad", auth, authorize(["SUPERADMIN"]), validate(getEspecialidadSchema), deleteEspecialidadController);
//# sourceMappingURL=especialidad.routes.js.map