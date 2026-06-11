import { request } from "../client";
import type { Barbero } from "../../types";

type BarberoInput = {
  cedula_barbero: string;
  nombre: string;
  apellido: string;
  id_especialidad: number;
  correo: string;
  contrasena: string;
  telefono: string;
};

type BarberoUpdate = Partial<Omit<BarberoInput, "cedula_barbero">>;

export function createBarbero(input: BarberoInput) {
  return request<Barbero>("/barberos", {
    method: "POST",
    body: JSON.stringify(input),
  });
}

export function getBarberoByCedula(cedula_barbero: string) {
  return request<Barbero>(`/barberos/${encodeURIComponent(cedula_barbero)}`);
}

export function updateBarbero(cedula_barbero: string, patch: BarberoUpdate) {
  return request<Barbero>(`/barberos/${encodeURIComponent(cedula_barbero)}`, {
    method: "PUT",
    body: JSON.stringify(patch),
  });
}

export function deleteBarbero(cedula_barbero: string) {
  return request<{ deleted: boolean }>(
    `/barberos/${encodeURIComponent(cedula_barbero)}`,
    {
      method: "DELETE",
    },
  );
}

/** Barbero con la franja horaria del día consultado (si se filtró por fecha) */
export type BarberoDisponible = Barbero & {
  horario_dia?: { hora_inicio: string; hora_fin: string };
};

export function getBarberosDisponibles(id_especialidad: number, fecha?: string) {
  const query = new URLSearchParams({
    id_especialidad: String(id_especialidad),
  });
  if (fecha) query.set("fecha", fecha);
  return request<BarberoDisponible[]>(
    `/barberos/disponibles?${query.toString()}`,
  );
}

export function listBarberos() {
  return request<Barbero[]>("/barberos");
}
