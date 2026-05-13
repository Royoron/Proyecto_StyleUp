import { useState } from "react";
import { useApp } from "../../context/AppContext";
import type { DiaSemana, FranjaHoraria } from "../../types";

interface RegistroBarberoModalProps {
  onClose: () => void;
  onAbrirLogin: () => void;
  onAbrirRegistroCliente: () => void;
  onRegistroExitoso: () => void;
}

const diasLaborales: DiaSemana[] = [
  "Lunes",
  "Martes",
  "Miércoles",
  "Jueves",
  "Viernes",
];

export default function RegistroBarberoModal({
  onClose,
  onAbrirLogin,
  onAbrirRegistroCliente,
  onRegistroExitoso,
}: RegistroBarberoModalProps) {
  const { registrarBarbero, especialidades } = useApp();
  const [form, setForm] = useState({
    nombre: "",
    apellido: "",
    correo: "",
    telefono: "",
    cedula: "",
    password: "",
    id_especialidad: 0,
    hora_inicio: "08:00",
    hora_fin: "17:00",
  });
  const [confirmar, setConfirmar] = useState("");
  const [error, setError] = useState("");
  const [cargando, setCargando] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => {
    const { name, value } = e.target;
    if (name === "id_especialidad") {
      setForm((prev) => ({ ...prev, id_especialidad: Number(value) }));
    } else {
      setForm((prev) => ({ ...prev, [name]: value }));
    }
    setError("");
  };

  const crearHorarioGeneral = (): FranjaHoraria[] =>
    diasLaborales.map((dia) => ({
      dia,
      hora_inicio: form.hora_inicio,
      hora_fin: form.hora_fin,
    }));

  const handleSubmit = async () => {
    const {
      nombre,
      apellido,
      correo,
      cedula,
      password,
      id_especialidad,
      hora_inicio,
      hora_fin,
    } = form;

    if (
      !nombre ||
      !apellido ||
      !correo ||
      !cedula ||
      !password ||
      !id_especialidad
    ) {
      setError("Completa todos los campos obligatorios.");
      return;
    }

    if (password !== confirmar) {
      setError("Las contraseñas no coinciden.");
      return;
    }

    if (hora_inicio >= hora_fin) {
      setError("La hora de inicio debe ser menor que la hora de fin.");
      return;
    }

    setCargando(true);
    const { ok, mensaje } = await registrarBarbero({
      nombre,
      apellido,
      correo,
      telefono: form.telefono,
      cedula,
      password,
      id_especialidad,
      horario: crearHorarioGeneral(),
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
      <div
        className="su-modal su-modal-lg"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="su-modal-header">
          <div className="su-modal-logo">
            Style<span>Up</span>
          </div>
          <button className="su-modal-close" onClick={onClose}>
            <i className="bi bi-x-lg" />
          </button>
        </div>

        <div className="su-modal-body">
          <h4 className="su-modal-titulo">Registro de barbero</h4>
          <p className="su-modal-sub">
            Crea tu perfil profesional y define un horario base.
          </p>

          <div className="rol-selector">
            <button
              className="rol-btn"
              type="button"
              onClick={onAbrirRegistroCliente}
            >
              <i className="bi bi-person-fill" /> Cliente
            </button>
            <button className="rol-btn activo" type="button">
              <i className="bi bi-scissors" /> Barbero
            </button>
          </div>

          <div className="row g-3">
            <div className="col-6">
              <label className="etiqueta-campo">Nombre *</label>
              <input
                className="campo-formulario"
                name="nombre"
                value={form.nombre}
                onChange={handleChange}
              />
            </div>
            <div className="col-6">
              <label className="etiqueta-campo">Apellido *</label>
              <input
                className="campo-formulario"
                name="apellido"
                value={form.apellido}
                onChange={handleChange}
              />
            </div>
            <div className="col-12">
              <label className="etiqueta-campo">Especialidad *</label>
              <select
                className="campo-formulario"
                name="id_especialidad"
                value={form.id_especialidad}
                onChange={handleChange}
              >
                <option value={0}>Seleccionar especialidad</option>
                {especialidades.map((e) => (
                  <option key={e.id_especialidad} value={e.id_especialidad}>
                    {e.especialidad}
                  </option>
                ))}
              </select>
            </div>
            <div className="col-6">
              <label className="etiqueta-campo">Correo *</label>
              <input
                className="campo-formulario"
                type="email"
                name="correo"
                value={form.correo}
                onChange={handleChange}
              />
            </div>
            <div className="col-6">
              <label className="etiqueta-campo">Teléfono</label>
              <input
                className="campo-formulario"
                name="telefono"
                value={form.telefono}
                onChange={handleChange}
              />
            </div>
            <div className="col-6">
              <label className="etiqueta-campo">Cédula *</label>
              <input
                className="campo-formulario"
                name="cedula"
                value={form.cedula}
                onChange={handleChange}
              />
            </div>
            <div className="col-6">
              <label className="etiqueta-campo">Días base</label>
              <input
                className="campo-formulario"
                value="Lunes a viernes"
                disabled
              />
            </div>
            <div className="col-6">
              <label className="etiqueta-campo">Hora inicio</label>
              <input
                className="campo-formulario"
                type="time"
                name="hora_inicio"
                value={form.hora_inicio}
                onChange={handleChange}
              />
            </div>
            <div className="col-6">
              <label className="etiqueta-campo">Hora fin</label>
              <input
                className="campo-formulario"
                type="time"
                name="hora_fin"
                value={form.hora_fin}
                onChange={handleChange}
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
              />
            </div>
            <div className="col-6">
              <label className="etiqueta-campo">Confirmar *</label>
              <input
                className="campo-formulario"
                type="password"
                value={confirmar}
                onChange={(e) => {
                  setConfirmar(e.target.value);
                  setError("");
                }}
              />
            </div>
          </div>

          {error && (
            <div className="su-alerta-error mt-3">
              <i className="bi bi-exclamation-circle me-2" />
              {error}
            </div>
          )}

          <button
            className="btn-principal w-100 su-btn-submit mt-3"
            onClick={handleSubmit}
            disabled={cargando}
          >
            {cargando ? (
              <>
                <i className="bi bi-arrow-repeat su-spin me-2" />
                Creando perfil...
              </>
            ) : (
              <>
                <i className="bi bi-scissors me-2" />
                Crear perfil de barbero
              </>
            )}
          </button>

          <p className="su-modal-pie">
            ¿Ya tienes cuenta?{" "}
            <span
              className="su-link"
              onClick={() => {
                onClose();
                onAbrirLogin();
              }}
            >
              Inicia sesión
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}
