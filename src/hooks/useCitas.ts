// ══════════════════════════════════════════════════════════
//  HOOK: CITAS — StyleUp
//  Carga, creación y cambios de estado de citas
// ══════════════════════════════════════════════════════════

import { useCallback, useState } from "react";
import type { Cita } from "../types";
import { citasService } from "../api/services";
import { getMensajeError } from "../utils/errores";

type UseCitasDeps = {
  notificarError: (mensaje: string) => void;
  /** Se invoca tras cargar citas para resolver datos de los barberos asociados */
  alCargarCitas?: (citas: Cita[]) => Promise<void> | void;
};

export function useCitas({ notificarError, alCargarCitas }: UseCitasDeps) {
  const [citas, setCitas] = useState<Cita[]>([]);

  /** Citas del cliente autenticado (se usa al iniciar sesión y al recargar) */
  const cargarCitasCliente = useCallback(
    async (cedula_cliente: string) => {
      const listado = await citasService.listarCitasPorCliente(cedula_cliente);
      setCitas(listado);
      await alCargarCitas?.(listado);
    },
    [alCargarCitas],
  );

  /** Citas asignadas a un barbero (agenda) */
  const cargarCitasBarbero = useCallback(async (cedula_barbero: string) => {
    const listado = await citasService.listarCitasPorBarbero(cedula_barbero);
    setCitas(listado);
  }, []);

  /**
   * Crea una cita y la agrega al estado local.
   * Lanza el error para que el llamador decida cómo notificar.
   */
  const crearCita = useCallback(
    async (input: {
      cedula_cliente: string;
      cedula_barbero: string;
      id_especialidad: number;
      fecha: string;
      hora: string;
    }) => {
      const creada = await citasService.createCita(input);
      setCitas((prev) => [...prev, creada]);
      return creada;
    },
    [],
  );

  const cancelarCita = useCallback(
    async (id_cita: string) => {
      try {
        const actualizada = await citasService.cancelarCita(id_cita);
        setCitas((prev) =>
          prev.map((c) => (c.id_cita === id_cita ? actualizada : c)),
        );
      } catch (err) {
        notificarError(getMensajeError(err));
      }
    },
    [notificarError],
  );

  const actualizarEstadoCita = useCallback(
    async (id_cita: string, estado: "Completada" | "Cancelada") => {
      try {
        const actualizada = await citasService.actualizarEstadoCita(
          id_cita,
          estado,
        );
        setCitas((prev) =>
          prev.map((c) => (c.id_cita === id_cita ? actualizada : c)),
        );
      } catch (err) {
        notificarError(getMensajeError(err));
      }
    },
    [notificarError],
  );

  /** Limpia el estado al cerrar sesión */
  const limpiarCitas = useCallback(() => setCitas([]), []);

  return {
    citas,
    cargarCitasCliente,
    cargarCitasBarbero,
    crearCita,
    cancelarCita,
    actualizarEstadoCita,
    limpiarCitas,
  };
}
