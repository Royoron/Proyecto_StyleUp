// ══════════════════════════════════════════════════════════
//  PANEL ADMIN: MÉTRICAS Y REPORTES — StyleUp
// ══════════════════════════════════════════════════════════

import { useCallback, useEffect, useState } from "react";
import { reportesService } from "../../../api/services";
import type { MetricasReporte } from "../../../api/services/reportesService";
import { getMensajeError } from "../../../utils/errores";
import { Badge, Button, EtiquetaSeccion } from "../../ui";

function TarjetaTotal({
  icono,
  etiqueta,
  valor,
}: {
  icono: string;
  etiqueta: string;
  valor: number;
}) {
  return (
    <div className="col-6 col-lg-3">
      <div className="tarjeta-servicio" style={{ height: "auto", textAlign: "center" }}>
        <i
          className={`bi ${icono}`}
          style={{ fontSize: "1.6rem", color: "var(--dorado)" }}
        />
        <div
          style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: "2rem",
            fontWeight: 700,
            color: "var(--claro)",
            lineHeight: 1.2,
          }}
        >
          {valor}
        </div>
        <div style={{ fontSize: ".78rem", color: "var(--gris)" }}>{etiqueta}</div>
      </div>
    </div>
  );
}

export default function PanelMetricas() {
  const [metricas, setMetricas] = useState<MetricasReporte | null>(null);
  const [error, setError] = useState("");
  const [cargando, setCargando] = useState(true);

  const cargar = useCallback(async () => {
    setCargando(true);
    setError("");
    try {
      setMetricas(await reportesService.obtenerMetricas());
    } catch (err) {
      setError(getMensajeError(err));
    } finally {
      setCargando(false);
    }
  }, []);

  useEffect(() => {
    cargar();
  }, [cargar]);

  if (cargando && !metricas) {
    return (
      <div className="tarjeta-servicio" style={{ height: "auto", textAlign: "center" }}>
        <span style={{ color: "var(--gris)" }}>Cargando métricas...</span>
      </div>
    );
  }

  return (
    <>
      <div className="d-flex justify-content-between align-items-center mb-3">
        <EtiquetaSeccion>Resumen general</EtiquetaSeccion>
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

      {metricas && (
        <>
          {/* Totales */}
          <div className="row g-3 mb-4">
            <TarjetaTotal icono="bi-people" etiqueta="Clientes" valor={metricas.totales.clientes} />
            <TarjetaTotal icono="bi-scissors" etiqueta="Barberos" valor={metricas.totales.barberos} />
            <TarjetaTotal icono="bi-calendar3" etiqueta="Citas totales" valor={metricas.totales.citas} />
            <TarjetaTotal icono="bi-calendar-check" etiqueta="Citas próximas" valor={metricas.totales.citasProximas} />
          </div>

          <div className="row g-4">
            {/* Citas por estado */}
            <div className="col-lg-4">
              <div className="tarjeta-servicio" style={{ height: "auto" }}>
                <EtiquetaSeccion>Citas por estado</EtiquetaSeccion>
                <table className="tabla-citas">
                  <thead>
                    <tr>
                      <th>Estado</th>
                      <th>Total</th>
                    </tr>
                  </thead>
                  <tbody>
                    {metricas.citasPorEstado.length === 0 ? (
                      <tr>
                        <td colSpan={2} style={{ color: "var(--gris)", textAlign: "center" }}>
                          Sin datos
                        </td>
                      </tr>
                    ) : (
                      metricas.citasPorEstado.map((fila) => (
                        <tr key={fila.estado}>
                          <td>
                            <Badge estado={fila.estado} />
                          </td>
                          <td>{fila.total}</td>
                        </tr>
                      ))
                    )}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Citas por especialidad */}
            <div className="col-lg-4">
              <div className="tarjeta-servicio" style={{ height: "auto" }}>
                <EtiquetaSeccion>Citas por servicio</EtiquetaSeccion>
                <table className="tabla-citas">
                  <thead>
                    <tr>
                      <th>Servicio</th>
                      <th>Total</th>
                    </tr>
                  </thead>
                  <tbody>
                    {metricas.citasPorEspecialidad.length === 0 ? (
                      <tr>
                        <td colSpan={2} style={{ color: "var(--gris)", textAlign: "center" }}>
                          Sin datos
                        </td>
                      </tr>
                    ) : (
                      metricas.citasPorEspecialidad.map((fila) => (
                        <tr key={fila.id_especialidad}>
                          <td>{fila.especialidad}</td>
                          <td>{fila.total}</td>
                        </tr>
                      ))
                    )}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Citas por barbero */}
            <div className="col-lg-4">
              <div className="tarjeta-servicio" style={{ height: "auto" }}>
                <EtiquetaSeccion>Citas por barbero</EtiquetaSeccion>
                <table className="tabla-citas">
                  <thead>
                    <tr>
                      <th>Barbero</th>
                      <th>Total</th>
                    </tr>
                  </thead>
                  <tbody>
                    {metricas.citasPorBarbero.length === 0 ? (
                      <tr>
                        <td colSpan={2} style={{ color: "var(--gris)", textAlign: "center" }}>
                          Sin datos
                        </td>
                      </tr>
                    ) : (
                      metricas.citasPorBarbero.map((fila) => (
                        <tr key={fila.cedula_barbero}>
                          <td>{fila.barbero}</td>
                          <td>{fila.total}</td>
                        </tr>
                      ))
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
}
