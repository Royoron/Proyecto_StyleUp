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

export function getBarberosDisponibles(id_especialidad: number) {
  const query = new URLSearchParams({
    id_especialidad: String(id_especialidad),
  });
  return request<Barbero[]>(`/barberos/disponibles?${query.toString()}`);
}
