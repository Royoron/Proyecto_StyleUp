// ══════════════════════════════════════════════════════════
//  REGISTRO CLIENTE MODAL — StyleUp
// ══════════════════════════════════════════════════════════

import { useState } from 'react';
import { useApp } from '../../context/AppContext';

interface RegistroClienteModalProps {
  onClose:           () => void;
  onAbrirLogin:      () => void;
  onRegistroExitoso: () => void;
}

export default function RegistroClienteModal({
  onClose,
  onAbrirLogin,
  onRegistroExitoso,
}: RegistroClienteModalProps) {
  const { registrarCliente } = useApp();

  const [form, setForm] = useState({
    nombre:   '',
    apellido: '',
    correo:   '',
    telefono: '',
    cedula:   '',       // ✅ "cedula" — coincide con FormularioRegistroCliente
    password: '',
  });

  const [confirmar, setConfirmar] = useState(''); // ✅ fuera del form y del handler

  const [error,    setError]    = useState('');
  const [cargando, setCargando] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
    setError('');
  };

  const handleConfirmarChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setConfirmar(e.target.value);
    setError('');
  };

  const handleSubmit = async () => {
    const { nombre, apellido, correo, telefono, cedula, password } = form;

    if (!nombre || !apellido || !correo || !cedula || !password) {
      setError('Completa todos los campos obligatorios.');
      return;
    }

    if (password !== confirmar) {
      setError('Las contraseñas no coinciden.');
      return;
    }

    if (password.length < 6) {
      setError('La contraseña debe tener al menos 6 caracteres.');
      return;
    }

    setCargando(true);
    await new Promise(r => setTimeout(r, 700));

    // ✅ registrarCliente retorna { ok, mensaje } — no un booleano
    const { ok, mensaje } = registrarCliente({
        nombre,
        apellido,
        correo,
        telefono,
        cedula,
        password,
        fecha_registro: new Date()
    });

    setCargando(false);

    if (!ok) {
      setError(mensaje);
      return;
    }

    onRegistroExitoso();
    onClose();
  };

  return (
    <div className="su-modal-overlay" onClick={onClose}>
      <div className="su-modal su-modal-lg" onClick={e => e.stopPropagation()}>

        <div className="su-modal-header">
          <div className="su-modal-logo">Style<span>Up</span></div>
          <button className="su-modal-close" onClick={onClose}>
            <i className="bi bi-x-lg" />
          </button>
        </div>

        <div className="su-modal-body">
          <h4 className="su-modal-titulo">Crear cuenta</h4>
          <p className="su-modal-sub">Únete y gestiona tus citas fácilmente</p>

          <div className="row g-3">
            <div className="col-6">
              <label className="etiqueta-campo">Nombre *</label>
              <input
                className="campo-formulario"
                name="nombre"
                value={form.nombre}
                onChange={handleChange}
                placeholder="Juan"
              />
            </div>
            <div className="col-6">
              <label className="etiqueta-campo">Apellido *</label>
              <input
                className="campo-formulario"
                name="apellido"
                value={form.apellido}
                onChange={handleChange}
                placeholder="Pérez"
              />
            </div>
            <div className="col-12">
              <label className="etiqueta-campo">Correo electrónico *</label>
              <input
                className="campo-formulario"
                type="email"
                name="correo"
                value={form.correo}
                onChange={handleChange}
                placeholder="tu@correo.com"
              />
            </div>
            <div className="col-6">
              <label className="etiqueta-campo">Cédula *</label>
              <input
                className="campo-formulario"
                name="cedula"
                value={form.cedula}
                onChange={handleChange}
                placeholder="1234567890"
              />
            </div>
            <div className="col-6">
              <label className="etiqueta-campo">Teléfono</label>
              <input
                className="campo-formulario"
                name="telefono"
                value={form.telefono}
                onChange={handleChange}
                placeholder="+57 300..."
              />
            </div>
            <div className="col-6">
              <label className="etiqueta-campo">Contraseña *</label>
              <input
                className="campo-formulario"
                type="password"
                name="password"
                value={form.password}
                onChange={handleChange}
                placeholder="••••••••"
              />
            </div>
            <div className="col-6">
              <label className="etiqueta-campo">Confirmar contraseña *</label>
              <input
                className="campo-formulario"
                type="password"
                name="confirmar"
                value={confirmar}
                onChange={handleConfirmarChange}
                placeholder="••••••••"
              />
            </div>
          </div>

          {error && (
            <div className="su-alerta-error mt-3">
              <i className="bi bi-exclamation-circle me-2" />{error}
            </div>
          )}

          <button
            className="btn-principal w-100 su-btn-submit mt-3"
            onClick={handleSubmit}
            disabled={cargando}
          >
            {cargando
              ? <><i className="bi bi-arrow-repeat su-spin me-2" />Creando cuenta...</>
              : <><i className="bi bi-person-check me-2" />Crear cuenta</>
            }
          </button>

          <p className="su-modal-pie">
            ¿Ya tienes cuenta?{' '}
            <span className="su-link" onClick={() => { onClose(); onAbrirLogin(); }}>
              Inicia sesión
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}