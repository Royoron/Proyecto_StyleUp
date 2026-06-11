import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useApp } from "../context/AppContext";

export default function AdminLogin() {
  const navigate = useNavigate();
  const { loginSuperAdmin } = useApp();
  const [correo, setCorreo] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [cargando, setCargando] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!correo || !password) {
      setError("Completa todos los campos.");
      return;
    }
    setCargando(true);
    const resultado = await loginSuperAdmin(correo, password);
    setCargando(false);
    if (!resultado.ok) {
      setError(resultado.mensaje ?? "Credenciales incorrectas.");
      return;
    }
    navigate("/admin");
  };

  return (
    <main className="home-page">
      <section className="hero">
        <div className="hero-lineas" />
        <div className="hero-letra">S</div>

        <div className="container position-relative">
          <div className="hero-etiqueta">Acceso privado</div>

          <h1 className="hero-titulo">
            Style<span className="acento">Up</span>
          </h1>

          <form
            className="su-modal"
            style={{ marginTop: "2rem" }}
            onSubmit={handleSubmit}
          >
            <div className="su-modal-body">
              <h4 className="su-modal-titulo">Login superadmin</h4>
              <p className="su-modal-sub">Ingresa con tu correo y contrasena</p>

              <div className="su-campo-grupo">
                <label className="etiqueta-campo">Correo</label>
                <input
                  className="campo-formulario"
                  type="email"
                  placeholder="admin@correo.com"
                  value={correo}
                  onChange={(e) => {
                    setCorreo(e.target.value);
                    setError("");
                  }}
                />
              </div>

              <div className="su-campo-grupo">
                <label className="etiqueta-campo">Contrasena</label>
                <input
                  className="campo-formulario"
                  type="password"
                  placeholder="••••••••"
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value);
                    setError("");
                  }}
                />
              </div>

              {error && (
                <div className="su-alerta-error">
                  <i className="bi bi-exclamation-circle me-2" />
                  {error}
                </div>
              )}

              <button
                className="btn-principal w-100 su-btn-submit"
                type="submit"
                disabled={cargando}
              >
                {cargando ? (
                  <>
                    <i className="bi bi-arrow-repeat su-spin me-2" />
                    Verificando...
                  </>
                ) : (
                  <>
                    <i className="bi bi-shield-lock me-2" />
                    Ingresar
                  </>
                )}
              </button>

              <p className="su-modal-pie">
                <Link className="su-link" to="/">
                  Volver al inicio
                </Link>
              </p>
            </div>
          </form>
        </div>
      </section>
    </main>
  );
}
