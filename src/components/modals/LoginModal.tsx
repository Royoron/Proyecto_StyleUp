// ══════════════════════════════════════════════════════════
//  LOGIN MODAL — StyleUp
//  Maneja login de cliente y barbero con selector de rol
// ══════════════════════════════════════════════════════════

import { useState } from 'react';
import { useApp } from '../../context/AppContext';
import type { RolUsuario } from '../../types';

interface LoginModalProps {
  onClose:          () => void;
  onAbrirRegistro:  () => void;
  onLoginExitoso:   (rol: RolUsuario) => void;
}

export default function LoginModal({ onClose, onAbrirRegistro, onLoginExitoso }: LoginModalProps) {
  const { login } = useApp();
  const [rol,      setRol]      = useState<RolUsuario>('cliente');
  const [correo,   setCorreo]   = useState('');
  const [password, setPassword] = useState('');
  const [error,    setError]    = useState('');
  const [cargando, setCargando] = useState(false);

  const handleSubmit = async () => {
    if (!correo || !password) { setError('Completa todos los campos.'); return; }
    setCargando(true);
    await new Promise(r => setTimeout(r, 600)); // simula latencia
    const ok = login(correo, password, rol);
    setCargando(false);
    if (!ok) { setError('Credenciales incorrectas. Verifica e intenta de nuevo.'); return; }
    onLoginExitoso(rol);
    onClose();
  };

  // Credenciales demo para facilitar prueba
  const fillDemo = () => {
    if (rol === 'cliente') { setCorreo('roger@gmail.com');    setPassword('cliente123'); }
    else                   { setCorreo('carlos@styleup.co');  setPassword('barbero123'); }
    setError('');
  };

  return (
    <div className="su-modal-overlay" onClick={onClose}>
      <div className="su-modal" onClick={e => e.stopPropagation()}>

        {/* Encabezado */}
        <div className="su-modal-header">
          <div className="su-modal-logo">Style<span>Up</span></div>
          <button className="su-modal-close" onClick={onClose}>
            <i className="bi bi-x-lg" />
          </button>
        </div>

        <div className="su-modal-body">
          <h4 className="su-modal-titulo">Iniciar sesión</h4>
          <p className="su-modal-sub">Accede a tu espacio personal</p>

          {/* Selector de rol */}
          <div className="rol-selector">
            <button
              className={`rol-btn ${rol === 'cliente' ? 'activo' : ''}`}
              onClick={() => { setRol('cliente'); setError(''); }}
            >
              <i className="bi bi-person-fill" /> Cliente
            </button>
            <button
              className={`rol-btn ${rol === 'barbero' ? 'activo' : ''}`}
              onClick={() => { setRol('barbero'); setError(''); }}
            >
              <i className="bi bi-scissors" /> Barbero
            </button>
          </div>

          {/* Campos */}
          <div className="su-campo-grupo">
            <label className="etiqueta-campo">Correo electrónico</label>
            <input
              className="campo-formulario"
              type="email"
              placeholder="tu@correo.com"
              value={correo}
              onChange={e => { setCorreo(e.target.value); setError(''); }}
              onKeyDown={e => e.key === 'Enter' && handleSubmit()}
            />
          </div>

          <div className="su-campo-grupo">
            <label className="etiqueta-campo">Contraseña</label>
            <input
              className="campo-formulario"
              type="password"
              placeholder="••••••••"
              value={password}
              onChange={e => { setPassword(e.target.value); setError(''); }}
              onKeyDown={e => e.key === 'Enter' && handleSubmit()}
            />
          </div>

          {/* Error */}
          {error && (
            <div className="su-alerta-error">
              <i className="bi bi-exclamation-circle me-2" />{error}
            </div>
          )}

          {/* Demo hint */}
          <div className="su-demo-hint" onClick={fillDemo}>
            <i className="bi bi-lightning-fill" /> Usar credenciales demo de {rol}
          </div>

          {/* Botón principal */}
          <button
            className="btn-principal w-100 su-btn-submit"
            onClick={handleSubmit}
            disabled={cargando}
          >
            {cargando
              ? <><i className="bi bi-arrow-repeat su-spin me-2" />Verificando...</>
              : <><i className="bi bi-box-arrow-in-right me-2" />Ingresar</>
            }
          </button>

          {/* Pie */}
          {rol === 'cliente' && (
            <p className="su-modal-pie">
              ¿No tienes cuenta?{' '}
              <span className="su-link" onClick={() => { onClose(); onAbrirRegistro(); }}>
                Regístrate aquí
              </span>
            </p>
          )}
        </div>
      </div>
    </div>
  );
}