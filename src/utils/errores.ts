// ══════════════════════════════════════════════════════════
//  UTILIDADES DE ERRORES — StyleUp
// ══════════════════════════════════════════════════════════

import { ApiError } from "../api/client";

/** Extrae un mensaje legible de cualquier error capturado */
export function getMensajeError(err: unknown): string {
  if (err instanceof ApiError) return err.message;
  if (err instanceof Error) return err.message;
  return "Ocurrio un error inesperado.";
}
