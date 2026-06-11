// ══════════════════════════════════════════════════════════
//  PANEL ADMIN: GESTIÓN DE BARBEROS — StyleUp
//  Lista con métricas de citas, edición y eliminación
// ══════════════════════════════════════════════════════════

import { useCallback, useEffect, useState } from "react";
import { useApp } from "../../../context/AppContext";
import { barberosService, reportesService } from "../../../api/services";
import type { ReporteBarbero } from "../../../api/services/reportesService";
import { getMensajeError } from "../../../utils/errores";
import { AlertaExito, Button, EtiquetaSeccion, Input, Label, Select } from "../../ui";

type FormEdicion = {
  cedula_barbero: string;
  nombre: string;
  apellido: string;
  correo: string;
  telefono: string;
  id_especialidad: number;
};

export default function PanelBarberos() {
  const { especialidades } = useApp();
  const [barberos, setBarberos] = useState<ReporteBarbero[]>([]);
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState("");
  const [exito, setExito] = useState("");
  const [editando, setEditando] = useState<FormEdicion | null>(null);
  const [guardando, setGuardando] = useState(false);

  const cargar = useCallback(async () => {
    setCargando(true);
    setError("");
    try {
      setBarberos(await reportesService.obtenerReporteBarberos());
    } catch (err) {
      setError(getMensajeError(err));
    } finally {
      setCargando(false);
    }
  }, []);

  useEffect(() => {
    cargar();
  }, [cargar]);

  const iniciarEdicion = (b: ReporteBarbero) => {
    setExito("");
    setError("");
    setEditando({
      cedula_barbero: b.cedula_barbero,
      nombre: b.nombre,
      apellido: b.apellido,
      correo: b.correo,
      telefono: b.telefono,
      id_especialidad: b.id_especialidad,
    });
  };

  const handleEditChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => {
    const { name, value } = e.target;
    setEditando((prev) =>
      prev
        ? {
            ...prev,
            [name]: name === "id_especialidad" ? Number(value) : value,
          }
        : prev,
    );
  };

  const guardarEdicion = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!editando) return;

    if (!editando.nombre.trim() || !editando.apellido.trim() || !editando.correo) {
      setError("Nombre, apellido y correo son obligatorios.");
      return;
    }
    if (!editando.id_especialidad) {
      setError("Selecciona una especialidad.");
      return;
    }

    setGuardando(true);
    setError("");
    try {
      await barberosService.updateBarbero(editando.cedula_barbero, {
        nombre: editando.nombre.trim(),
        apellido: editando.apellido.trim(),
        correo: editando.correo,
        telefono: editando.telefono || "-",
        id_especialidad: editando.id_especialidad,
      });
      setExito(`Barbero ${editando.nombre} actualizado.`);
      setEditando(null);
      await cargar();
    } catch (err) {
      setError(getMensajeError(err));
    } finally {
      setGuardando(false);
    }
  };

  const eliminar = async (b: ReporteBarbero) => {
    if (
      !confirm(
        `¿Eliminar al barbero ${b.nombre} ${b.apellido}? Esta acción no se puede deshacer.`,
      )
    )
      return;

    setError("");
    setExito("");
    try {
      await barberosService.deleteBarbero(b.cedula_barbero);
      setExito(`Barbero ${b.nombre} ${b.apellido} eliminado.`);
      await cargar();
    } catch (err) {
      setError(getMensajeError(err));
    }
  };

  return (
    <>
      {/* Editor */}
      {editando && (
        <div className="tarjeta-servicio mb-4" style={{ height: "auto" }}>
          <EtiquetaSeccion>
            Editar barbero · {editando.cedula_barbero}
          </EtiquetaSeccion>
          <form onSubmit={guardarEdicion}>
            <div className="row g-3">
              <div className="col-md-6">
                <Label>Nombre</Label>
                <Input
                  name="nombre"
                  value={editando.nombre}
                  onChange={handleEditChange}
                />
              </div>
              <div className="col-md-6">
                <Label>Apellido</Label>
                <Input
                  name="apellido"
                  value={editando.apellido}
                  onChange={handleEditChange}
                />
              </div>
              <div className="col-md-6">
                <Label>Correo</Label>
                <Input
                  name="correo"
                  type="email"
                  value={editando.correo}
                  onChange={handleEditChange}
                />
              </div>
              <div className="col-md-6">
                <Label>Teléfono</Label>
                <Input
                  name="telefono"
                  value={editando.telefono}
                  onChange={handleEditChange}
                />
              </div>
              <div className="col-md-6">
                <Label>Especialidad</Label>
                <Select
                  name="id_especialidad"
                  value={editando.id_especialidad}
                  onChange={handleEditChange}
                >
                  {especialidades.map((e) => (
                    <option key={e.id_especialidad} value={e.id_especialidad}>
                      {e.especialidad}
                    </option>
                  ))}
                </Select>
              </div>
            </div>
            <div className="d-flex gap-2" style={{ marginTop: "1.2rem" }}>
              <Button type="submit" disabled={guardando}>
                <i className="bi bi-check2 me-2" />
                {guardando ? "Guardando..." : "Guardar cambios"}
              </Button>
              <Button variante="contorno" onClick={() => setEditando(null)}>
                Cancelar
              </Button>
            </div>
          </form>
        </div>
      )}

      {/* Tabla */}
      <div className="tarjeta-servicio" style={{ height: "auto" }}>
        <div className="d-flex justify-content-between align-items-center mb-3">
          <EtiquetaSeccion>
            Barberos · ordenados por citas atendidas
          </EtiquetaSeccion>
          <Button variante="nav" onClick={cargar} disabled={cargando}>
            <i className="bi bi-arrow-clockwise me-1" />
            Actualizar
          </Button>
        </div>

        {error && (
          <div className="su-alerta-error" style={{ marginBottom: "1rem" }}>
            <i className="bi bi-exclamation-circle me-2" />
            {error}
          </div>
        )}
        {exito && <AlertaExito mensaje={exito} />}

        <div style={{ overflowX: "auto" }}>
          <table className="tabla-citas">
            <thead>
              <tr>
                <th>Barbero</th>
                <th>Especialidad</th>
                <th>Contacto</th>
                <th>Atendidas</th>
                <th>Próximas</th>
                <th>Canceladas</th>
                <th>Total</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {cargando ? (
                <tr>
                  <td colSpan={8} style={{ color: "var(--gris)", textAlign: "center", padding: "1.5rem" }}>
                    Cargando barberos...
                  </td>
                </tr>
              ) : barberos.length === 0 ? (
                <tr>
                  <td colSpan={8} style={{ color: "var(--gris)", textAlign: "center", padding: "1.5rem" }}>
                    No hay barberos registrados
                  </td>
                </tr>
              ) : (
                barberos.map((b) => (
                  <tr key={b.cedula_barbero}>
                    <td>
                      <div style={{ color: "var(--claro)" }}>
                        {b.nombre} {b.apellido}
                      </div>
                      <div style={{ fontSize: ".72rem", color: "var(--gris)" }}>
                        CC {b.cedula_barbero}
                      </div>
                    </td>
                    <td>{b.especialidad}</td>
                    <td>
                      <div style={{ fontSize: ".78rem" }}>{b.correo}</div>
                      <div style={{ fontSize: ".72rem", color: "var(--gris)" }}>
                        {b.telefono}
                      </div>
                    </td>
                    <td style={{ color: "var(--dorado)", fontWeight: 600 }}>
                      {b.citas.completadas}
                    </td>
                    <td>{b.citasProximas}</td>
                    <td>{b.citas.canceladas}</td>
                    <td>{b.citas.total}</td>
                    <td style={{ whiteSpace: "nowrap" }}>
                      <button
                        className="btn-nav"
                        style={{ fontSize: ".7rem", padding: ".25rem .6rem", marginRight: ".4rem" }}
                        onClick={() => iniciarEdicion(b)}
                      >
                        <i className="bi bi-pencil me-1" />
                        Editar
                      </button>
                      <button
                        className="btn-nav"
                        style={{ fontSize: ".7rem", padding: ".25rem .6rem" }}
                        onClick={() => eliminar(b)}
                      >
                        <i className="bi bi-trash me-1" />
                        Eliminar
                      </button>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
