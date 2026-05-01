// ══════════════════════════════════════════════════════════
//  DATOS MOCK — StyleUp
//  Equivalente al bloque de datos de script.js
//  Reemplazar con llamadas a API cuando se conecte el backend
// ══════════════════════════════════════════════════════════

import type {
  Barbero,
  Especialidad,
  HorarioBarbero,
  Cliente,
  Cita,
  HistorialCita,
  Barberia,
  EstadoBarberoRow,
} from '../types';

export const estadosBarbero: EstadoBarberoRow[] = [
  { id_estado: 'EST001', estado: 'Disponible' },
  { id_estado: 'EST002', estado: 'Ocupado'    },
  { id_estado: 'EST003', estado: 'Descanso'   },
];

export const especialidades: Especialidad[] = [
  { id_especialidad: 'ESP001', especialidad: 'Corte Clásico',    tiempo_estimado: 30 },
  { id_especialidad: 'ESP002', especialidad: 'Arreglo de Barba', tiempo_estimado: 20 },
  { id_especialidad: 'ESP003', especialidad: 'Tinte & Color',    tiempo_estimado: 60 },
  { id_especialidad: 'ESP004', especialidad: 'Paquete Completo', tiempo_estimado: 75 },
];

export const barberos: Barbero[] = [
  { cedula_barbero: '1001', nombre: 'Carlos', apellido: 'Mendez', id_especialidad: 'ESP001', correo: 'carlos@styleup.com', telefono: '3001000001' },
  { cedula_barbero: '1002', nombre: 'Andrés', apellido: 'Torres', id_especialidad: 'ESP002', correo: 'andres@styleup.com', telefono: '3001000002' },
  { cedula_barbero: '1003', nombre: 'Luis',   apellido: 'Romero', id_especialidad: 'ESP003', correo: 'luis@styleup.com',   telefono: '3001000003' },
  { cedula_barbero: '1004', nombre: 'Miguel', apellido: 'Peña',   id_especialidad: 'ESP004', correo: 'miguel@styleup.com', telefono: '3001000004' },
];

export const horarioBarbero: HorarioBarbero[] = [
  { cedula_barbero: '1001', id_estado: 'EST001', hora_inicio: '08:00', hora_fin: '12:00', fecha: '2026-04-07' },
  { cedula_barbero: '1001', id_estado: 'EST002', hora_inicio: '12:00', hora_fin: '13:00', fecha: '2026-04-07' },
  { cedula_barbero: '1001', id_estado: 'EST001', hora_inicio: '13:00', hora_fin: '19:00', fecha: '2026-04-07' },
  { cedula_barbero: '1002', id_estado: 'EST001', hora_inicio: '08:00', hora_fin: '17:00', fecha: '2026-04-07' },
  { cedula_barbero: '1003', id_estado: 'EST003', hora_inicio: '08:00', hora_fin: '10:00', fecha: '2026-04-07' },
  { cedula_barbero: '1003', id_estado: 'EST001', hora_inicio: '10:00', hora_fin: '19:00', fecha: '2026-04-07' },
  { cedula_barbero: '1004', id_estado: 'EST001', hora_inicio: '09:00', hora_fin: '17:00', fecha: '2026-04-07' },
];

export const clienteActual: Cliente = {
  cedula_cliente: '2001',
  nombre:         'Roger',
  apellido:       'Reales',
  correo:         'roger@styleup.com',
  telefono:       '3009876543',
  fecha_registro: '2026-01-15',
};

export const citasIniciales: Cita[] = [
  { id_cita: 'CIT001', cedula_cliente: '2001', cedula_barbero: '1001', id_especialidad: 'ESP001', fecha: '2026-03-28', hora: '09:00', estado: 'Confirmada' },
  { id_cita: 'CIT002', cedula_cliente: '2001', cedula_barbero: '1002', id_especialidad: 'ESP002', fecha: '2026-04-02', hora: '11:00', estado: 'Pendiente'  },
  { id_cita: 'CIT003', cedula_cliente: '2001', cedula_barbero: '1004', id_especialidad: 'ESP004', fecha: '2026-04-10', hora: '10:00', estado: 'Pendiente'  },
];

export const historialCitasIniciales: HistorialCita[] = [
  { id_cita: 'HIS001', cedula_cliente: '2001', cedula_barbero: '1001', id_especialidad: 'ESP001', fecha: '2026-01-10', estado: 'Completada' },
  { id_cita: 'HIS002', cedula_cliente: '2001', cedula_barbero: '1002', id_especialidad: 'ESP002', fecha: '2026-01-25', estado: 'Completada' },
  { id_cita: 'HIS003', cedula_cliente: '2001', cedula_barbero: '1003', id_especialidad: 'ESP003', fecha: '2026-02-14', estado: 'Cancelada'  },
  { id_cita: 'HIS004', cedula_cliente: '2001', cedula_barbero: '1004', id_especialidad: 'ESP004', fecha: '2026-03-01', estado: 'Completada' },
  { id_cita: 'HIS005', cedula_cliente: '2001', cedula_barbero: '1001', id_especialidad: 'ESP001', fecha: '2026-03-15', estado: 'Completada' },
];

export const barberia: Barberia = {
  nombre:   'StyleUp',
  ciudad:   'Valledupar, Cesar',
  telefono: '+57 300 000 0000',
  email:    'info@styleup.com',
  horario: [
    { dias: 'Lun – Vie', horas: '08:00 – 19:00' },
    { dias: 'Sábado',    horas: '08:00 – 17:00' },
    { dias: 'Domingo',   horas: 'Cerrado'        },
  ],
};

export const horasDisponibles: string[] = [
  '09:00', '10:00', '11:00', '12:00', '14:00', '15:00', '16:00',
];
