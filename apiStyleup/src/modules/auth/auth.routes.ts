import { Router } from "express";
import { validate } from "../../middlewares/validate.js";
import {
  loginBarberoController,
  loginClienteController,
  loginSuperAdminController,
  logoutController,
  refreshController,
} from "./auth.controller.js";
import {
  loginBarberoSchema,
  loginClienteSchema,
  loginSuperAdminSchema,
  logoutSchema,
  refreshSchema,
} from "./auth.schemas.js";

export const authRoutes = Router();

authRoutes.post("/login/cliente", validate(loginClienteSchema), loginClienteController);
authRoutes.post("/login/barbero", validate(loginBarberoSchema), loginBarberoController);
authRoutes.post("/login/superadmin", validate(loginSuperAdminSchema), loginSuperAdminController);

authRoutes.post("/refresh", validate(refreshSchema), refreshController);
authRoutes.post("/logout", validate(logoutSchema), logoutController);

