// ══════════════════════════════════════════════════════════
//  LOGIN MODAL — StyleUp
//  Maneja login de cliente y barbero con selector de rol
// ══════════════════════════════════════════════════════════

import { useState } from "react";
import { useApp } from "../../context/AppContext";
import type { RolUsuario } from "../../types";

interface LoginModalProps {
  onClose: () => void;
  onAbrirRegistro: () => void;
  onLoginExitoso: (rol: RolUsuario) => void;
}

export default function LoginModal({
  onClose,
  onAbrirRegistro,
  onLoginExitoso,
}: LoginModalProps) {
  const { login } = useApp();
  const rol: RolUsuario = "cliente";
  const [cedula, setCedula] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [cargando, setCargando] = useState(false);

  const handleSubmit = async () => {
    if (!cedula || !password) {
      setError("Completa todos los campos.");
      return;
    }
    setCargando(true);
    const resultado = await login(cedula, password, rol);
    setCargando(false);
    if (!resultado.ok) {
      setError(
        resultado.mensaje ??
          "Credenciales incorrectas. Verifica e intenta de nuevo.",
      );
      return;
    }
    onLoginExitoso(rol);
    onClose();
  };

  return (
    <div className="su-modal-overlay" onClick={onClose}>
      <div className="su-modal" onClick={(e) => e.stopPropagation()}>
        {/* Encabezado */}
        <div className="su-modal-header">
          <div className="su-modal-logo">
            Style<span>Up</span>
          </div>
          <button className="su-modal-close" onClick={onClose}>
            <i className="bi bi-x-lg" />
          </button>
        </div>

        <div className="su-modal-body">
          <h4 className="su-modal-titulo">Iniciar sesión</h4>
          <p className="su-modal-sub">Accede a tu espacio personal</p>

          {/* Campos */}
          <div className="su-campo-grupo">
            <label className="etiqueta-campo">Cedula</label>
            <input
              className="campo-formulario"
              placeholder="Tu numero de cedula"
              value={cedula}
              onChange={(e) => {
                setCedula(e.target.value);
                setError("");
              }}
              onKeyDown={(e) => e.key === "Enter" && handleSubmit()}
            />
          </div>

          <div className="su-campo-grupo">
            <label className="etiqueta-campo">Contraseña</label>
            <input
              className="campo-formulario"
              type="password"
              placeholder="••••••••"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
                setError("");
              }}
              onKeyDown={(e) => e.key === "Enter" && handleSubmit()}
            />
          </div>

          <div></div>

          {error && (
            <div className="su-alerta-error">
              <i className="bi bi-exclamation-circle me-2" />
              {error}
            </div>
          )}

          {/* Botón principal */}
          <button
            className="btn-principal w-100 su-btn-submit"
            onClick={handleSubmit}
            disabled={cargando}
          >
            {cargando ? (
              <>
                <i className="bi bi-arrow-repeat su-spin me-2" />
                Verificando...
              </>
            ) : (
              <>
                <i className="bi bi-box-arrow-in-right me-2" />
                Ingresar
              </>
            )}
          </button>

          {/* Pie */}
          <p className="su-modal-pie">
            ¿No tienes cuenta?{" "}
            <span
              className="su-link"
              onClick={() => {
                onClose();
                onAbrirRegistro();
              }}
            >
              Regístrate como cliente
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}
