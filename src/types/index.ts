// ══════════════════════════════════════════════════════════
//  TIPOS GLOBALES — StyleUp
//  Refleja el modelo relacional definido en script.js
// ══════════════════════════════════════════════════════════

export type EstadoBarbero = 'Disponible' | 'Ocupado' | 'Descanso';
export type EstadoCita    = 'Pendiente' | 'Confirmada' | 'Completada' | 'Cancelada';
export type PanelId       = 'inicio' | 'reservar' | 'miscitas' | 'historial' | 'perfil';
export type RolUsuario    = 'cliente' | 'admin' | 'barbero';

// ── TABLA: ESTADO_BARBERO ──────────────────────────────────
export interface EstadoBarberoRow {
  id_estado: string;
  estado: EstadoBarbero;
}

// ── TABLA: ESPECIALIDADES ──────────────────────────────────
export interface Especialidad {
  id_especialidad: string;
  especialidad: string;
  tiempo_estimado: number; // minutos
}

// ── TABLA: BARBEROS ────────────────────────────────────────
export interface Barbero {
  cedula_barbero: string;
  nombre: string;
  apellido: string;
  id_especialidad: string; // FK → ESPECIALIDADES
  correo: string;
  telefono: string;
}

// ── TABLA: HORARIO_BARBERO ─────────────────────────────────
export interface HorarioBarbero {
  cedula_barbero: string; // FK → BARBEROS
  id_estado: string;      // FK → ESTADO_BARBERO
  hora_inicio: string;
  hora_fin: string;
  fecha: string;          // YYYY-MM-DD
}

// ── TABLA: CLIENTES ────────────────────────────────────────
export interface Cliente {
  cedula_cliente: string;
  nombre: string;
  apellido: string;
  correo: string;
  telefono: string;
  fecha_registro: string; // YYYY-MM-DD
}

// ── TABLA: CITAS ───────────────────────────────────────────
export interface Cita {
  id_cita: string;
  cedula_cliente: string;  // FK → CLIENTES
  cedula_barbero: string;  // FK → BARBEROS
  id_especialidad: string; // FK → ESPECIALIDADES
  fecha: string;
  hora: string;
  estado: EstadoCita;
  imagen_referencia?: string; // base64 o URL
}

// ── TABLA: HISTORIAL_CITAS ─────────────────────────────────
export interface HistorialCita {
  id_cita: string;
  cedula_cliente: string;
  cedula_barbero: string;
  id_especialidad: string;
  fecha: string;
  estado: EstadoCita;
}

// ── INFO BARBERÍA ──────────────────────────────────────────
export interface HorarioBarberia {
  dias: string;
  horas: string;
}

export interface Barberia {
  nombre: string;
  ciudad: string;
  telefono: string;
  email: string;
  horario: HorarioBarberia[];
}

// ── FORMULARIO NUEVA CITA ──────────────────────────────────
export interface FormularioCita {
  cedula_barbero: string;
  id_especialidad: string;
  fecha: string;
  hora: string;
  imagen_referencia?: string;
}

// ── FORMULARIO PERFIL ──────────────────────────────────────
export interface FormularioPerfil {
  nombre_completo: string;
  correo: string;
  telefono: string;
  cedula_cliente: string;
}
