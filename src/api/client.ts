import {
  getAccessToken,
  getRefreshToken,
  setTokens,
  type ApiTokens,
} from "./tokenStore";

type ApiErrorPayload = {
  message?: string;
};

export class ApiError extends Error {
  status: number;

  constructor(status: number, message: string) {
    super(message);
    this.status = status;
  }
}

const rawBaseUrl = import.meta.env.VITE_API_URL ?? "http://localhost:3001";
const API_URL = rawBaseUrl.replace(/\/+$/, "");

async function parseErrorMessage(response: Response): Promise<string> {
  try {
    const data = (await response.json()) as ApiErrorPayload;
    if (data?.message) return data.message;
  } catch {
    // Ignore parsing errors and fall back to status text.
  }
  return response.statusText || "Error de servidor";
}

async function refreshTokens(): Promise<ApiTokens | null> {
  const refreshToken = getRefreshToken();
  if (!refreshToken) return null;

  const res = await fetch(`${API_URL}/auth/refresh`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ refreshToken }),
  });

  if (!res.ok) return null;
  const tokens = (await res.json()) as ApiTokens;
  setTokens(tokens);
  return tokens;
}

export async function request<T>(
  path: string,
  init: RequestInit = {},
  retryOnAuth = true,
): Promise<T> {
  const headers = new Headers(init.headers);
  if (!headers.has("Content-Type") && init.body) {
    headers.set("Content-Type", "application/json");
  }

  const accessToken = getAccessToken();
  if (accessToken) headers.set("Authorization", `Bearer ${accessToken}`);

  const res = await fetch(`${API_URL}${path}`, { ...init, headers });

  if (res.status === 401 && retryOnAuth) {
    const refreshed = await refreshTokens();
    if (refreshed) return request<T>(path, init, false);
  }

  if (!res.ok) {
    const message = await parseErrorMessage(res);
    throw new ApiError(res.status, message);
  }

  if (res.status === 204) return null as T;
  return (await res.json()) as T;
}

export function getApiBaseUrl() {
  return API_URL;
}
