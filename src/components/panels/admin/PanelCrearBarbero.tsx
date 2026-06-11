// ══════════════════════════════════════════════════════════
//  PANEL ADMIN: CREAR BARBERO — StyleUp
// ══════════════════════════════════════════════════════════

import { useState } from "react";
import { useApp } from "../../../context/AppContext";
import { barberosService } from "../../../api/services";
import { getMensajeError } from "../../../utils/errores";
import { AlertaExito, Button, EtiquetaSeccion, Input, Label, Select } from "../../ui";

const formInicial = {
  cedula_barbero: "",
  nombre: "",
  apellido: "",
  correo: "",
  telefono: "",
  id_especialidad: 0,
  contrasena: "",
  confirmar: "",
};

export default function PanelCrearBarbero() {
  const { especialidades } = useApp();
  const [form, setForm] = useState(formInicial);
  const [error, setError] = useState("");
  const [exito, setExito] = useState("");
  const [cargando, setCargando] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: name === "id_especialidad" ? Number(value) : value,
    }));
    setError("");
    setExito("");
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const { cedula_barbero, nombre, apellido, correo, id_especialidad, contrasena, confirmar } = form;

    if (!cedula_barbero || !nombre || !apellido || !correo || !id_especialidad || !contrasena) {
      setError("Completa todos los campos obligatorios.");
      return;
    }
    if (!/^[0-9]{6,10}$/.test(cedula_barbero)) {
      setError("La cédula debe tener entre 6 y 10 dígitos numéricos.");
      return;
    }
    if (contrasena.length < 6) {
      setError("La contraseña debe tener al menos 6 caracteres.");
      return;
    }
    if (contrasena !== confirmar) {
      setError("Las contraseñas no coinciden.");
      return;
    }

    setCargando(true);
    try {
      const creado = await barberosService.createBarbero({
        cedula_barbero,
        nombre,
        apellido,
        correo,
        telefono: form.telefono || "-",
        id_especialidad,
        contrasena,
      });
      setExito(
        `Barbero ${creado.nombre} ${creado.apellido} creado correctamente (cédula ${creado.cedula_barbero}).`,
      );
      setForm(formInicial);
    } catch (err) {
      setError(getMensajeError(err));
    } finally {
      setCargando(false);
    }
  };

  return (
    <div className="tarjeta-servicio" style={{ height: "auto" }}>
      <EtiquetaSeccion>Registrar nuevo barbero</EtiquetaSeccion>
      <p style={{ fontSize: ".88rem", color: "var(--gris)", marginBottom: "1.2rem" }}>
        El barbero podrá iniciar sesión con su cédula y la contraseña asignada,
        y configurar su horario desde su propio panel.
      </p>

      <form onSubmit={handleSubmit}>
        <div className="row g-3">
          <div className="col-md-6">
            <Label>Cédula *</Label>
            <Input
              name="cedula_barbero"
              value={form.cedula_barbero}
              onChange={handleChange}
              placeholder="1234567890"
              inputMode="numeric"
            />
          </div>
          <div className="col-md-6">
            <Label>Especialidad *</Label>
            <Select
              name="id_especialidad"
              value={form.id_especialidad}
              onChange={handleChange}
            >
              <option value={0}>Selecciona una especialidad</option>
              {especialidades.map((e) => (
                <option key={e.id_especialidad} value={e.id_especialidad}>
                  {e.especialidad}
                </option>
              ))}
            </Select>
          </div>
          <div className="col-md-6">
            <Label>Nombre *</Label>
            <Input
              name="nombre"
              value={form.nombre}
              onChange={handleChange}
              placeholder="Nombre"
            />
          </div>
          <div className="col-md-6">
            <Label>Apellido *</Label>
            <Input
              name="apellido"
              value={form.apellido}
              onChange={handleChange}
              placeholder="Apellido"
            />
          </div>
          <div className="col-md-6">
            <Label>Correo *</Label>
            <Input
              name="correo"
              type="email"
              value={form.correo}
              onChange={handleChange}
              placeholder="barbero@correo.com"
            />
          </div>
          <div className="col-md-6">
            <Label>Teléfono</Label>
            <Input
              name="telefono"
              value={form.telefono}
              onChange={handleChange}
              placeholder="3000000000"
            />
          </div>
          <div className="col-md-6">
            <Label>Contraseña *</Label>
            <Input
              name="contrasena"
              type="password"
              value={form.contrasena}
              onChange={handleChange}
              placeholder="Mínimo 6 caracteres"
            />
          </div>
          <div className="col-md-6">
            <Label>Confirmar contraseña *</Label>
            <Input
              name="confirmar"
              type="password"
              value={form.confirmar}
              onChange={handleChange}
              placeholder="Repite la contraseña"
            />
          </div>
        </div>

        {error && (
          <div className="su-alerta-error" style={{ marginTop: "1rem" }}>
            <i className="bi bi-exclamation-circle me-2" />
            {error}
          </div>
        )}
        {exito && <AlertaExito mensaje={exito} />}

        <div style={{ marginTop: "1.4rem" }}>
          <Button type="submit" disabled={cargando}>
            {cargando ? (
              <>
                <i className="bi bi-arrow-repeat me-2" />
                Creando...
              </>
            ) : (
              <>
                <i className="bi bi-person-plus me-2" />
                Crear barbero
              </>
            )}
          </Button>
        </div>
      </form>
    </div>
  );
}
