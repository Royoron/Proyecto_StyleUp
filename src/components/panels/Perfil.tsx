// ══════════════════════════════════════════════════════════
//  PERFIL — StyleUp
// ══════════════════════════════════════════════════════════

import { useState } from 'react';
import { useApp } from  '../../context/AppContext';
import { Avatar, Button, Label, Input, AlertaExito, EtiquetaSeccion } from '../ui';
import { getInicial, formatearFecha } from '../../utils/helpers';
import type { FormularioPerfil } from '../../types';

export default function Perfil() {
  const { cliente, historial, actualizarPerfil } = useApp();
  const [exito, setExito] = useState(false);

  // ✅ Estado local del formulario — inicializado una sola vez desde el contexto
  const [form, setForm] = useState<FormularioPerfil>(() => ({
    nombre_completo: `${cliente.nombre} ${cliente.apellido}`,
    correo:          cliente.correo,
    telefono:        cliente.telefono,
    cedula_cliente:  cliente.cedula_cliente,
  }));

  // Sin useEffect — no hace falta sincronizar porque actualizarPerfil
  // actualiza el contexto Y el form local en la misma acción

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleGuardar = () => {
    actualizarPerfil(form);   // actualiza el contexto
    setExito(true);
    setTimeout(() => setExito(false), 3000);
  };

  const visitasTotales = historial.filter(
    h => h.cedula_cliente === cliente.cedula_cliente
  ).length;

  return (
    <div className="row g-4">

      {/* Tarjeta resumen */}
      <div className="col-lg-4">
        <div className="tarjeta-servicio text-center" style={{ height: 'auto' }}>
          <Avatar
            inicial={getInicial(cliente.nombre)}
            size={80}
            fontSize="2rem"
            style={{ margin: '0 auto 1rem' }}
          />
          <h5 style={{ fontFamily: "'Playfair Display', serif", color: 'var(--claro)' }}>
            {cliente.nombre} {cliente.apellido}
          </h5>
          <p style={{ fontSize: '.78rem', color: 'var(--gris)', marginTop: '.3rem' }}>
            {cliente.correo}
          </p>
          <StatPerfil label="Miembro desde" valor={formatearFecha(cliente.fecha_registro)} />
          <StatPerfil
            label="Visitas totales"
            valor={String(visitasTotales)}
            valorStyle={{ fontFamily: "'Playfair Display', serif", fontSize: '1.6rem', color: 'var(--claro)' }}
          />
        </div>
      </div>

      {/* Formularios */}
      <div className="col-lg-8">

        {/* Información personal */}
        <div className="tarjeta-servicio" style={{ height: 'auto' }}>
          <EtiquetaSeccion>Información personal</EtiquetaSeccion>
          <div className="row g-3">
            <div className="col-md-6">
              <Label>Nombre completo</Label>
              <Input name="nombre_completo" value={form.nombre_completo} onChange={handleChange} />
            </div>
            <div className="col-md-6">
              <Label>Teléfono</Label>
              <Input name="telefono" value={form.telefono} onChange={handleChange} placeholder="+57 300 000 0000" />
            </div>
            <div className="col-md-6">
              <Label>Correo electrónico</Label>
              <Input type="email" name="correo" value={form.correo} onChange={handleChange} />
            </div>
            <div className="col-md-6">
              <Label>Cédula</Label>
              <Input name="cedula_cliente" value={form.cedula_cliente} onChange={handleChange} placeholder="Número de cédula" />
            </div>
            <div className="col-12 mt-1">
              <Button onClick={handleGuardar}>
                <i className="bi bi-check2 me-2" />Guardar cambios
              </Button>
            </div>
          </div>
          {exito && <AlertaExito mensaje="Perfil actualizado correctamente." />}
        </div>

        {/* Cambiar contraseña */}
        <div className="tarjeta-servicio mt-3" style={{ height: 'auto' }}>
          <EtiquetaSeccion>Cambiar contraseña</EtiquetaSeccion>
          <div className="row g-3">
            <div className="col-md-6">
              <Label>Contraseña actual</Label>
              <Input type="password" placeholder="••••••••" />
            </div>
            <div className="col-md-6">
              <Label>Nueva contraseña</Label>
              <Input type="password" placeholder="••••••••" />
            </div>
            <div className="col-12 mt-1">
              <Button variante="nav">
                <i className="bi bi-shield-lock me-2" />Actualizar contraseña
              </Button>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

// ── Sub-componente ─────────────────────────────────────────
function StatPerfil({ label, valor, valorStyle }: {
  label:       string;
  valor:       string;
  valorStyle?: React.CSSProperties;
}) {
  return (
    <div style={{ marginTop: '.8rem', paddingTop: '.8rem', borderTop: '1px solid rgba(201,168,76,.08)' }}>
      <span className="tiempo-servicio d-block mb-1">{label}</span>
      <span style={{ color: 'var(--dorado)', fontSize: '.9rem', ...valorStyle }}>{valor}</span>
    </div>
  );
}