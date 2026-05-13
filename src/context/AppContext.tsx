// ══════════════════════════════════════════════════════════
//  CONTEXTO GLOBAL - styleup
// ══════════════════════════════════════════════════════════

import { createContext, useContext, useState, useCallback } from 'react';
import type { ReactNode } from 'react';
import type {
  Cita, Cliente, HistorialCita, PanelId, PanelBarberoId,
  FormularioCita, FormularioPerfil, FormularioPerfilBarbero,
  ClienteRegistrado, BarberoRegistrado,
  FormularioRegistroCliente, FormularioRegistroBarbero,
  Sesion, RolUsuario, FranjaHoraria,
} from '../types';
import {
  citasGlobales,          
  historialGlobal,        
  cuentasCliente,         
  cuentasBarbero,      
} from '../data/mockData';
import { generarIdCita } from '../utils/helpers';

// ── Forma del contexto ─────────────────────────────────────
interface AppContextType {
  // Auth
  sesion:             Sesion | null;
  login:              (correo: string, password: string, rol: RolUsuario) => boolean;
  logout:             () => void;
  registrarCliente:   (form: FormularioRegistroCliente) => { ok: boolean; mensaje: string };
  registrarBarbero:   (form: FormularioRegistroBarbero) => { ok: boolean; mensaje: string };

  // Cliente
  cliente:            Cliente;
  citas:              Cita[];
  historial:          HistorialCita[];
  panelActivo:        PanelId;
  navegarA:           (panel: PanelId) => void;
  agregarCita:        (form: FormularioCita) => void;
  cancelarCita:       (idCita: string) => void;
  actualizarPerfil:   (form: FormularioPerfil) => void;

  // Barbero
  panelBarberoActivo:  PanelBarberoId;
  navegarBarberoA:     (panel: PanelBarberoId) => void;
  actualizarEstadoCita:(idCita: string, estado: 'Completada' | 'Cancelada') => void;
  todasLasCitas:       Cita[];
  historialBarbero:    HistorialCita[];
  barberoActual:       BarberoRegistrado | null;
  actualizarHorarioBarbero: (horario: FranjaHoraria[]) => void;
  actualizarPerfilBarbero:  (form: FormularioPerfilBarbero) => void;
}

const AppContext = createContext<AppContextType | null>(null);



