// ══════════════════════════════════════════════════════════
//  MOCK DATA — StyleUp (con auth)
// ══════════════════════════════════════════════════════════

import type {
  ClienteRegistrado,
  BarberoRegistrado,
  Cita,
  HistorialCita,
  Especialidad,
} from "../types";

export const especialidades: Especialidad[] = [
  { id_especialidad: 1, especialidad: "Corte Clasico", tiempo_estimado: 30 },
  { id_especialidad: 2, especialidad: "Arreglo de Barba", tiempo_estimado: 20 },
  { id_especialidad: 3, especialidad: "Corte + Barba", tiempo_estimado: 50 },
  { id_especialidad: 4, especialidad: "Afeitado Navaja", tiempo_estimado: 40 },
  {
    id_especialidad: 5,
    especialidad: "Degradado Premium",
    tiempo_estimado: 45,
  },
];

export const cuentasBarbero: BarberoRegistrado[] = [
  {
    cedula_barbero: "BAR001",
    nombre: "Carlos",
    apellido: "Mendoza",
    id_especialidad: 1,
    correo: "carlos@styleup.co",
    telefono: "+57 300 111 2222",
    password: "barbero123",
    rol: "barbero",
    horario: [
      { dia: "Lunes", hora_inicio: "08:00", hora_fin: "17:00" },
      { dia: "Martes", hora_inicio: "08:00", hora_fin: "17:00" },
      { dia: "Miércoles", hora_inicio: "08:00", hora_fin: "17:00" },
      { dia: "Jueves", hora_inicio: "08:00", hora_fin: "17:00" },
      { dia: "Viernes", hora_inicio: "08:00", hora_fin: "18:00" },
      { dia: "Sábado", hora_inicio: "09:00", hora_fin: "14:00" },
    ],
  },
  {
    cedula_barbero: "BAR002",
    nombre: "Andrés",
    apellido: "Rincón",
    id_especialidad: 3,
    correo: "andres@styleup.co",
    telefono: "+57 301 222 3333",
    password: "barbero123",
    rol: "barbero",
    horario: [
      { dia: "Lunes", hora_inicio: "10:00", hora_fin: "19:00" },
      { dia: "Martes", hora_inicio: "10:00", hora_fin: "19:00" },
      { dia: "Miércoles", hora_inicio: "10:00", hora_fin: "19:00" },
      { dia: "Jueves", hora_inicio: "10:00", hora_fin: "19:00" },
      { dia: "Viernes", hora_inicio: "10:00", hora_fin: "19:00" },
      { dia: "Sábado", hora_inicio: "09:00", hora_fin: "15:00" },
    ],
  },
];

export const cuentasCliente: ClienteRegistrado[] = [
  {
    cedula_cliente: "CLI001",
    nombre: "Roger",
    apellido: "Ramírez",
    correo: "roger@gmail.com",
    telefono: "+57 310 555 4444",
    fecha_registro: "2025-01-15",
    password: "cliente123",
    rol: "cliente",
  },
  {
    cedula_cliente: "CLI002",
    nombre: "Luis",
    apellido: "Martínez",
    correo: "luis@gmail.com",
    telefono: "+57 312 666 7777",
    fecha_registro: "2025-03-10",
    password: "cliente123",
    rol: "cliente",
  },
];

// Citas actuales (hoy y próximos días)
const hoy = new Date();
const fmt = (d: Date) => d.toISOString().split("T")[0];
const mas = (n: number) => {
  const d = new Date(hoy);
  d.setDate(d.getDate() + n);
  return fmt(d);
};

export const citasGlobales: Cita[] = [
  {
    id_cita: "CIT001",
    cedula_cliente: "CLI001",
    cedula_barbero: "BAR001",
    id_especialidad: 1,
    fecha: fmt(hoy),
    hora: "09:00",
    estado: "Confirmada",
  },
  {
    id_cita: "CIT002",
    cedula_cliente: "CLI002",
    cedula_barbero: "BAR001",
    id_especialidad: 2,
    fecha: fmt(hoy),
    hora: "13:00",
    estado: "Pendiente",
  },
  {
    id_cita: "CIT003",
    cedula_cliente: "CLI001",
    cedula_barbero: "BAR002",
    id_especialidad: 3,
    fecha: mas(1),
    hora: "10:00",
    estado: "Pendiente",
  },
  {
    id_cita: "CIT004",
    cedula_cliente: "CLI002",
    cedula_barbero: "BAR001",
    id_especialidad: 5,
    fecha: mas(2),
    hora: "11:00",
    estado: "Confirmada",
  },
];

export const historialGlobal: HistorialCita[] = [
  {
    id_cita: "HIST001",
    cedula_cliente: "CLI001",
    cedula_barbero: "BAR001",
    id_especialidad: 1,
    fecha: "2026-04-01",
    estado: "Completada",
  },
  {
    id_cita: "HIST002",
    cedula_cliente: "CLI002",
    cedula_barbero: "BAR001",
    id_especialidad: 2,
    fecha: "2026-04-05",
    estado: "Completada",
  },
  {
    id_cita: "HIST003",
    cedula_cliente: "CLI001",
    cedula_barbero: "BAR002",
    id_especialidad: 3,
    fecha: "2026-04-10",
    estado: "Cancelada",
  },
  {
    id_cita: "HIST004",
    cedula_cliente: "CLI002",
    cedula_barbero: "BAR001",
    id_especialidad: 4,
    fecha: "2026-04-15",
    estado: "Completada",
  },
];

export const horasDisponibles = [
  "08:00",
  "08:30",
  "09:00",
  "09:30",
  "10:00",
  "10:30",
  "11:00",
  "11:30",
  "12:00",
  "12:30",
  "13:00",
  "13:30",
  "14:00",
  "14:30",
  "15:00",
  "15:30",
  "16:00",
  "16:30",
  "17:00",
  "17:30",
  "18:00",
];
