// ══════════════════════════════════════════════════════════
//  CONTEXTO GLOBAL - styleup
// ══════════════════════════════════════════════════════════

import {
  createContext,
  useContext,
  useState,
  useCallback,
  useEffect,
  useRef,
} from "react";
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
  SuperAdmin,
} from "../types";
import { especialidades as catalogoEspecialidades } from "../data/catalogo";
import { ApiError } from "../api/client";
import {
  authService,
  barberosService,
  citasService,
  clientesService,
  especialidadesService,
  horariosService,
} from "../api/services";
import {
  clearSessionMeta,
  clearTokens,
  getRefreshToken,
  getSessionMeta,
  setSessionMeta,
  setTokens,
} from "../api/tokenStore";

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
  barberosDisponibles: Barbero[];
  cargarBarberosDisponibles: (id_especialidad: number) => Promise<void>;

  // Alertas
  alerta: { tipo: "error" | "ok"; mensaje: string } | null;
  limpiarAlerta: () => void;
}

const AppContext = createContext<AppContextType | null>(null);

const clienteVacio: Cliente = {
  cedula_cliente: "",
  nombre: "",
  apellido: "",
  correo: "",
  telefono: "",
  fecha_registro: "",
};

function mergeHorarioPorDia(horario: FranjaHoraria[]) {
  const mapa = new Map<FranjaHoraria["dia"], FranjaHoraria>();
  horario.forEach((franja) => mapa.set(franja.dia, franja));
  return Array.from(mapa.values());
}

function mergeBarberos(actual: Barbero[], nuevos: Barbero[]) {
  const mapa = new Map(actual.map((b) => [b.cedula_barbero, b]));
  nuevos.forEach((b) => mapa.set(b.cedula_barbero, b));
  return Array.from(mapa.values());
}

