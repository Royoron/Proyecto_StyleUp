import { request } from "../client";
import type { Cliente } from "../../types";

type ClienteInput = {
  cedula_cliente: string;
  nombre: string;
  apellido: string;
  telefono: string;
  correo: string;
  contrasena: string;
};

type ClienteUpdate = Partial<Omit<ClienteInput, "cedula_cliente">>;

export function createCliente(input: ClienteInput) {
  return request<Cliente>("/clientes", {
    method: "POST",
    body: JSON.stringify(input),
  });
}

export function getClienteByCedula(cedula_cliente: string) {
  return request<Cliente>(`/clientes/${encodeURIComponent(cedula_cliente)}`);
}

export function updateCliente(cedula_cliente: string, patch: ClienteUpdate) {
  return request<Cliente>(`/clientes/${encodeURIComponent(cedula_cliente)}`, {
    method: "PUT",
    body: JSON.stringify(patch),
  });
}

export function deleteCliente(cedula_cliente: string) {
  return request<{ deleted: boolean }>(
    `/clientes/${encodeURIComponent(cedula_cliente)}`,
    {
      method: "DELETE",
    },
  );
}


