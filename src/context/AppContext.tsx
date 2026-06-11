// ══════════════════════════════════════════════════════════
//  CONTEXTO GLOBAL — StyleUp
//  Compone los hooks de dominio (alertas, catálogo, citas,
//  auth) y expone una única API a los componentes.
// ══════════════════════════════════════════════════════════

import { createContext, useCallback, useContext, useState } from "react";
import type { ReactNode } from "react";
import type {
  Barbero,
  BarberoPerfil,
  Cita,
  Cliente,
  Especialidad,
  FranjaHoraria,
  FormularioCita,
  FormularioPerfil,
  FormularioPerfilBarbero,
  FormularioRegistroBarbero,
  FormularioRegistroCliente,
  HistorialCita,
  PanelBarberoId,
  PanelId,
  RolUsuario,
  Sesion,
} from "../types";
import type { BarberoDisponible } from "../api/services/barberosService";
import { useAlertas, type Alerta } from "../hooks/useAlertas";
import { useCatalogo } from "../hooks/useCatalogo";
import { useCitas } from "../hooks/useCitas";
import { useAuth } from "../hooks/useAuth";
import { getMensajeError } from "../utils/errores";

// ── Forma del contexto ─────────────────────────────────────
interface AppContextType {
  // Auth
  sesion: Sesion | null;
  sesionCargando: boolean;
  login: (
    cedula: string,
    password: string,
    rol: Exclude<RolUsuario, "superadmin">,
  ) => Promise<{ ok: boolean; mensaje?: string }>;
  loginSuperAdmin: (
    correo: string,
    password: string,
  ) => Promise<{ ok: boolean; mensaje?: string }>;
  logout: () => Promise<void>;
  registrarCliente: (
    form: FormularioRegistroCliente,
  ) => Promise<{ ok: boolean; mensaje: string }>;
  registrarBarbero: (
    form: FormularioRegistroBarbero,
  ) => Promise<{ ok: boolean; mensaje: string }>;

  // Cliente
  cliente: Cliente;
  citas: Cita[];
  historial: HistorialCita[];
  panelActivo: PanelId;
  navegarA: (panel: PanelId) => void;
  agregarCita: (form: FormularioCita) => Promise<boolean>;
  cancelarCita: (idCita: string) => Promise<void>;
  actualizarPerfil: (form: FormularioPerfil) => Promise<void>;

  // Barbero
  panelBarberoActivo: PanelBarberoId;
  navegarBarberoA: (panel: PanelBarberoId) => void;
  actualizarEstadoCita: (
    idCita: string,
    estado: "Completada" | "Cancelada",
  ) => Promise<void>;
  todasLasCitas: Cita[];
  historialBarbero: Cita[];
  barberoActual: BarberoPerfil | null;
  actualizarHorarioBarbero: (horario: FranjaHoraria[]) => Promise<void>;
  actualizarPerfilBarbero: (form: FormularioPerfilBarbero) => Promise<void>;

  // Catalogo
  especialidades: Especialidad[];
  barberos: Barbero[];
  barberosDisponibles: BarberoDisponible[];
  cargarBarberosDisponibles: (
    id_especialidad: number,
    fecha?: string,
  ) => Promise<void>;

  // Alertas
  alerta: Alerta | null;
  limpiarAlerta: () => void;
}

const AppContext = createContext<AppContextType | null>(null);

const ESTADOS_FINALIZADOS = ["Completada", "Cancelada"] as const;

