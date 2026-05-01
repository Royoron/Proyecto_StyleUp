// ══════════════════════════════════════════════════════════
//  CONTEXTO GLOBAL — StyleUp
//  Reemplaza las variables globales mutables de script.js
//  con estado React tipado y accesible desde cualquier
//  componente sin prop drilling.
// ══════════════════════════════════════════════════════════

import { createContext, useContext, useState, useCallback } from 'react';
import type { ReactNode } from 'react';
import type { Cita, Cliente, HistorialCita, PanelId, FormularioCita, FormularioPerfil } from '../types';
import { citasIniciales, historialCitasIniciales, clienteActual as clienteInicial } from '../data/mockData';
import { generarIdCita } from '../utils/helpers';

// ── Forma del contexto ─────────────────────────────────────
interface AppContextType {
  // Estado
  cliente:       Cliente;
  citas:         Cita[];
  historial:     HistorialCita[];
  panelActivo:   PanelId;

  // Acciones
  navegarA:        (panel: PanelId) => void;
  agregarCita:     (form: FormularioCita) => void;
  cancelarCita:    (idCita: string) => void;
  actualizarPerfil:(form: FormularioPerfil) => void;
}

const AppContext = createContext<AppContextType | null>(null);

// ── Provider ───────────────────────────────────────────────
export function AppProvider({ children }: { children: ReactNode }) {
  const [cliente,     setCliente]     = useState<Cliente>(clienteInicial);
  const [citas,       setCitas]       = useState<Cita[]>(citasIniciales);
  const [historial]                   = useState<HistorialCita[]>(historialCitasIniciales);
  const [panelActivo, setPanelActivo] = useState<PanelId>('inicio');

  const navegarA = useCallback((panel: PanelId) => {
    setPanelActivo(panel);
  }, []);

  // Simula INSERT en CITAS
  const agregarCita = useCallback((form: FormularioCita) => {
    const nuevaCita: Cita = {
      id_cita:         generarIdCita(citas.length + historial.length),
      cedula_cliente:  cliente.cedula_cliente,
      cedula_barbero:  form.cedula_barbero,
      id_especialidad: form.id_especialidad,
      fecha:           form.fecha,
      hora:            form.hora,
      estado:          'Pendiente',
      imagen_referencia: form.imagen_referencia,
    };
    setCitas(prev => [...prev, nuevaCita]);
  }, [citas.length, historial.length, cliente.cedula_cliente]);

  // Simula DELETE en CITAS
  const cancelarCita = useCallback((idCita: string) => {
    setCitas(prev => prev.filter(c => c.id_cita !== idCita));
  }, []);

  // Simula UPDATE en CLIENTES
  const actualizarPerfil = useCallback((form: FormularioPerfil) => {
    const partes = form.nombre_completo.trim().split(' ');
    setCliente(prev => ({
      ...prev,
      nombre:         partes[0]  ?? prev.nombre,
      apellido:       partes.slice(1).join(' ') || prev.apellido,
      correo:         form.correo,
      telefono:       form.telefono,
      cedula_cliente: form.cedula_cliente,
    }));
  }, []);

  return (
    <AppContext.Provider value={{
      cliente,
      citas,
      historial,
      panelActivo,
      navegarA,
      agregarCita,
      cancelarCita,
      actualizarPerfil,
    }}>
      {children}
    </AppContext.Provider>
  );
}

// ── Hook de consumo ────────────────────────────────────────
export function useApp(): AppContextType {
  const ctx = useContext(AppContext);
  if (!ctx) throw new Error('useApp debe usarse dentro de <AppProvider>');
  return ctx;
}

// eslint-disable-next-line -- fast-refresh: hooks and components co-located intentionally