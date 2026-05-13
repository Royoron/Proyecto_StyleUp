import { Router } from "express";
import { auth } from "../../middlewares/auth.js";
import { authorize } from "../../middlewares/authorize.js";
import { validate } from "../../middlewares/validate.js";
import { createBarberoController, deleteBarberoController, disponiblesController, getBarberoByCedulaController, updateBarberoController, } from "./barbero.controller.js";
import { createBarberoSchema, disponiblesSchema, updateBarberoSchema } from "./barbero.schemas.js";
export const barberoRoutes = Router();
barberoRoutes.get("/disponibles", auth, validate(disponiblesSchema), disponiblesController);
barberoRoutes.post("/", auth, authorize(["SUPERADMIN"]), validate(createBarberoSchema), createBarberoController);
barberoRoutes.get("/:cedula_barbero", auth, getBarberoByCedulaController);
barberoRoutes.put("/:cedula_barbero", auth, authorize(["SUPERADMIN"]), validate(updateBarberoSchema), updateBarberoController);
barberoRoutes.delete("/:cedula_barbero", auth, authorize(["SUPERADMIN"]), deleteBarberoController);
//# sourceMappingURL=barbero.routes.js.map