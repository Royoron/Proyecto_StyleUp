// ══════════════════════════════════════════════════════════
//  PÁGINA DASHBOARD — StyleUp
//  Orquesta sidebar, topbar y paneles
// ══════════════════════════════════════════════════════════

import { useState } from 'react';
import Sidebar from '../components/layout/Sidebar';
import Topbar  from '../components/layout/Topbar';
import PanelInicio   from '../components/panels/Inicio';
import PanelReservar from '../components/panels/Reservar';
import { PanelMisCitas, PanelHistorial } from '../components/panels/Citas';
import PanelPerfil   from  '../components/panels/Perfil';
import { useApp } from '../context/AppContext';

export default function Dashboard() {
  const { panelActivo } = useApp();
  const [sidebarAbierto, setSidebarAbierto] = useState(false);

  return (
    <>
      <Sidebar
        abierto={sidebarAbierto}
        onCerrar={() => setSidebarAbierto(false)}
      />

      <main className="main-content">
        <Topbar onAbrirSidebar={() => setSidebarAbierto(true)} />

        {/* Paneles — solo el activo se renderiza */}
        <div className={`panel ${panelActivo === 'inicio'    ? 'activo' : ''}`}>
          {panelActivo === 'inicio'    && <PanelInicio />}
        </div>
        <div className={`panel ${panelActivo === 'reservar'  ? 'activo' : ''}`}>
          {panelActivo === 'reservar'  && <PanelReservar />}
        </div>
        <div className={`panel ${panelActivo === 'miscitas'  ? 'activo' : ''}`}>
          {panelActivo === 'miscitas'  && <PanelMisCitas />}
        </div>
        <div className={`panel ${panelActivo === 'historial' ? 'activo' : ''}`}>
          {panelActivo === 'historial' && <PanelHistorial />}
        </div>
        <div className={`panel ${panelActivo === 'perfil'    ? 'activo' : ''}`}>
          {panelActivo === 'perfil'    && <PanelPerfil />}
        </div>
      </main>
    </>
  );
}