// ── Provider ───────────────────────────────────────────────
export function AppProvider({ children }: { children: ReactNode }) {
  const [sesion,             setSesion]            = useState<Sesion | null>(null);
  const [clientes,           setClientes]          = useState<ClienteRegistrado[]>(cuentasCliente);
  const [barberos,           setBarberos]          = useState<BarberoRegistrado[]>(cuentasBarbero);
  const [citas,              setCitas]             = useState<Cita[]>(citasGlobales);
  const [historial]                                = useState<HistorialCita[]>(historialGlobal);
  const [panelActivo,        setPanelActivo]       = useState<PanelId>('inicio');
  const [panelBarberoActivo, setPanelBarberoActivo]= useState<PanelBarberoId>('agenda');

  // ── AUTH ──────────────────────────────────────────────────
  const login = useCallback((correo: string, password: string, rol: RolUsuario): boolean => {
    if (rol === 'cliente') {
      const encontrado = clientes.find(c => c.correo === correo && c.password === password);
      if (!encontrado) return false;
      setSesion({ usuario: encontrado, rol: 'cliente' });
      return true;
    } else {
      const encontrado = barberos.find(b => b.correo === correo && b.password === password);
      if (!encontrado) return false;
      setSesion({ usuario: encontrado, rol: 'barbero' });
      return true;
    }
  }, [clientes, barberos]);

  const logout = useCallback(() => {
    setSesion(null);
    setPanelActivo('inicio');
    setPanelBarberoActivo('agenda');
  }, []);

  const registrarCliente = useCallback((form: FormularioRegistroCliente): { ok: boolean; mensaje: string } => {
    const existe = clientes.some(
      c => c.correo === form.correo || c.cedula_cliente === form.cedula
    );
    if (existe) return { ok: false, mensaje: 'Ya existe un cliente con ese correo o cédula.' };

    const nuevo: ClienteRegistrado = {
      cedula_cliente: form.cedula,
      nombre:         form.nombre,
      apellido:       form.apellido,
      correo:         form.correo,
      telefono:       form.telefono,
      fecha_registro: new Date().toISOString().split('T')[0],
      password:       form.password,
      rol:            'cliente',
    };
    setClientes(prev => [...prev, nuevo]);
    setSesion({ usuario: nuevo, rol: 'cliente' });
    return { ok: true, mensaje: 'Registro exitoso.' };
  }, [clientes]);

  const registrarBarbero = useCallback((form: FormularioRegistroBarbero): { ok: boolean; mensaje: string } => {
    if (form.horario.length === 0)
      return { ok: false, mensaje: 'Debes agregar al menos una franja horaria.' };

    const existe = barberos.some(
      b => b.correo === form.correo || b.cedula_barbero === form.cedula
    );
    if (existe) return { ok: false, mensaje: 'Ya existe un barbero con ese correo o cédula.' };

    const nuevo: BarberoRegistrado = {
      cedula_barbero:  form.cedula,
      nombre:          form.nombre,
      apellido:        form.apellido,
      id_especialidad: form.id_especialidad,
      correo:          form.correo,
      telefono:        form.telefono,
      password:        form.password,
      rol:             'barbero',
      horario:         form.horario,
    };
    setBarberos(prev => [...prev, nuevo]);
    setSesion({ usuario: nuevo, rol: 'barbero' });
    return { ok: true, mensaje: 'Registro exitoso.' };
  }, [barberos]);

  // ── CLIENTE ───────────────────────────────────────────────
  const clienteSesion = sesion?.rol === 'cliente'
    ? (sesion.usuario as ClienteRegistrado)
    : clientes[0];

  const navegarA = useCallback((panel: PanelId) => setPanelActivo(panel), []);

  const agregarCita = useCallback((form: FormularioCita) => {
    const nueva: Cita = {
      id_cita:           generarIdCita(citas.length + historial.length),
      cedula_cliente:    clienteSesion.cedula_cliente,
      cedula_barbero:    form.cedula_barbero,
      id_especialidad:   form.id_especialidad,
      fecha:             form.fecha,
      hora:              form.hora,
      estado:            'Pendiente',
      imagen_referencia: form.imagen_referencia,
    };
    setCitas(prev => [...prev, nueva]);
  }, [citas.length, historial.length, clienteSesion.cedula_cliente]);

  const cancelarCita = useCallback((idCita: string) => {
    setCitas(prev => prev.filter(c => c.id_cita !== idCita));
  }, []);

  const actualizarPerfil = useCallback((form: FormularioPerfil) => {
    const partes = form.nombre_completo.trim().split(' ');
    setClientes(prev => prev.map(c =>
      c.cedula_cliente === clienteSesion.cedula_cliente
        ? {
            ...c,
            nombre:   partes[0] ?? c.nombre,
            apellido: partes.slice(1).join(' ') || c.apellido,
            correo:   form.correo,
            telefono: form.telefono,
          }
        : c
    ));
  }, [clienteSesion.cedula_cliente]);

  // ── BARBERO ───────────────────────────────────────────────
  const barberoActual = sesion?.rol === 'barbero'
    ? (sesion.usuario as BarberoRegistrado)
    : null;

  const navegarBarberoA = useCallback((panel: PanelBarberoId) => setPanelBarberoActivo(panel), []);

  const actualizarEstadoCita = useCallback((idCita: string, estado: 'Completada' | 'Cancelada') => {
    setCitas(prev => prev.map(c => c.id_cita === idCita ? { ...c, estado } : c));
  }, []);

  const actualizarHorarioBarbero = useCallback((horario: FranjaHoraria[]) => {
    if (!barberoActual) return;
    setBarberos(prev => prev.map(b =>
      b.cedula_barbero === barberoActual.cedula_barbero ? { ...b, horario } : b
    ));
    setSesion(prev => {
      if (!prev || prev.rol !== 'barbero') return prev;
      return {
        ...prev,
        usuario: { ...(prev.usuario as BarberoRegistrado), horario },
      };
    });
  }, [barberoActual]);

  const actualizarPerfilBarbero = useCallback((form: FormularioPerfilBarbero) => {
    if (!barberoActual) return;
    const partes = form.nombre_completo.trim().split(' ');
    const actualizado: Partial<BarberoRegistrado> = {
      nombre:          partes[0] ?? barberoActual.nombre,
      apellido:        partes.slice(1).join(' ') || barberoActual.apellido,
      correo:          form.correo,
      telefono:        form.telefono,
      id_especialidad: form.id_especialidad,
    };
    setBarberos(prev => prev.map(b =>
      b.cedula_barbero === barberoActual.cedula_barbero ? { ...b, ...actualizado } : b
    ));
    setSesion(prev => {
      if (!prev || prev.rol !== 'barbero') return prev;
      return {
        ...prev,
        usuario: { ...(prev.usuario as BarberoRegistrado), ...actualizado },
      };
    });
  }, [barberoActual]);

  const todasLasCitas = barberoActual
    ? citas.filter(c => c.cedula_barbero === barberoActual.cedula_barbero)
    : [];

  const historialCliente = sesion?.rol === 'cliente'
    ? historial.filter(h => h.cedula_cliente === clienteSesion.cedula_cliente)
    : [];

  const historialBarbero = barberoActual
    ? historial.filter(h => h.cedula_barbero === barberoActual.cedula_barbero)
    : [];

  return (
    <AppContext.Provider value={{
      sesion, login, logout, registrarCliente, registrarBarbero,
      cliente:            clienteSesion,
      citas:              citas.filter(c => c.cedula_cliente === clienteSesion.cedula_cliente),
      historial:          historialCliente,
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
    }}>
      {children}
    </AppContext.Provider>
  );
}

export function useApp(): AppContextType {
  const ctx = useContext(AppContext);
  if (!ctx) throw new Error('useApp debe usarse dentro de <AppProvider>');
  return ctx;
}

// eslint-disable-next-line -- fast-refresh: hooks and components co-located intentionally
