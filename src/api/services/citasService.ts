import { request } from "../client";
import type { Cita } from "../../types";

type CitaApi = {
  id_cita: string;
  cedula_cliente: string;
  cedula_barbero: string;
  id_especialidad: number;
  fecha: string;
  hora: string;
  estado: string;
};

function normalizeFecha(fechaIso: string) {
  return new Date(fechaIso).toISOString().split("T")[0];
}

function mapCita(input: CitaApi): Cita {
  return {
    id_cita: input.id_cita,
    cedula_cliente: input.cedula_cliente,
    cedula_barbero: input.cedula_barbero,
    id_especialidad: input.id_especialidad,
    fecha: normalizeFecha(input.fecha),
    hora: input.hora,
    estado: input.estado as Cita["estado"],
  };
}

export function createCita(input: {
  cedula_cliente: string;
  cedula_barbero: string;
  id_especialidad: number;
  fecha: string;
  hora: string;
}) {
  return request<CitaApi>("/citas", {
    method: "POST",
    body: JSON.stringify({ ...input, fecha: input.fecha }),
  }).then(mapCita);
}

export function listarCitasPorDia(fecha: string) {
  const query = new URLSearchParams({ fecha });
  return request<CitaApi[]>(`/citas?${query.toString()}`).then((list) =>
    list.map(mapCita),
  );
}

export function listarCitasPorBarbero(cedula_barbero: string) {
  const query = new URLSearchParams({ cedula_barbero });
  return request<CitaApi[]>(`/citas?${query.toString()}`).then((list) =>
    list.map(mapCita),
  );
}

export function cancelarCita(id_cita: string) {
  return request<CitaApi>(`/citas/${encodeURIComponent(id_cita)}/cancelar`, {
    method: "POST",
  }).then(mapCita);
}

export function actualizarEstadoCita(
  id_cita: string,
  estado: "Completada" | "Cancelada",
) {
  return request<CitaApi>(`/citas/${encodeURIComponent(id_cita)}/estado`, {
    method: "PATCH",
    body: JSON.stringify({ estado }),
  }).then(mapCita);
}
