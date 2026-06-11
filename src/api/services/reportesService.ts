import { request } from "../client";

export type MetricasReporte = {
  totales: {
    clientes: number;
    barberos: number;
    citas: number;
    citasProximas: number;
  };
  citasPorEstado: { estado: string; total: number }[];
  citasPorEspecialidad: {
    id_especialidad: number;
    especialidad: string;
    total: number;
  }[];
  citasPorBarbero: {
    cedula_barbero: string;
    barbero: string;
    total: number;
  }[];
};

export function obtenerMetricas() {
  return request<MetricasReporte>("/reportes/metricas");
}

export type ConteoCitas = {
  total: number;
  completadas: number;
  pendientes: number;
  canceladas: number;
};

export type ReporteBarbero = {
  cedula_barbero: string;
  nombre: string;
  apellido: string;
  correo: string;
  telefono: string;
  id_especialidad: number;
  especialidad: string;
  citas: ConteoCitas;
  citasProximas: number;
};

export type ClienteFiel = {
  cedula_cliente: string;
  nombre: string;
  apellido: string;
  correo: string;
  telefono: string;
  citas: ConteoCitas;
  ultima_cita: string | null;
};

export function obtenerReporteBarberos() {
  return request<ReporteBarbero[]>("/reportes/barberos");
}

export function obtenerClientesFieles(limite?: number) {
  const query = limite ? `?limite=${limite}` : "";
  return request<ClienteFiel[]>(`/reportes/clientes${query}`);
}
