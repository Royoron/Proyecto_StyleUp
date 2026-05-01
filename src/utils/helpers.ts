// ══════════════════════════════════════════════════════════
//  UTILIDADES — StyleUp
//  Equivalente a las funciones de apoyo de script.js
// ══════════════════════════════════════════════════════════

import type { EstadoCita } from '../types';
import { barberos, especialidades } from '../data/mockData';

/** Retorna "Nombre Apellido" dado cedula_barbero */
export function getNombreBarbero(cedula: string): string {
  const b = barberos.find(b => b.cedula_barbero === cedula);
  return b ? `${b.nombre} ${b.apellido}` : 'Desconocido';
}

/** Retorna el nombre de la especialidad dado id_especialidad */
export function getNombreEspecialidad(id: string): string {
  const e = especialidades.find(e => e.id_especialidad === id);
  return e ? e.especialidad : 'Desconocido';
}

/** Formatea "2026-01-15" → "15 ene 2026" */
export function formatearFecha(fechaISO: string): string {
  const [year, month, day] = fechaISO.split('-').map(Number);
  const fecha = new Date(year, month - 1, day);
  return fecha.toLocaleDateString('es-CO', { day: '2-digit', month: 'short', year: 'numeric' });
}

/** Clase CSS del badge según el estado de la cita */
export function claseBadge(estado: EstadoCita | string): string {
  const mapa: Record<string, string> = {
    Pendiente:  'badge-pendiente',
    Confirmada: 'badge-confirmada',
    Completada: 'badge-completada',
    Cancelada:  'badge-cancelada',
  };
  return mapa[estado] ?? 'badge-pendiente';
}

/** Genera la fecha y hora actual en formato legible */
export function fechaActualLegible(): string {
  return new Date().toLocaleDateString('es-CO', {
    weekday: 'long',
    year:    'numeric',
    month:   'long',
    day:     'numeric',
  });
}

/** Genera un nuevo ID de cita */
export function generarIdCita(totalCitas: number): string {
  return 'CIT' + String(totalCitas + 1).padStart(3, '0');
}

/** Obtiene la inicial de un nombre */
export function getInicial(nombre: string): string {
  return nombre.charAt(0).toUpperCase();
}

/** Valida si un archivo es una imagen permitida */
export function esImagenValida(file: File): boolean {
  const tiposPermitidos = ['image/jpeg', 'image/png', 'image/webp'];
  return tiposPermitidos.includes(file.type);
}

/** Lee un archivo como base64 */
export function leerArchivoComoBase64(file: File): Promise<string> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload  = e => resolve(e.target?.result as string);
    reader.onerror = () => reject(new Error('Error al leer el archivo'));
    reader.readAsDataURL(file);
  });
}
