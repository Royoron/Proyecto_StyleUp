// ══════════════════════════════════════════════════════════
//  TOPBAR — StyleUp
// ══════════════════════════════════════════════════════════

import { useApp } from '../../context/AppContext';
import { Avatar } from '../ui';

import { getInicial, fechaActualLegible } from '../../utils/helpers';
import type { PanelId } from '../../types';

interface TopbarProps {
  onAbrirSidebar: () => void;
}

const titulosHTML: Record<PanelId, string> = {
  inicio:    'Panel de',
  reservar:  'Nueva',
  miscitas:  'Mis',
  historial: 'Historial de',
  perfil:    'Mi',
};

const accentosHTML: Record<PanelId, string> = {
  inicio:    'inicio',
  reservar:  'reserva',
  miscitas:  'citas',
  historial: 'citas',
  perfil:    'perfil',
};

export default function Topbar({ onAbrirSidebar }: TopbarProps) {
  const { cliente, panelActivo, navegarA } = useApp();

  return (
    <div className="topbar">
      <div className="d-flex align-items-center gap-3">

        {/* Botón menú móvil */}
        <button className="btn-menu-movil" onClick={onAbrirSidebar}>
          <i className="bi bi-list" />
        </button>

        {/* Título dinámico */}
        <div>
          <div style={{ fontFamily: "'Playfair Display', serif", fontSize: '1.5rem', fontWeight: 700, color: 'var(--claro)' }}>
            {titulosHTML[panelActivo]}{' '}
            <span style={{ color: 'var(--dorado)', fontStyle: 'italic' }}>
              {accentosHTML[panelActivo]}
            </span>
          </div>
          <div style={{ fontSize: '.78rem', color: 'var(--gris)' }}>
            {fechaActualLegible()}
          </div>
        </div>

      </div>

      {/* Avatar del usuario (navega a perfil) */}
      <Avatar
        inicial={getInicial(cliente.nombre)}
        onClick={() => navegarA('perfil')}
        style={{ cursor: 'pointer' }}
      />
    </div>
  );
}