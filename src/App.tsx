// ══════════════════════════════════════════════════════════
//  APP — StyleUp
//  Configura el enrutador y envuelve todo con el contexto
// ══════════════════════════════════════════════════════════

import { BrowserRouter, Navigate, Routes, Route } from 'react-router-dom';
import { AppProvider, useApp } from './context/AppContext';
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import DashboardBarbero from './pages/DashboardBarbero';

function RutaProtegida({ children }: { children: React.ReactNode }) {
  const { sesion } = useApp();

  if (!sesion) {
    return <Navigate to="/" replace />;
  }

  return children;
}

function DashboardPorRol() {
  const { sesion } = useApp();

  if (sesion?.rol === 'barbero') return <DashboardBarbero />;

  return <Dashboard />;
}

export default function App() {
  return (
    <BrowserRouter>
      <AppProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/dashboard"
            element={
              <RutaProtegida>
                <DashboardPorRol />
              </RutaProtegida>
            }
          />
        </Routes>
      </AppProvider>
    </BrowserRouter>
  );
}
