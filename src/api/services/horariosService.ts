import { request } from "../client";
import type { DiaSemana, FranjaHoraria } from "../../types";

export type HorarioApi = {
  id_horario: number;
  cedula_barbero: string;
  id_estado: number;
  hora_inicio: string;
  hora_fin: string;
  fecha: string;
};

export function createHorario(input: {
  cedula_barbero: string;
  id_estado: number;
  hora_inicio: string;
  hora_fin: string;
  fecha: string;
}) {
  return request<HorarioApi>("/horarios", {
    method: "POST",
    body: JSON.stringify(input),
  });
}

export function getHorarioById(id_horario: number) {
  return request<HorarioApi>(`/horarios/${id_horario}`);
}

export function updateHorario(
  id_horario: number,
  patch: Partial<Omit<HorarioApi, "id_horario" | "cedula_barbero">>,
) {
  return request<HorarioApi>(`/horarios/${id_horario}`, {
    method: "PUT",
    body: JSON.stringify(patch),
  });
}

export function deleteHorario(id_horario: number) {
  return request<{ deleted: boolean }>(`/horarios/${id_horario}`, {
    method: "DELETE",
  });
}

export function listHorariosByBarbero(cedula_barbero: string) {
  return request<HorarioApi[]>(
    `/horarios/barbero/${encodeURIComponent(cedula_barbero)}`,
  );
}

export function replaceHorarioBarbero(
  cedula_barbero: string,
  horario: FranjaHoraria[],
) {
  return request<HorarioApi[]>(
    `/horarios/barbero/${encodeURIComponent(cedula_barbero)}`,
    {
      method: "PUT",
      body: JSON.stringify({ horario }),
    },
  );
}

const diasNormalizados: Record<string, DiaSemana> = {
  lunes: "Lunes",
  martes: "Martes",
  miercoles: "Miércoles",
  miércoles: "Miércoles",
  jueves: "Jueves",
  viernes: "Viernes",
  sabado: "Sábado",
  sábado: "Sábado",
  domingo: "Domingo",
};

export function mapHorarioToFranja(horario: HorarioApi): FranjaHoraria {
  const dia = new Date(horario.fecha).toLocaleDateString("es-CO", {
    weekday: "long",
  });

  return {
    dia: diasNormalizados[dia.toLowerCase()] ?? "Lunes",
    hora_inicio: horario.hora_inicio,
    hora_fin: horario.hora_fin,
  };
}
