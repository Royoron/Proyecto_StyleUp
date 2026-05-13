import { Router } from "express";
import { validate } from "../../middlewares/validate.js";
import {
  createClienteController,
  deleteClienteController,
  getClienteByCedulaController,
  updateClienteController,
} from "./cliente.controller.js";
import { createClienteSchema, updateClienteSchema } from "./cliente.schemas.js";

export const clienteRoutes = Router();

clienteRoutes.post("/", validate(createClienteSchema), createClienteController);
clienteRoutes.get("/:cedula_cliente", getClienteByCedulaController);
clienteRoutes.put("/:cedula_cliente", validate(updateClienteSchema), updateClienteController);
clienteRoutes.delete("/:cedula_cliente", deleteClienteController);

