// ══════════════════════════════════════════════════════════
//  PANEL INICIO — StyleUp
// ══════════════════════════════════════════════════════════

import { useApp } from "../../context/AppContext";
import { Badge, Button, EtiquetaSeccion } from "../ui";
import {
  getNombreEspecialidad,
  getNombreBarbero,
  formatearFecha,
} from "../../utils/helpers";

export default function PanelInicio() {
  const { citas, navegarA, barberos, especialidades } = useApp();

  return (
    <div className="row g-4">
      {/* Tabla próximas citas */}
      <div className="col-lg-7">
        <div className="tarjeta-servicio" style={{ height: "auto" }}>
          <EtiquetaSeccion>Próximas citas</EtiquetaSeccion>
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
              {citas.length === 0 ? (
                <tr>
                  <td
                    colSpan={4}
                    style={{
                      color: "var(--gris)",
                      textAlign: "center",
                      padding: "1.5rem",
                    }}
                  >
                    No tienes citas próximas
                  </td>
                </tr>
              ) : (
                citas.map((cita) => (
                  <tr key={cita.id_cita}>
                    <td>
                      {getNombreEspecialidad(
                        cita.id_especialidad,
                        especialidades,
                      )}
                    </td>
                    <td>{getNombreBarbero(cita.cedula_barbero, barberos)}</td>
                    <td>
                      {formatearFecha(cita.fecha)} · {cita.hora}
                    </td>
                    <td>
                      <Badge estado={cita.estado} />
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* Acción rápida */}
      <div className="col-lg-5">
        <div className="tarjeta-servicio" style={{ height: "auto" }}>
          <EtiquetaSeccion>Acción rápida</EtiquetaSeccion>
          <p
            style={{
              fontSize: ".88rem",
              color: "var(--gris)",
              lineHeight: 1.65,
              marginBottom: "1.2rem",
            }}
          >
            ¿Listo para tu próxima visita? Agenda en segundos con tu barbero
            favorito.
          </p>
          <Button
            fullWidth
            onClick={() => navegarA("reservar")}
            className="mb-2"
          >
            <i className="bi bi-calendar-plus me-2" />
            Nueva reserva
          </Button>
          <Button
            variante="contorno"
            fullWidth
            onClick={() => navegarA("historial")}
          >
            Ver historial completo
          </Button>
        </div>
      </div>
    </div>
  );
}
