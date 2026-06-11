// ══════════════════════════════════════════════════════════
//  HOOK: ALERTAS GLOBALES — StyleUp
//  Maneja la alerta flotante (GlobalAlert) con auto-cierre
// ══════════════════════════════════════════════════════════

import { useCallback, useRef, useState } from "react";

export type Alerta = { tipo: "error" | "ok"; mensaje: string };

const DURACION_ALERTA_MS = 4000;

export function useAlertas() {
  const [alerta, setAlerta] = useState<Alerta | null>(null);
  const alertTimeout = useRef<number | null>(null);

  const limpiarAlerta = useCallback(() => {
    if (alertTimeout.current) window.clearTimeout(alertTimeout.current);
    alertTimeout.current = null;
    setAlerta(null);
  }, []);

  const notificar = useCallback((tipo: "error" | "ok", mensaje: string) => {
    if (alertTimeout.current) window.clearTimeout(alertTimeout.current);
    setAlerta({ tipo, mensaje });
    alertTimeout.current = window.setTimeout(
      () => setAlerta(null),
      DURACION_ALERTA_MS,
    );
  }, []);

  const notificarError = useCallback(
    (mensaje: string) => notificar("error", mensaje),
    [notificar],
  );

  return { alerta, limpiarAlerta, notificar, notificarError };
}
