// ══════════════════════════════════════════════════════════
//  PANEL ADMIN: CLIENTES FIELES — StyleUp
//  Ranking de clientes por citas completadas
// ══════════════════════════════════════════════════════════

import { useCallback, useEffect, useState } from "react";
import { reportesService } from "../../../api/services";
import type { ClienteFiel } from "../../../api/services/reportesService";
import { getMensajeError } from "../../../utils/errores";
import { formatearFecha } from "../../../utils/helpers";
import { Button, EtiquetaSeccion } from "../../ui";

function medalla(posicion: number) {
  if (posicion === 0) return "🥇";
  if (posicion === 1) return "🥈";
  if (posicion === 2) return "🥉";
  return `${posicion + 1}`;
}

export default function PanelClientesFieles() {
  const [clientes, setClientes] = useState<ClienteFiel[]>([]);
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState("");

  const cargar = useCallback(async () => {
    setCargando(true);
    setError("");
    try {
      setClientes(await reportesService.obtenerClientesFieles(20));
    } catch (err) {
      setError(getMensajeError(err));
    } finally {
      setCargando(false);
    }
  }, []);

  useEffect(() => {
    cargar();
  }, [cargar]);

  return (
    <div className="tarjeta-servicio" style={{ height: "auto" }}>
      <div className="d-flex justify-content-between align-items-center mb-3">
        <EtiquetaSeccion>
          Clientes más fieles · por citas completadas
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

      <div style={{ overflowX: "auto" }}>
        <table className="tabla-citas">
          <thead>
            <tr>
              <th>#</th>
              <th>Cliente</th>
              <th>Contacto</th>
              <th>Completadas</th>
              <th>Canceladas</th>
              <th>Total citas</th>
              <th>Última cita</th>
            </tr>
          </thead>
          <tbody>
            {cargando ? (
              <tr>
                <td colSpan={7} style={{ color: "var(--gris)", textAlign: "center", padding: "1.5rem" }}>
                  Cargando clientes...
                </td>
              </tr>
            ) : clientes.length === 0 ? (
              <tr>
                <td colSpan={7} style={{ color: "var(--gris)", textAlign: "center", padding: "1.5rem" }}>
                  Aún no hay clientes con citas
                </td>
              </tr>
            ) : (
              clientes.map((c, i) => (
                <tr key={c.cedula_cliente}>
                  <td style={{ fontSize: "1rem" }}>{medalla(i)}</td>
                  <td>
                    <div style={{ color: "var(--claro)" }}>
                      {c.nombre} {c.apellido}
                    </div>
                    <div style={{ fontSize: ".72rem", color: "var(--gris)" }}>
                      CC {c.cedula_cliente}
                    </div>
                  </td>
                  <td>
                    <div style={{ fontSize: ".78rem" }}>{c.correo}</div>
                    <div style={{ fontSize: ".72rem", color: "var(--gris)" }}>
                      {c.telefono}
                    </div>
                  </td>
                  <td style={{ color: "var(--dorado)", fontWeight: 600 }}>
                    {c.citas.completadas}
                  </td>
                  <td>{c.citas.canceladas}</td>
                  <td>{c.citas.total}</td>
                  <td>
                    {c.ultima_cita
                      ? formatearFecha(c.ultima_cita.split("T")[0])
                      : "—"}
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
