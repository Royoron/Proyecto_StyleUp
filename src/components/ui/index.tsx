// ══════════════════════════════════════════════════════════
//  COMPONENTES UI — StyleUp
//  Piezas atómicas reutilizables basadas en los estilos
//  definidos en estilos.css y dashboard.css
// ══════════════════════════════════════════════════════════

import type { ReactNode, InputHTMLAttributes, SelectHTMLAttributes } from 'react';
import type { EstadoCita } from '../../types';
import { claseBadge } from '../../utils/helpers';

// ── Button ─────────────────────────────────────────────────
interface ButtonProps {
  children:  ReactNode;
  variante?: 'principal' | 'contorno' | 'nav';
  onClick?:  () => void;
  className?: string;
  type?:     'button' | 'submit' | 'reset';
  disabled?: boolean;
  fullWidth?: boolean;
}

export function Button({
  children,
  variante  = 'principal',
  onClick,
  className = '',
  type      = 'button',
  disabled  = false,
  fullWidth = false,
}: ButtonProps) {
  const clases: Record<string, string> = {
    principal: 'btn-principal',
    contorno:  'btn-contorno',
    nav:       'btn-nav',
  };
  return (
    <button
      type={type}
      className={`${clases[variante]} ${fullWidth ? 'w-100' : ''} ${className}`}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
}

// ── Badge de estado ────────────────────────────────────────
interface BadgeProps {
  estado: EstadoCita | string;
}

export function Badge({ estado }: BadgeProps) {
  return (
    <span className={`badge-estado ${claseBadge(estado)}`}>
      {estado}
    </span>
  );
}

// ── Label de campo ─────────────────────────────────────────
export function Label({ children }: { children: ReactNode }) {
  return <label className="etiqueta-campo">{children}</label>;
}

// ── Input ──────────────────────────────────────────────────
type InputProps = InputHTMLAttributes<HTMLInputElement>;

export function Input({ className = '', ...props }: InputProps) {
  return <input className={`campo-formulario ${className}`} {...props} />;
}

// ── Select ─────────────────────────────────────────────────
type SelectProps = SelectHTMLAttributes<HTMLSelectElement> & {
  children: ReactNode;
};

export function Select({ className = '', children, ...props }: SelectProps) {
  return (
    <select className={`campo-formulario ${className}`} {...props}>
      {children}
    </select>
  );
}

// ── Alerta de éxito ────────────────────────────────────────
export function AlertaExito({ mensaje }: { mensaje: string }) {
  return (
    <div style={{
      marginTop:    '1rem',
      background:   'rgba(80,180,120,.1)',
      border:       '1px solid rgba(80,180,120,.25)',
      borderRadius: '3px',
      color:        '#50b478',
      padding:      '.75rem 1rem',
      fontSize:     '.88rem',
    }}>
      <i className="bi bi-check-circle me-2" />
      {mensaje}
    </div>
  );
}

// ── Separador dorado ───────────────────────────────────────
export function SeparadorDorado({ centrado = false }: { centrado?: boolean }) {
  return (
    <div
      className="separador-dorado"
      style={centrado ? { marginLeft: 'auto', marginRight: 'auto' } : undefined}
    />
  );
}

// ── Etiqueta de sección ────────────────────────────────────
export function EtiquetaSeccion({ children, centrada = false }: { children: ReactNode; centrada?: boolean }) {
  return (
    <div className={`seccion-etiqueta ${centrada ? 'justify-content-center' : ''}`}>
      {children}
    </div>
  );
}

// ── Avatar con inicial ─────────────────────────────────────
interface AvatarProps {
  inicial:   string;
  size?:     number;
  fontSize?: string;
  onClick?:  () => void;
  style?:    React.CSSProperties;
}

export function Avatar({ inicial, size = 42, fontSize = '1rem', onClick, style }: AvatarProps) {
  return (
    <div
      className="avatar-barbero"
      onClick={onClick}
      style={{
        width:    size,
        height:   size,
        fontSize,
        margin:   0,
        flexShrink: 0,
        cursor:   onClick ? 'pointer' : 'default',
        ...style,
      }}
    >
      {inicial}
    </div>
  );
}