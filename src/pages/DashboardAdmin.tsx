// ══════════════════════════════════════════════════════════
//  PÁGINA DASHBOARD SUPERADMIN — StyleUp
//  Métricas/reportes y registro de barberos
// ══════════════════════════════════════════════════════════

import { useState } from "react";
import { useApp } from "../context/AppContext";
import { Avatar } from "../components/ui";
import { fechaActualLegible } from "../utils/helpers";
import PanelMetricas from "../components/panels/admin/PanelMetricas";
import PanelCrearBarbero from "../components/panels/admin/PanelCrearBarbero";
import PanelBarberos from "../components/panels/admin/PanelBarberos";
import PanelClientesFieles from "../components/panels/admin/PanelClientesFieles";

type PanelAdminId = "metricas" | "barberos" | "clientes" | "crearBarbero";

interface NavItemAdmin {
  panel: PanelAdminId;
  icono: string;
  label: string;
}

const navAdmin: NavItemAdmin[] = [
  { panel: "metricas", icono: "bi-graph-up", label: "Métricas y reportes" },
  { panel: "barberos", icono: "bi-scissors", label: "Barberos" },
  { panel: "clientes", icono: "bi-star", label: "Clientes fieles" },
  { panel: "crearBarbero", icono: "bi-person-plus", label: "Crear barbero" },
];

const titulos: Record<PanelAdminId, { texto: string; acento: string }> = {
  metricas: { texto: "Métricas y", acento: "reportes" },
  barberos: { texto: "Gestión de", acento: "barberos" },
  clientes: { texto: "Clientes", acento: "fieles" },
  crearBarbero: { texto: "Nuevo", acento: "barbero" },
};

export default function DashboardAdmin() {
  const { sesion, logout } = useApp();
  const [panelActivo, setPanelActivo] = useState<PanelAdminId>("metricas");
  const [sidebarAbierto, setSidebarAbierto] = useState(false);

  const correo =
    sesion && "correo" in sesion.usuario ? sesion.usuario.correo : "";

  const handleNav = (panel: PanelAdminId) => {
    setPanelActivo(panel);
    setSidebarAbierto(false);
  };

  return (
    <>
      {/* Overlay móvil */}
      <div
        className={`overlay-sidebar ${sidebarAbierto ? "activo" : ""}`}
        onClick={() => setSidebarAbierto(false)}
      />

      {/* Sidebar */}
      <aside className={`sidebar ${sidebarAbierto ? "abierto" : ""}`}>
        <div className="sidebar-header">
          <a className="navbar-brand" href="/">
            Style<span>Up</span>
          </a>
        </div>

        <div className="sidebar-usuario">
          <Avatar inicial="A" />
          <div style={{ overflow: "hidden" }}>
            <div
              style={{
                fontSize: ".88rem",
                fontWeight: 500,
                color: "var(--claro)",
                whiteSpace: "nowrap",
                overflow: "hidden",
                textOverflow: "ellipsis",
              }}
            >
              Superadmin
            </div>
            <div
              style={{
                fontSize: ".72rem",
                color: "var(--gris)",
                whiteSpace: "nowrap",
                overflow: "hidden",
                textOverflow: "ellipsis",
              }}
            >
              {correo}
            </div>
          </div>
        </div>

        <nav className="sidebar-nav">
          <div className="nav-seccion-label">Administración</div>
          {navAdmin.map((item) => (
            <div
              key={item.panel}
              className={`nav-item-dash ${panelActivo === item.panel ? "activo" : ""}`}
              onClick={() => handleNav(item.panel)}
            >
              <i className={`bi ${item.icono}`} />
              {item.label}
            </div>
          ))}
        </nav>

        <div className="sidebar-footer">
          <button className="btn-cerrar-sesion" onClick={logout}>
            <i className="bi bi-box-arrow-left" /> Cerrar sesión
          </button>
        </div>
      </aside>

      {/* Contenido */}
      <main className="main-content">
        <div className="topbar">
          <div className="d-flex align-items-center gap-3">
            <button
              className="btn-menu-movil"
              onClick={() => setSidebarAbierto(true)}
            >
              <i className="bi bi-list" />
            </button>
            <div>
              <div
                style={{
                  fontFamily: "'Playfair Display', serif",
                  fontSize: "1.5rem",
                  fontWeight: 700,
                  color: "var(--claro)",
                }}
              >
                {titulos[panelActivo].texto}{" "}
                <span style={{ color: "var(--dorado)", fontStyle: "italic" }}>
                  {titulos[panelActivo].acento}
                </span>
              </div>
              <div style={{ fontSize: ".78rem", color: "var(--gris)" }}>
                {fechaActualLegible()}
              </div>
            </div>
          </div>
          <Avatar inicial="A" />
        </div>

        <div className="panel activo">
          {panelActivo === "metricas" && <PanelMetricas />}
          {panelActivo === "barberos" && <PanelBarberos />}
          {panelActivo === "clientes" && <PanelClientesFieles />}
          {panelActivo === "crearBarbero" && <PanelCrearBarbero />}
        </div>
      </main>
    </>
  );
}
