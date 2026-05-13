import { request } from "../client";
import type { ApiTokens } from "../tokenStore";

export function loginCliente(input: {
  cedula_cliente: string;
  contrasena: string;
}) {
  return request<ApiTokens>("/auth/login/cliente", {
    method: "POST",
    body: JSON.stringify(input),
  });
}

export function loginBarbero(input: {
  cedula_barbero: string;
  contrasena: string;
}) {
  return request<ApiTokens>("/auth/login/barbero", {
    method: "POST",
    body: JSON.stringify(input),
  });
}

export function loginSuperAdmin(input: { correo: string; contrasena: string }) {
  return request<ApiTokens>("/auth/login/superadmin", {
    method: "POST",
    body: JSON.stringify(input),
  });
}

export function refresh(input: { refreshToken: string }) {
  return request<ApiTokens>("/auth/refresh", {
    method: "POST",
    body: JSON.stringify(input),
  });
}

export function logout(input: { refreshToken: string }) {
  return request<{ ok: boolean }>("/auth/logout", {
    method: "POST",
    body: JSON.stringify(input),
  });
}
