// ══════════════════════════════════════════════════════════
//  APP — StyleUp
//  Configura el enrutador y envuelve todo con el contexto
// ══════════════════════════════════════════════════════════

import { BrowserRouter, Navigate, Routes, Route } from "react-router-dom";
import { AppProvider, useApp } from "./context/AppContext";
import GlobalAlert from "./components/ui/GlobalAlert";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import AdminLogin from "./pages/AdminLogin";
import Dashboard from "./pages/Dashboard";
import DashboardBarbero from "./pages/DashboardBarbero";
import DashboardAdmin from "./pages/DashboardAdmin";

function RutaProtegida({ children }: { children: React.ReactNode }) {
  const { sesion, sesionCargando } = useApp();

  if (sesionCargando) return null;

  if (!sesion) {
    return <Navigate to="/" replace />;
  }

  if (sesion.rol === "superadmin") {
    return <Navigate to="/admin" replace />;
  }

  return children;
}

function RutaAdmin() {
  const { sesion, sesionCargando } = useApp();

  if (sesionCargando) return null;

  if (sesion?.rol === "superadmin") return <DashboardAdmin />;

  return <AdminLogin />;
}

function DashboardPorRol() {
  const { sesion } = useApp();

  if (sesion?.rol === "superadmin") return <Navigate to="/admin" replace />;

  if (sesion?.rol === "barbero") return <DashboardBarbero />;

  return <Dashboard />;
}

export default function App() {
  return (
    <BrowserRouter>
      <AppProvider>
        <GlobalAlert />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/admin" element={<RutaAdmin />} />
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
