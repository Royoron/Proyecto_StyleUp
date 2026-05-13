// ══════════════════════════════════════════════════════════
//  PANEL MIS CITAS — StyleUp
// ══════════════════════════════════════════════════════════

import { useApp } from "../../context/AppContext";
import { Badge, Button, EtiquetaSeccion } from "../ui";
import {
  getNombreEspecialidad,
  getNombreBarbero,
  formatearFecha,
} from "../../utils/helpers";

export function PanelMisCitas() {
  const { citas, cancelarCita, navegarA, barberos, especialidades } = useApp();

  const handleCancelar = (idCita: string) => {
    if (confirm("¿Deseas cancelar esta cita?")) {
      cancelarCita(idCita);
    }
  };

  return (
    <div className="tarjeta-servicio" style={{ height: "auto" }}>
      <div className="d-flex justify-content-between align-items-center mb-3">
        <EtiquetaSeccion>Citas programadas</EtiquetaSeccion>
        <Button variante="nav" onClick={() => navegarA("reservar")}>
          <i className="bi bi-plus me-1" />
          Nueva cita
        </Button>
      </div>

      <table className="tabla-citas">
        <thead>
          <tr>
            <th>Servicio</th>
            <th>Barbero</th>
            <th>Fecha</th>
            <th>Hora</th>
            <th>Estado</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {citas.length === 0 ? (
            <tr>
              <td
                colSpan={6}
                style={{
                  color: "var(--gris)",
                  textAlign: "center",
                  padding: "1.5rem",
                }}
              >
                No tienes citas activas
              </td>
            </tr>
          ) : (
            citas.map((cita) => (
              <tr key={cita.id_cita}>
                <td>
                  {getNombreEspecialidad(cita.id_especialidad, especialidades)}
                </td>
                <td>{getNombreBarbero(cita.cedula_barbero, barberos)}</td>
                <td>{formatearFecha(cita.fecha)}</td>
                <td>{cita.hora}</td>
                <td>
                  <Badge estado={cita.estado} />
                </td>
                <td>
                  <button
                    className="btn-nav"
                    style={{ fontSize: ".7rem", padding: ".25rem .6rem" }}
                    onClick={() => handleCancelar(cita.id_cita)}
                  >
                    Cancelar
                  </button>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}

// ══════════════════════════════════════════════════════════
//  PANEL HISTORIAL — StyleUp
// ══════════════════════════════════════════════════════════

export function PanelHistorial() {
  const { historial, barberos, especialidades } = useApp();

  return (
    <div className="tarjeta-servicio" style={{ height: "auto" }}>
      <EtiquetaSeccion>Historial completo</EtiquetaSeccion>
      <table className="tabla-citas">
        <thead>
          <tr>
            <th>Servicio</th>
            <th>Barbero</th>
            <th>Fecha</th>
            <th>Estado</th>
          </tr>
        </thead>
        <tbody>
          {historial.map((h) => (
            <tr key={h.id_cita}>
              <td>
                {getNombreEspecialidad(h.id_especialidad, especialidades)}
              </td>
              <td>{getNombreBarbero(h.cedula_barbero, barberos)}</td>
              <td>{formatearFecha(h.fecha)}</td>
              <td>
                <Badge estado={h.estado} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
