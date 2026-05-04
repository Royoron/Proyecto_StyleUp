// ══════════════════════════════════════════════════════════
//  PANEL NUEVA RESERVA — StyleUp
// ══════════════════════════════════════════════════════════

import { useState, useRef } from 'react';
import { useApp } from '../../context/AppContext';
import { Button, Label, Input, Select, AlertaExito, SeparadorDorado } from '../ui';
import { cuentasBarbero, especialidades, horasDisponibles } from '../../data/mockData';
import { esImagenValida, leerArchivoComoBase64 } from '../../utils/helpers';
import type { FormularioCita } from '../../types';

const FORM_INICIAL: FormularioCita = {
  cedula_barbero:  '',
  id_especialidad: '',
  fecha:           '',
  hora:            '',
};

export default function PanelReservar() {
  const { agregarCita } = useApp();
  const [form,          setForm]          = useState<FormularioCita>(FORM_INICIAL);
  const [exito,         setExito]         = useState(false);
  const [previewSrc,    setPreviewSrc]    = useState<string | null>(null);
  const [nombreArchivo, setNombreArchivo] = useState('');
  const [errorImagen,   setErrorImagen]   = useState(false);
  const inputFileRef = useRef<HTMLInputElement>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleImagen = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const archivo = e.target.files?.[0];
    if (!archivo || !esImagenValida(archivo)) {
      setErrorImagen(true);
      if (inputFileRef.current) inputFileRef.current.value = '';
      return;
    }
    setErrorImagen(false);
    const base64 = await leerArchivoComoBase64(archivo);
    setPreviewSrc(base64);
    setNombreArchivo(archivo.name);
    setForm(prev => ({ ...prev, imagen_referencia: base64 }));
  };

  const eliminarImagen = (e: React.MouseEvent) => {
    e.stopPropagation();
    setPreviewSrc(null);
    setNombreArchivo('');
    setErrorImagen(false);
    setForm(prev => ({ ...prev, imagen_referencia: undefined }));
    if (inputFileRef.current) inputFileRef.current.value = '';
  };

  const handleSubmit = () => {
    if (!form.cedula_barbero || !form.id_especialidad || !form.fecha || !form.hora) {
      alert('Por favor completa todos los campos requeridos.');
      return;
    }
    agregarCita(form);
    setExito(true);
    setForm(FORM_INICIAL);
    setPreviewSrc(null);
    setNombreArchivo('');
    setTimeout(() => setExito(false), 3000);
  };

  return (
    <div className="row g-4">

      {/* Info lateral */}
      <div className="col-lg-4">
        <div className="seccion-etiqueta">Agenda fácil</div>
        <h2 className="seccion-titulo">
          Reserva tu <span className="acento">cita</span>
        </h2>
        <SeparadorDorado />
        <p className="seccion-subtitulo">
          Selecciona tu barbero, servicio, fecha y hora. Confirma al instante.
        </p>
        <div className="d-flex flex-column gap-2 mt-3">
          {['Confirmación inmediata', 'Cancelación sin costo', 'Historial de citas'].map(txt => (
            <div key={txt} style={{ display: 'flex', alignItems: 'center', gap: '.6rem' }}>
              <i className="bi bi-check-circle-fill" style={{ color: 'var(--dorado)' }} />
              <span style={{ fontSize: '.85rem', color: 'var(--gris)' }}>{txt}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Formulario */}
      <div className="col-lg-8">
        <div className="tarjeta-servicio" style={{ height: 'auto' }}>
          <h5 style={{ fontFamily: "'Playfair Display', serif", color: 'var(--claro)', marginBottom: '1.4rem' }}>
            Nueva reservación
          </h5>

          <div className="row g-3">
            {/* Barbero */}
            <div className="col-md-6">
              <Label>Barbero</Label>
              <Select name="cedula_barbero" value={form.cedula_barbero} onChange={handleChange}>
                <option value="">Seleccionar barbero</option>
                {cuentasBarbero.map(b => (
                  <option key={b.cedula_barbero} value={b.cedula_barbero}>
                    {b.nombre} {b.apellido}
                  </option>
                ))}
              </Select>
            </div>

            {/* Especialidad */}
            <div className="col-md-6">
              <Label>Especialidad</Label>
              <Select name="id_especialidad" value={form.id_especialidad} onChange={handleChange}>
                <option value="">Seleccionar servicio</option>
                {especialidades.map(e => (
                  <option key={e.id_especialidad} value={e.id_especialidad}>
                    {e.especialidad} ({e.tiempo_estimado} min)
                  </option>
                ))}
              </Select>
            </div>

            {/* Fecha */}
            <div className="col-md-6">
              <Label>Fecha</Label>
              <Input type="date" name="fecha" value={form.fecha} onChange={handleChange} />
            </div>

            {/* Hora */}
            <div className="col-md-6">
              <Label>Hora</Label>
              <Select name="hora" value={form.hora} onChange={handleChange}>
                <option value="">Seleccionar hora</option>
                {horasDisponibles.map(h => (
                  <option key={h} value={h}>{h}</option>
                ))}
              </Select>
            </div>

            {/* Imagen de referencia */}
            <div className="col-12">
              <Label>Imagen de referencia (opcional)</Label>
              <input
                ref={inputFileRef}
                type="file"
                accept=".jpg,.jpeg,.png,.webp"
                style={{ display: 'none' }}
                onChange={handleImagen}
              />
              <ZonaImagen
                previewSrc={previewSrc}
                nombreArchivo={nombreArchivo}
                onClick={() => inputFileRef.current?.click()}
                onEliminar={eliminarImagen}
              />
              {errorImagen && (
                <div style={{ marginTop: '.4rem', fontSize: '.78rem', color: '#dc5050' }}>
                  <i className="bi bi-exclamation-circle me-1" />
                  Solo se permiten imágenes JPG, JPEG, PNG o WEBP.
                </div>
              )}
            </div>

            {/* Botón confirmar */}
            <div className="col-12 mt-1">
              <Button onClick={handleSubmit}>
                <i className="bi bi-calendar2-check me-2" />Confirmar cita
              </Button>
            </div>
          </div>

          {exito && <AlertaExito mensaje="¡Cita reservada con éxito! Te esperamos." />}
        </div>
      </div>
    </div>
  );
}

// ── Sub-componente: zona de imagen ─────────────────────────
function ZonaImagen({ previewSrc, nombreArchivo, onClick, onEliminar }: {
  previewSrc:    string | null;
  nombreArchivo: string;
  onClick:       () => void;
  onEliminar:    (e: React.MouseEvent) => void;
}) {
  return (
    <div
      onClick={onClick}
      style={{
        border:       '1px dashed rgba(201,168,76,.35)',
        borderRadius: '3px',
        padding:      '1.4rem',
        textAlign:    'center',
        cursor:       'pointer',
        background:   'var(--oscuro2)',
        transition:   'border-color .2s, background .2s',
      }}
      onMouseOver={e => {
        (e.currentTarget as HTMLDivElement).style.borderColor = 'var(--dorado)';
        (e.currentTarget as HTMLDivElement).style.background  = 'rgba(201,168,76,.05)';
      }}
      onMouseOut={e => {
        (e.currentTarget as HTMLDivElement).style.borderColor = 'rgba(201,168,76,.35)';
        (e.currentTarget as HTMLDivElement).style.background  = 'var(--oscuro2)';
      }}
    >
      {previewSrc ? (
        <>
          <img src={previewSrc} alt="Referencia" style={{ maxHeight: 140, maxWidth: '100%', borderRadius: 3, objectFit: 'cover' }} />
          <div style={{ marginTop: '.6rem', fontSize: '.78rem', color: 'var(--dorado)' }}>{nombreArchivo}</div>
          <button className="btn-nav" style={{ marginTop: '.5rem', fontSize: '.7rem', padding: '.25rem .7rem' }} onClick={onEliminar}>
            <i className="bi bi-x me-1" />Quitar imagen
          </button>
        </>
      ) : (
        <>
          <i className="bi bi-image" style={{ fontSize: '1.8rem', color: 'rgba(201,168,76,.4)', display: 'block', marginBottom: '.5rem' }} />
          <span style={{ fontSize: '.82rem', color: 'var(--gris)' }}>Haz clic para subir una imagen de referencia</span>
          <br />
          <span style={{ fontSize: '.72rem', color: 'rgba(136,136,136,.5)', letterSpacing: '.08em' }}>JPG · JPEG · PNG · WEBP</span>
        </>
      )}
    </div>
  );
}
