// ══════════════════════════════════════════════════════════
//  SIDEBAR — StyleUp
// ══════════════════════════════════════════════════════════

import { Avatar } from '../ui';
import { useApp } from '../../context/AppContext';
import { getInicial } from '../../utils/helpers';
import type { PanelId } from  '../../types';

interface SidebarProps {
  abierto:  boolean;
  onCerrar: () => void;
}

interface NavItem {
  panel: PanelId;
  icono: string;
  label: string;
}

const navPrincipal: NavItem[] = [
  { panel: 'inicio',   icono: 'bi-grid-1x2',      label: 'Inicio'       },
];

const navCitas: NavItem[] = [
  { panel: 'reservar', icono: 'bi-calendar-plus',  label: 'Nueva reserva' },
  { panel: 'miscitas', icono: 'bi-calendar-check', label: 'Mis citas'     },
  { panel: 'historial',icono: 'bi-clock-history',  label: 'Historial'     },
];

const navCuenta: NavItem[] = [
  { panel: 'perfil',   icono: 'bi-person',         label: 'Mi perfil'    },
];

export default function Sidebar({ abierto, onCerrar }: SidebarProps) {
  const { cliente, panelActivo, navegarA, logout } = useApp();

  const handleNav = (panel: PanelId) => {
    navegarA(panel);
    onCerrar();
  };

  return (
    <>
      {/* Overlay móvil */}
      <div
        className={`overlay-sidebar ${abierto ? 'activo' : ''}`}
        onClick={onCerrar}
      />

      <aside className={`sidebar ${abierto ? 'abierto' : ''}`}>

        {/* Logo */}
        <div className="sidebar-header">
          <a className="navbar-brand" href="/">
            Style<span>Up</span>
          </a>
        </div>

        {/* Info usuario */}
        <div className="sidebar-usuario">
          <Avatar inicial={getInicial(cliente.nombre)} />
          <div style={{ overflow: 'hidden' }}>
            <div style={{ fontSize: '.88rem', fontWeight: 500, color: 'var(--claro)', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
              {cliente.nombre} {cliente.apellido}
            </div>
            <div style={{ fontSize: '.72rem', color: 'var(--gris)', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
              {cliente.correo}
            </div>
          </div>
        </div>

        {/* Navegación */}
        <nav className="sidebar-nav">
          <NavSeccion label="Principal" items={navPrincipal}  panelActivo={panelActivo} onNav={handleNav} />
          <NavSeccion label="Citas"     items={navCitas}      panelActivo={panelActivo} onNav={handleNav} />
          <NavSeccion label="Cuenta"    items={navCuenta}     panelActivo={panelActivo} onNav={handleNav} />
        </nav>

        {/* Footer */}
        <div className="sidebar-footer">
          <button className="btn-cerrar-sesion" onClick={logout}>
            <i className="bi bi-box-arrow-left" /> Cerrar sesión
          </button>
        </div>

      </aside>
    </>
  );
}

// ── Sub-componente: sección de nav ─────────────────────────
function NavSeccion({ label, items, panelActivo, onNav }: {
  label:       string;
  items:       NavItem[];
  panelActivo: PanelId;
  onNav:       (p: PanelId) => void;
}) {
  return (
    <>
      <div className="nav-seccion-label">{label}</div>
      {items.map(item => (
        <div
          key={item.panel}
          className={`nav-item-dash ${panelActivo === item.panel ? 'activo' : ''}`}
          onClick={() => onNav(item.panel)}
        >
          <i className={`bi ${item.icono}`} />
          {item.label}
        </div>
      ))}
    </>
  );
}
