// ══════════════════════════════════════════════════════════
//  TIPOS GLOBALES — StyleUp
// ══════════════════════════════════════════════════════════

export type EstadoBarbero = 'Disponible' | 'Ocupado' | 'Descanso';
export type EstadoCita    = 'Pendiente' | 'Confirmada' | 'Completada' | 'Cancelada';
export type PanelId       = 'inicio' | 'reservar' | 'miscitas' | 'historial' | 'perfil';
export type PanelBarberoId= 'agenda' | 'citas' | 'horario' | 'historial' | 'perfil';
export type RolUsuario    = 'cliente' | 'barbero';
export type DiaSemana     = 'Lunes' | 'Martes' | 'Miércoles' | 'Jueves' | 'Viernes' | 'Sábado' | 'Domingo';

// ── TABLA: ESPECIALIDADES ──────────────────────────────────
export interface Especialidad {
  id_especialidad: string;
  especialidad:    string;
  tiempo_estimado: number;
}

// ── TABLA: BARBEROS ────────────────────────────────────────
export interface Barbero {
  cedula_barbero: string;
  nombre:         string;
  apellido:       string;
  id_especialidad:string;
  correo:         string;
  telefono:       string;
}

// ── FRANJA HORARIA ─────────────────────────────────────────
export interface FranjaHoraria {
  dia:         DiaSemana;
  hora_inicio: string; // "08:00"
  hora_fin:    string; // "18:00"
}

// ── BARBERO REGISTRADO (con auth + horario) ────────────────
export interface BarberoRegistrado extends Barbero {
  password: string;
  rol:      'barbero';
  horario:  FranjaHoraria[];
}

// ── TABLA: CLIENTES ────────────────────────────────────────
export interface Cliente {
  cedula_cliente: string;
  nombre:         string;
  apellido:       string;
  correo:         string;
  telefono:       string;
  fecha_registro: string;
}

// ── CLIENTE REGISTRADO (con auth) ──────────────────────────
export interface ClienteRegistrado extends Cliente {
  password: string;
  rol:      'cliente';
}

// ── SESIÓN ACTIVA ──────────────────────────────────────────
export interface Sesion {
  usuario: ClienteRegistrado | BarberoRegistrado;
  rol:     RolUsuario;
}

// ── TABLA: CITAS ───────────────────────────────────────────
export interface Cita {
  id_cita:           string;
  cedula_cliente:    string;
  cedula_barbero:    string;
  id_especialidad:   string;
  fecha:             string;
  hora:              string;
  estado:            EstadoCita;
  imagen_referencia?:string;
}

// ── TABLA: HISTORIAL_CITAS ─────────────────────────────────
export interface HistorialCita {
  id_cita:         string;
  cedula_cliente:  string;
  cedula_barbero:  string;
  id_especialidad: string;
  fecha:           string;
  estado:          EstadoCita;
}

// ── FORMULARIOS ────────────────────────────────────────────
export interface FormularioCita {
  cedula_barbero:    string;
  id_especialidad:   string;
  fecha:             string;
  hora:              string;
  imagen_referencia?:string;
}

export interface FormularioPerfil {
  nombre_completo: string;
  correo:          string;
  telefono:        string;
  cedula_cliente:  string;
}

export interface FormularioRegistroCliente {
  nombre:    string;
  apellido:  string;
  cedula:    string;
  correo:    string;
  telefono:  string;
  password:  string;
  fecha_registro: Date;
}

export interface FormularioRegistroBarbero {
  nombre:   string;
  apellido: string;
  correo:   string;
  telefono: string;
  cedula:   string;   
  password: string;
  horario:  FranjaHoraria[];
}

// ── INFO BARBERÍA ──────────────────────────────────────────
export interface HorarioBarberia {
  dias:  string;
  horas: string;
}