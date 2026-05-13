export type ApiTokens = {
  accessToken: string;
  refreshToken: string;
};

export type SessionMeta =
  | { rol: "cliente" | "barbero"; cedula: string }
  | { rol: "superadmin"; correo: string };

const TOKENS_KEY = "styleup.tokens";
const SESSION_KEY = "styleup.session";

let accessToken = "";
let refreshToken = "";

function canUseStorage() {
  return (
    typeof window !== "undefined" && typeof window.localStorage !== "undefined"
  );
}

export function setTokens(tokens: ApiTokens) {
  accessToken = tokens.accessToken;
  refreshToken = tokens.refreshToken;

  if (canUseStorage()) {
    window.localStorage.setItem(TOKENS_KEY, JSON.stringify(tokens));
  }
}

export function clearTokens() {
  accessToken = "";
  refreshToken = "";

  if (canUseStorage()) {
    window.localStorage.removeItem(TOKENS_KEY);
  }
}

export function getAccessToken() {
  if (!accessToken && canUseStorage()) {
    const raw = window.localStorage.getItem(TOKENS_KEY);
    if (raw) {
      try {
        const parsed = JSON.parse(raw) as ApiTokens;
        accessToken = parsed.accessToken;
        refreshToken = parsed.refreshToken;
      } catch {
        window.localStorage.removeItem(TOKENS_KEY);
      }
    }
  }
  return accessToken;
}

export function getRefreshToken() {
  if (!refreshToken && canUseStorage()) {
    const raw = window.localStorage.getItem(TOKENS_KEY);
    if (raw) {
      try {
        const parsed = JSON.parse(raw) as ApiTokens;
        accessToken = parsed.accessToken;
        refreshToken = parsed.refreshToken;
      } catch {
        window.localStorage.removeItem(TOKENS_KEY);
      }
    }
  }
  return refreshToken;
}

export function setSessionMeta(meta: SessionMeta) {
  if (canUseStorage()) {
    window.localStorage.setItem(SESSION_KEY, JSON.stringify(meta));
  }
}

export function getSessionMeta(): SessionMeta | null {
  if (!canUseStorage()) return null;
  const raw = window.localStorage.getItem(SESSION_KEY);
  if (!raw) return null;
  try {
    return JSON.parse(raw) as SessionMeta;
  } catch {
    window.localStorage.removeItem(SESSION_KEY);
    return null;
  }
}

export function clearSessionMeta() {
  if (canUseStorage()) {
    window.localStorage.removeItem(SESSION_KEY);
  }
}
