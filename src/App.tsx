// ══════════════════════════════════════════════════════════
//  APP — StyleUp
//  Configura el enrutador y envuelve todo con el contexto
// ══════════════════════════════════════════════════════════

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AppProvider } from './context/AppContext';
import Dashboard from './pages/Dashboard';
// import Home from './pages/Home'; // ← agregar cuando se migre index.html

export default function App() {
  return (
    <BrowserRouter>
      <AppProvider>
        <Routes>
          {/* Ruta temporal: ir directo al dashboard mientras se migra Home */}
          <Route path="/"          element={<Dashboard />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </AppProvider>
    </BrowserRouter>
  );
}