// ── Provider ───────────────────────────────────────────────
export function AppProvider({ children }: { children: ReactNode }) {
  // Navegación de paneles
  const [panelActivo, setPanelActivo] = useState<PanelId>("inicio");
  const [panelBarberoActivo, setPanelBarberoActivo] =
    useState<PanelBarberoId>("agenda");

  const navegarA = useCallback((panel: PanelId) => setPanelActivo(panel), []);
  const navegarBarberoA = useCallback(
    (panel: PanelBarberoId) => setPanelBarberoActivo(panel),
    [],
  );

  // Alertas
  const { alerta, limpiarAlerta, notificarError } = useAlertas();

  // Catálogo (especialidades y barberos)
  const {
    especialidades,
    barberos,
    barberosDisponibles,
    cargarBarberosPorCedulas,
    cargarBarberosDisponibles,
    confirmarBarberoSeleccionado,
    reiniciarCatalogo,
  } = useCatalogo({ notificarError });

  // Citas — al cargarlas se resuelven los datos de sus barberos
  const alCargarCitas = useCallback(
    (listado: Cita[]) =>
      cargarBarberosPorCedulas(listado.map((c) => c.cedula_barbero)),
    [cargarBarberosPorCedulas],
  );

  const {
    citas,
    cargarCitasCliente,
    cargarCitasBarbero,
    crearCita,
    cancelarCita,
    actualizarEstadoCita,
    limpiarCitas,
  } = useCitas({ notificarError, alCargarCitas });

  // Autenticación y perfiles
  const reiniciarPaneles = useCallback(() => {
    setPanelActivo("inicio");
    setPanelBarberoActivo("agenda");
  }, []);

  const alCerrarSesion = useCallback(() => {
    limpiarCitas();
    reiniciarCatalogo();
    reiniciarPaneles();
  }, [limpiarCitas, reiniciarCatalogo, reiniciarPaneles]);

  const {
    sesion,
    sesionCargando,
    cliente,
    barberoActual,
    login,
    loginSuperAdmin,
    logout,
    registrarCliente,
    registrarBarbero,
    actualizarPerfil,
    actualizarPerfilBarbero,
    actualizarHorarioBarbero,
  } = useAuth({
    notificarError,
    limpiarAlerta,
    cargarCitasCliente,
    cargarCitasBarbero,
    alCerrarSesion,
    alIniciarSesion: reiniciarPaneles,
  });

  // ── Reservar cita (cliente) ───────────────────────────────
  const agregarCita = useCallback(
    async (form: FormularioCita) => {
      if (!sesion || sesion.rol !== "cliente") return false;

      try {
        await crearCita({
          cedula_cliente: cliente.cedula_cliente,
          cedula_barbero: form.cedula_barbero,
          id_especialidad: form.id_especialidad,
          fecha: form.fecha,
          hora: form.hora,
        });
        confirmarBarberoSeleccionado(form.cedula_barbero);
        return true;
      } catch (err) {
        notificarError(getMensajeError(err));
        return false;
      }
    },
    [
      cliente.cedula_cliente,
      confirmarBarberoSeleccionado,
      crearCita,
      notificarError,
      sesion,
    ],
  );

  // ── Derivados: cliente ────────────────────────────────────
  const citasCliente = cliente.cedula_cliente
    ? citas.filter((c) => c.cedula_cliente === cliente.cedula_cliente)
    : [];

  // "Mis citas" muestra solo las activas; las finalizadas van al historial
  const citasActivas = citasCliente.filter(
    (c) => !ESTADOS_FINALIZADOS.includes(c.estado as "Completada" | "Cancelada"),
  );

  const historial: HistorialCita[] = citasCliente
    .filter((c) =>
      ESTADOS_FINALIZADOS.includes(c.estado as "Completada" | "Cancelada"),
    )
    .map((c) => ({
      id_cita: c.id_cita,
      cedula_cliente: c.cedula_cliente,
      cedula_barbero: c.cedula_barbero,
      id_especialidad: c.id_especialidad,
      fecha: c.fecha,
      estado: c.estado,
    }))
    .sort((a, b) => b.fecha.localeCompare(a.fecha));

  // ── Derivados: barbero ────────────────────────────────────
  const todasLasCitas = barberoActual
    ? citas.filter((c) => c.cedula_barbero === barberoActual.cedula_barbero)
    : [];

  const historialBarbero = barberoActual
    ? todasLasCitas
        .filter((c) => c.estado === "Completada")
        .sort((a, b) =>
          `${b.fecha} ${b.hora}`.localeCompare(`${a.fecha} ${a.hora}`),
        )
    : [];

  return (
    <AppContext.Provider
      value={{
        sesion,
        sesionCargando,
        login,
        loginSuperAdmin,
        logout,
        registrarCliente,
        registrarBarbero,
        cliente,
        citas: citasActivas,
        historial,
        panelActivo,
        navegarA,
        agregarCita,
        cancelarCita,
        actualizarPerfil,
        panelBarberoActivo,
        navegarBarberoA,
        actualizarEstadoCita,
        todasLasCitas,
        historialBarbero,
        barberoActual,
        actualizarHorarioBarbero,
        actualizarPerfilBarbero,
        especialidades,
        barberos,
        barberosDisponibles,
        cargarBarberosDisponibles,
        alerta,
        limpiarAlerta,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export function useApp(): AppContextType {
  const ctx = useContext(AppContext);
  if (!ctx) throw new Error("useApp debe usarse dentro de <AppProvider>");
  return ctx;
}
