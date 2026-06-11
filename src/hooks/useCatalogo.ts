// ══════════════════════════════════════════════════════════
//  HOOK: CATÁLOGO — StyleUp
//  Especialidades y barberos (listados y disponibilidad)
// ══════════════════════════════════════════════════════════

import { useCallback, useEffect, useState } from "react";
import type { Barbero, Especialidad } from "../types";
import type { BarberoDisponible } from "../api/services/barberosService";
import { especialidades as catalogoEspecialidades } from "../data/catalogo";
import { barberosService, especialidadesService } from "../api/services";
import { getMensajeError } from "../utils/errores";

function mergeBarberos(actual: Barbero[], nuevos: Barbero[]) {
  const mapa = new Map(actual.map((b) => [b.cedula_barbero, b]));
  nuevos.forEach((b) => mapa.set(b.cedula_barbero, b));
  return Array.from(mapa.values());
}

type UseCatalogoDeps = {
  notificarError: (mensaje: string) => void;
};

export function useCatalogo({ notificarError }: UseCatalogoDeps) {
  const [especialidades, setEspecialidades] = useState<Especialidad[]>(
    catalogoEspecialidades,
  );
  const [barberos, setBarberos] = useState<Barbero[]>([]);
  const [barberosDisponibles, setBarberosDisponibles] = useState<
    BarberoDisponible[]
  >([]);

  // Carga inicial de especialidades (con fallback al catálogo local)
  useEffect(() => {
    let activo = true;

    especialidadesService
      .listarEspecialidades()
      .then((listado) => {
        if (activo && listado.length) setEspecialidades(listado);
      })
      .catch(() => {
        if (activo) setEspecialidades(catalogoEspecialidades);
      });

    return () => {
      activo = false;
    };
  }, []);

  /** Agrega barberos al catálogo en memoria (sin duplicados) */
  const registrarBarberos = useCallback((nuevos: Barbero[]) => {
    if (nuevos.length) setBarberos((prev) => mergeBarberos(prev, nuevos));
  }, []);

  /** Carga los datos de barberos a partir de sus cédulas (para mostrar nombres) */
  const cargarBarberosPorCedulas = useCallback(
    async (cedulas: string[]) => {
      const unicas = Array.from(new Set(cedulas));
      if (!unicas.length) return;

      const resultados = await Promise.all(
        unicas.map(async (cedula) => {
          try {
            return await barberosService.getBarberoByCedula(cedula);
          } catch {
            return null;
          }
        }),
      );

      registrarBarberos(resultados.filter(Boolean) as Barbero[]);
    },
    [registrarBarberos],
  );

  /**
   * Barberos disponibles para una especialidad (panel reservar).
   * Si se pasa fecha, solo devuelve los que atienden ese día,
   * con su franja horaria (horario_dia).
   */
  const cargarBarberosDisponibles = useCallback(
    async (id_especialidad: number, fecha?: string) => {
      if (!id_especialidad) {
        setBarberosDisponibles([]);
        return;
      }

      try {
        const disponibles = await barberosService.getBarberosDisponibles(
          id_especialidad,
          fecha,
        );
        setBarberosDisponibles(disponibles);
        registrarBarberos(disponibles);
      } catch (err) {
        notificarError(getMensajeError(err));
      }
    },
    [notificarError, registrarBarberos],
  );

  /** Asegura que el barbero elegido en una reserva quede en el catálogo */
  const confirmarBarberoSeleccionado = useCallback(
    (cedula_barbero: string) => {
      const elegido = barberosDisponibles.filter(
        (b) => b.cedula_barbero === cedula_barbero,
      );
      registrarBarberos(elegido);
    },
    [barberosDisponibles, registrarBarberos],
  );

  /** Limpia el estado al cerrar sesión */
  const reiniciarCatalogo = useCallback(() => {
    setBarberos([]);
    setBarberosDisponibles([]);
  }, []);

  return {
    especialidades,
    barberos,
    barberosDisponibles,
    registrarBarberos,
    cargarBarberosPorCedulas,
    cargarBarberosDisponibles,
    confirmarBarberoSeleccionado,
    reiniciarCatalogo,
  };
}
