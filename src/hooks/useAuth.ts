// ══════════════════════════════════════════════════════════
//  HOOK: AUTENTICACIÓN Y PERFILES — StyleUp
//  Login, logout, registro, restauración de sesión y
//  actualización de perfiles (cliente / barbero)
// ══════════════════════════════════════════════════════════

import { useCallback, useEffect, useRef, useState } from "react";
import type {
  BarberoPerfil,
  Cliente,
  FormularioPerfil,
  FormularioPerfilBarbero,
  FormularioRegistroBarbero,
  FormularioRegistroCliente,
  FranjaHoraria,
  RolUsuario,
  Sesion,
  SuperAdmin,
} from "../types";
import {
  authService,
  barberosService,
  clientesService,
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
import { getMensajeError } from "../utils/errores";

export const clienteVacio: Cliente = {
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

type UseAuthDeps = {
  notificarError: (mensaje: string) => void;
  limpiarAlerta: () => void;
  cargarCitasCliente: (cedula: string) => Promise<void>;
  cargarCitasBarbero: (cedula: string) => Promise<void>;
  /** Limpieza de estado dependiente de la sesión (citas, catálogo, paneles) */
  alCerrarSesion: () => void;
  /** Reset de paneles al entrar una nueva sesión */
  alIniciarSesion: () => void;
};

export function useAuth({
  notificarError,
  limpiarAlerta,
  cargarCitasCliente,
  cargarCitasBarbero,
  alCerrarSesion,
  alIniciarSesion,
}: UseAuthDeps) {
  const [sesion, setSesion] = useState<Sesion | null>(null);
  const [sesionCargando, setSesionCargando] = useState(true);
  const [cliente, setCliente] = useState<Cliente>(clienteVacio);
  const [barberoActual, setBarberoActual] = useState<BarberoPerfil | null>(
    null,
  );

  // ── Carga de perfiles ─────────────────────────────────────
  const cargarPerfilCliente = useCallback(async (cedula: string) => {
    const perfil = await clientesService.getClienteByCedula(cedula);
    setCliente(perfil);
    setBarberoActual(null);
    setSesion({ usuario: perfil, rol: "cliente" });
  }, []);

  const cargarPerfilBarbero = useCallback(async (cedula: string) => {
    const barbero = await barberosService.getBarberoByCedula(cedula);
    const horarioApi = await horariosService.listHorariosByBarbero(cedula);
    const perfil: BarberoPerfil = {
      ...barbero,
      horario: mergeHorarioPorDia(
        horarioApi.map(horariosService.mapHorarioToFranja),
      ),
    };
    setBarberoActual(perfil);
    setCliente(clienteVacio);
    setSesion({ usuario: perfil, rol: "barbero" });
  }, []);

  /**
   * Carga las citas SIN romper la sesión: si el API falla solo
   * se muestra una alerta y la sesión sigue activa.
   */
  const cargarCitasSesion = useCallback(
    async (rol: "cliente" | "barbero", cedula: string) => {
      try {
        if (rol === "cliente") await cargarCitasCliente(cedula);
        else await cargarCitasBarbero(cedula);
      } catch (err) {
        notificarError(
          `No se pudieron cargar las citas: ${getMensajeError(err)}`,
        );
      }
    },
    [cargarCitasBarbero, cargarCitasCliente, notificarError],
  );

  // ── Login ─────────────────────────────────────────────────
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

        if (rol === "cliente") await cargarPerfilCliente(cedula);
        else await cargarPerfilBarbero(cedula);

        setSessionMeta({ rol, cedula });
        alIniciarSesion();
      } catch (err) {
        const mensaje = getMensajeError(err);
        notificarError(mensaje);
        return { ok: false, mensaje };
      }

      // Las citas se cargan aparte: un fallo aquí no invalida el login
      await cargarCitasSesion(rol, cedula);
      return { ok: true };
    },
    [
      alIniciarSesion,
      cargarCitasSesion,
      cargarPerfilBarbero,
      cargarPerfilCliente,
      notificarError,
    ],
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
        alIniciarSesion();
        return { ok: true };
      } catch (err) {
        const mensaje = getMensajeError(err);
        notificarError(mensaje);
        return { ok: false, mensaje };
      }
    },
    [alIniciarSesion, notificarError],
  );

  // ── Restauración de sesión al recargar ────────────────────
  // El guard evita la doble ejecución de StrictMode: el refresh
  // token rota al usarse, y una segunda llamada simultánea
  // recibiría 401 y borraría la sesión guardada.
  const restauracionIniciada = useRef(false);

  useEffect(() => {
    if (restauracionIniciada.current) return;
    restauracionIniciada.current = true;

    const restaurar = async () => {
      const meta = getSessionMeta();
      const refreshToken = getRefreshToken();
      if (!meta || !refreshToken) {
        setSesionCargando(false);
        return;
      }

      try {
        const tokens = await authService.refresh({ refreshToken });
        setTokens(tokens);

        if (meta.rol === "cliente") {
          await cargarPerfilCliente(meta.cedula);
        } else if (meta.rol === "barbero") {
          await cargarPerfilBarbero(meta.cedula);
        } else if (meta.rol === "superadmin") {
          const perfil: SuperAdmin = { correo: meta.correo, rol: "superadmin" };
          setSesion({ usuario: perfil, rol: "superadmin" });
          setCliente(clienteVacio);
          setBarberoActual(null);
        }
      } catch {
        // Solo si falla el refresh o el perfil se descarta la sesión
        clearTokens();
        clearSessionMeta();
        setSesionCargando(false);
        return;
      }

      setSesionCargando(false);

      // Las citas se cargan aparte: un fallo aquí no borra los tokens
      if (meta.rol !== "superadmin") {
        await cargarCitasSesion(meta.rol, meta.cedula);
      }
    };

    restaurar();
  }, [cargarCitasSesion, cargarPerfilBarbero, cargarPerfilCliente]);

  // ── Logout ────────────────────────────────────────────────
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
    alCerrarSesion();
  }, [alCerrarSesion, limpiarAlerta]);

  // ── Registro ──────────────────────────────────────────────
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

  // ── Actualización de perfiles ─────────────────────────────
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

  return {
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
  };
}