// ── Provider ───────────────────────────────────────────────
export function AppProvider({ children }: { children: ReactNode }) {
  const [sesion, setSesion] = useState<Sesion | null>(null);
  const [sesionCargando, setSesionCargando] = useState(true);
  const [cliente, setCliente] = useState<Cliente>(clienteVacio);
  const [barberoActual, setBarberoActual] = useState<BarberoPerfil | null>(
    null,
  );
  const [citas, setCitas] = useState<Cita[]>([]);
  const [historial] = useState<HistorialCita[]>([]);
  const [barberos, setBarberos] = useState<Barbero[]>([]);
  const [barberosDisponibles, setBarberosDisponibles] = useState<Barbero[]>([]);
  const [especialidades, setEspecialidades] = useState<Especialidad[]>(
    catalogoEspecialidades,
  );
  const [panelActivo, setPanelActivo] = useState<PanelId>("inicio");
  const [panelBarberoActivo, setPanelBarberoActivo] =
    useState<PanelBarberoId>("agenda");
  const [alerta, setAlerta] = useState<{
    tipo: "error" | "ok";
    mensaje: string;
  } | null>(null);
  const alertTimeout = useRef<number | null>(null);

  const limpiarAlerta = useCallback(() => {
    if (alertTimeout.current) window.clearTimeout(alertTimeout.current);
    alertTimeout.current = null;
    setAlerta(null);
  }, []);

  const notificar = useCallback((tipo: "error" | "ok", mensaje: string) => {
    if (alertTimeout.current) window.clearTimeout(alertTimeout.current);
    setAlerta({ tipo, mensaje });
    alertTimeout.current = window.setTimeout(() => setAlerta(null), 4000);
  }, []);

  const notificarError = useCallback(
    (mensaje: string) => {
      notificar("error", mensaje);
    },
    [notificar],
  );

  const getMensajeError = (err: unknown) => {
    if (err instanceof ApiError) return err.message;
    if (err instanceof Error) return err.message;
    return "Ocurrio un error inesperado.";
  };

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

  const cargarCitasPorFecha = useCallback(async (fecha: string) => {
    const listado = await citasService.listarCitasPorDia(fecha);
    setCitas(listado);

    const cedulas = Array.from(new Set(listado.map((c) => c.cedula_barbero)));
    if (!cedulas.length) return;

    const resultados = await Promise.all(
      cedulas.map(async (cedula) => {
        try {
          return await barberosService.getBarberoByCedula(cedula);
        } catch {
          return null;
        }
      }),
    );

    const nuevos = resultados.filter(Boolean) as Barbero[];
    if (nuevos.length) setBarberos((prev) => mergeBarberos(prev, nuevos));
  }, []);

  const cargarCitasBarbero = useCallback(async (cedula_barbero: string) => {
    const listado = await citasService.listarCitasPorBarbero(cedula_barbero);
    setCitas(listado);
  }, []);

  // ── AUTH ──────────────────────────────────────────────────
  const login = useCallback(
    async (
      cedula: string,
      password: string,
      rol: Exclude<RolUsuario, "superadmin">,
    ) => {
      try {
        const tokens =
          rol === "cliente"
            ? await authService.loginCliente({
                cedula_cliente: cedula,
                contrasena: password,
              })
            : await authService.loginBarbero({
                cedula_barbero: cedula,
                contrasena: password,
              });

        setTokens(tokens);

        if (rol === "cliente") {
          const perfil = await clientesService.getClienteByCedula(cedula);
          setCliente(perfil);
          setBarberoActual(null);
          setSesion({ usuario: perfil, rol: "cliente" });
        } else {
          const barbero = await barberosService.getBarberoByCedula(cedula);
          const horarioApi = await horariosService.listHorariosByBarbero(
            cedula,
          );
          const perfil: BarberoPerfil = {
            ...barbero,
            horario: mergeHorarioPorDia(
              horarioApi.map(horariosService.mapHorarioToFranja),
            ),
          };
          setBarberoActual(perfil);
          setCliente(clienteVacio);
          setSesion({ usuario: perfil, rol: "barbero" });
          await cargarCitasBarbero(cedula);
        }

        setSessionMeta({ rol, cedula });

        if (rol === "cliente") {
          const hoy = new Date().toISOString().split("T")[0];
          await cargarCitasPorFecha(hoy);
        }
        setPanelActivo("inicio");
        setPanelBarberoActivo("agenda");

        return { ok: true };
      } catch (err) {
        const mensaje = getMensajeError(err);
        notificarError(mensaje);
        return { ok: false, mensaje };
      }
    },
    [cargarCitasBarbero, cargarCitasPorFecha, notificarError],
  );

  const loginSuperAdmin = useCallback(
    async (correo: string, password: string) => {
      try {
        const tokens = await authService.loginSuperAdmin({
          correo,
          contrasena: password,
        });
        setTokens(tokens);

        const perfil: SuperAdmin = { correo, rol: "superadmin" };
        setSesion({ usuario: perfil, rol: "superadmin" });
        setCliente(clienteVacio);
        setBarberoActual(null);
        setSessionMeta({ rol: "superadmin", correo });
        return { ok: true };
      } catch (err) {
        const mensaje = getMensajeError(err);
        notificarError(mensaje);
        return { ok: false, mensaje };
      }
    },
    [notificarError],
  );

  useEffect(() => {
    let activo = true;

    const restaurar = async () => {
      const meta = getSessionMeta();
      const refreshToken = getRefreshToken();
      if (!meta || !refreshToken) {
        if (activo) setSesionCargando(false);
        return;
      }

      try {
        const tokens = await authService.refresh({ refreshToken });
        setTokens(tokens);

        if (meta.rol === "cliente") {
          const perfil = await clientesService.getClienteByCedula(meta.cedula);
          if (!activo) return;
          setCliente(perfil);
          setBarberoActual(null);
          setSesion({ usuario: perfil, rol: "cliente" });
        } else if (meta.rol === "barbero") {
          const barbero = await barberosService.getBarberoByCedula(meta.cedula);
          const horarioApi = await horariosService.listHorariosByBarbero(
            meta.cedula,
          );
          const perfil: BarberoPerfil = {
            ...barbero,
            horario: mergeHorarioPorDia(
              horarioApi.map(horariosService.mapHorarioToFranja),
            ),
          };
          if (!activo) return;
          setBarberoActual(perfil);
          setCliente(clienteVacio);
          setSesion({ usuario: perfil, rol: "barbero" });
          await cargarCitasBarbero(meta.cedula);
        } else if (meta.rol === "superadmin") {
          const perfil: SuperAdmin = { correo: meta.correo, rol: "superadmin" };
          if (!activo) return;
          setSesion({ usuario: perfil, rol: "superadmin" });
          setCliente(clienteVacio);
          setBarberoActual(null);
        }

        if (meta.rol === "cliente") {
          const hoy = new Date().toISOString().split("T")[0];
          await cargarCitasPorFecha(hoy);
        }
      } catch {
        clearTokens();
        clearSessionMeta();
      } finally {
        if (activo) setSesionCargando(false);
      }
    };

    restaurar();
    return () => {
      activo = false;
    };
  }, [cargarCitasBarbero, cargarCitasPorFecha]);

  const logout = useCallback(async () => {
    const refreshToken = getRefreshToken();
    if (refreshToken) {
      authService.logout({ refreshToken }).catch(() => null);
    }

    clearTokens();
    clearSessionMeta();
    limpiarAlerta();
    setSesion(null);
    setCliente(clienteVacio);
    setBarberoActual(null);
    setCitas([]);
    setBarberos([]);
    setBarberosDisponibles([]);
    setPanelActivo("inicio");
    setPanelBarberoActivo("agenda");
  }, [limpiarAlerta]);

  const registrarCliente = useCallback(
    async (form: FormularioRegistroCliente) => {
      try {
        await clientesService.createCliente({
          cedula_cliente: form.cedula,
          nombre: form.nombre,
          apellido: form.apellido,
          telefono: form.telefono || "-",
          correo: form.correo,
          contrasena: form.password,
        });

        const resultado = await login(form.cedula, form.password, "cliente");
        if (!resultado.ok) {
          return {
            ok: false,
            mensaje: resultado.mensaje ?? "No se pudo iniciar sesion.",
          };
        }

        return { ok: true, mensaje: "Registro exitoso." };
      } catch (err) {
        const mensaje = getMensajeError(err);
        notificarError(mensaje);
        return { ok: false, mensaje };
      }
    },
    [login, notificarError],
  );

  const registrarBarbero = useCallback(
    async (_form: FormularioRegistroBarbero) => {
      const mensaje =
        "El registro de barbero requiere autorizacion de superadmin.";
      notificarError(mensaje);
      return { ok: false, mensaje };
    },
    [notificarError],
  );

  // ── CLIENTE ───────────────────────────────────────────────
  const navegarA = useCallback((panel: PanelId) => setPanelActivo(panel), []);

  const agregarCita = useCallback(
    async (form: FormularioCita) => {
      if (!sesion || sesion.rol !== "cliente") return false;

      try {
        const creada = await citasService.createCita({
          cedula_cliente: cliente.cedula_cliente,
          cedula_barbero: form.cedula_barbero,
          id_especialidad: form.id_especialidad,
          fecha: form.fecha,
          hora: form.hora,
        });
        setCitas((prev) => [...prev, creada]);
        const elegido = barberosDisponibles.filter(
          (b) => b.cedula_barbero === form.cedula_barbero,
        );
        if (elegido.length) setBarberos((prev) => mergeBarberos(prev, elegido));
        return true;
      } catch (err) {
        notificarError(getMensajeError(err));
        return false;
      }
    },
    [barberosDisponibles, cliente.cedula_cliente, notificarError, sesion],
  );

  const cancelarCita = useCallback(
    async (idCita: string) => {
      try {
        const actualizada = await citasService.cancelarCita(idCita);
        setCitas((prev) =>
          prev.map((c) => (c.id_cita === idCita ? actualizada : c)),
        );
      } catch (err) {
        notificarError(getMensajeError(err));
      }
    },
    [notificarError],
  );

  const actualizarPerfil = useCallback(
    async (form: FormularioPerfil) => {
      const partes = form.nombre_completo.trim().split(" ");
      const patch = {
        nombre: partes[0] ?? cliente.nombre,
        apellido: partes.slice(1).join(" ") || cliente.apellido,
        correo: form.correo,
        telefono: form.telefono,
      };

      try {
        const actualizado = await clientesService.updateCliente(
          form.cedula_cliente,
          patch,
        );
        setCliente(actualizado);
        setSesion((prev) => (prev ? { ...prev, usuario: actualizado } : prev));
      } catch (err) {
        notificarError(getMensajeError(err));
      }
    },
    [cliente.apellido, cliente.nombre, notificarError],
  );

  // ── BARBERO ───────────────────────────────────────────────
  const navegarBarberoA = useCallback(
    (panel: PanelBarberoId) => setPanelBarberoActivo(panel),
    [],
  );

  const actualizarEstadoCita = useCallback(
    async (idCita: string, estado: "Completada" | "Cancelada") => {
      try {
        const actualizada = await citasService.actualizarEstadoCita(
          idCita,
          estado,
        );
        setCitas((prev) =>
          prev.map((c) => (c.id_cita === idCita ? actualizada : c)),
        );
      } catch (err) {
        notificarError(getMensajeError(err));
      }
    },
    [notificarError],
  );

  const actualizarHorarioBarbero = useCallback(
    async (horario: FranjaHoraria[]) => {
      if (!barberoActual) return;

      try {
        const actualizados = await horariosService.replaceHorarioBarbero(
          barberoActual.cedula_barbero,
          horario,
        );
        const perfil: BarberoPerfil = {
          ...barberoActual,
          horario: mergeHorarioPorDia(
            actualizados.map(horariosService.mapHorarioToFranja),
          ),
        };
        setBarberoActual(perfil);
        setSesion((prev) => (prev ? { ...prev, usuario: perfil } : prev));
      } catch (err) {
        notificarError(getMensajeError(err));
        throw err;
      }
    },
    [barberoActual, notificarError],
  );

  const actualizarPerfilBarbero = useCallback(
    async (form: FormularioPerfilBarbero) => {
      if (!barberoActual) return;
      const partes = form.nombre_completo.trim().split(" ");
      const patch = {
        nombre: partes[0] ?? barberoActual.nombre,
        apellido: partes.slice(1).join(" ") || barberoActual.apellido,
        correo: form.correo,
        telefono: form.telefono,
        id_especialidad: form.id_especialidad,
      };

      try {
        const actualizado = await barberosService.updateBarbero(
          form.cedula_barbero,
          patch,
        );
        const perfil: BarberoPerfil = {
          ...actualizado,
          horario: barberoActual.horario,
        };
        setBarberoActual(perfil);
        setSesion((prev) => (prev ? { ...prev, usuario: perfil } : prev));
      } catch (err) {
        notificarError(getMensajeError(err));
      }
    },
    [barberoActual, notificarError],
  );

  const cargarBarberosDisponibles = useCallback(
    async (id_especialidad: number) => {
      if (!id_especialidad) {
        setBarberosDisponibles([]);
        return;
      }

      try {
        const disponibles =
          await barberosService.getBarberosDisponibles(id_especialidad);
        setBarberosDisponibles(disponibles);
        if (disponibles.length)
          setBarberos((prev) => mergeBarberos(prev, disponibles));
      } catch (err) {
        notificarError(getMensajeError(err));
      }
    },
    [notificarError],
  );

  const citasCliente = cliente.cedula_cliente
    ? citas.filter((c) => c.cedula_cliente === cliente.cedula_cliente)
    : [];

  const todasLasCitas = barberoActual
    ? citas.filter((c) => c.cedula_barbero === barberoActual.cedula_barbero)
    : [];

  const historialBarbero = barberoActual
    ? todasLasCitas
        .filter((c) => c.estado === "Completada")
        .sort((a, b) => `${b.fecha} ${b.hora}`.localeCompare(`${a.fecha} ${a.hora}`))
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
        citas: citasCliente,
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
