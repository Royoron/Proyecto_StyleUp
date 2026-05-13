import { request } from "../client";
import type { Especialidad } from "../../types";

export function listarEspecialidades() {
  return request<Especialidad[]>("/especialidades");
}
