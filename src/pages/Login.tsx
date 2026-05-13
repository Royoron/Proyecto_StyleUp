import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useApp } from "../context/AppContext";

export default function Login() {
  const navigate = useNavigate();
  const { login, sesion } = useApp();
  const [rol, setRol] = useState<"cliente" | "barbero">("cliente");
  const [cedula, setCedula] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [cargando, setCargando] = useState(false);
  const rolStorageKey = "styleup.login.rol";
  const rolLabel = rol === "barbero" ? "barbero" : "cliente";

  useEffect(() => {
    if (!sesion) return;
    if (sesion.rol === "superadmin") {
      navigate("/admin");
      return;
    }
    navigate("/dashboard");
  }, [navigate, sesion]);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const stored = window.localStorage.getItem(rolStorageKey);
    if (stored === "cliente" || stored === "barbero") {
      setRol(stored);
    }
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!cedula || !password) {
      setError("Completa todos los campos.");
      return;
    }
    setCargando(true);
    const resultado = await login(cedula, password, rol);
    setCargando(false);
    if (!resultado.ok) {
      setError(resultado.mensaje ?? "Credenciales incorrectas.");
      return;
    }
    navigate("/dashboard");
  };

  return (
    <main className="home-page">
      <section className="hero">
        <div className="hero-lineas" />
        <div className="hero-letra">S</div>

        <div className="container position-relative">
          <div className="hero-etiqueta">Iniciar sesion</div>

          <h1 className="hero-titulo">
            Style<span className="acento">Up</span>
          </h1>

          <form
            className="su-modal"
            style={{ marginTop: "2rem" }}
            onSubmit={handleSubmit}
          >
            <div className="su-modal-body">
              <h4 className="su-modal-titulo">Accede a tu cuenta</h4>
              <p className="su-modal-sub">
                Ingresa con tu cedula de {rolLabel} y contrasena
              </p>

              <div className="su-campo-grupo">
                <label className="etiqueta-campo" htmlFor="rol">
                  Rol
                </label>
                <select
                  id="rol"
                  className="campo-formulario"
                  value={rol}
                  onChange={(e) => {
                    const value =
                      e.target.value === "barbero" ? "barbero" : "cliente";
                    setRol(value);
                    setError("");
                    if (typeof window !== "undefined") {
                      window.localStorage.setItem(rolStorageKey, value);
                    }
                  }}
                >
                  <option value="cliente">Cliente</option>
                  <option value="barbero">Barbero</option>
                </select>
              </div>

              <div className="su-campo-grupo">
                <label className="etiqueta-campo">Cedula de {rolLabel}</label>
                <input
                  className="campo-formulario"
                  placeholder={`Tu numero de cedula de ${rolLabel}`}
                  value={cedula}
                  onChange={(e) => {
                    setCedula(e.target.value);
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
                    <i className="bi bi-box-arrow-in-right me-2" />
                    Ingresar
                  </>
                )}
              </button>

              <p className="su-modal-pie">
                No tienes cuenta?{" "}
                <Link className="su-link" to="/register">
                  Registrate como cliente
                </Link>
              </p>
            </div>
          </form>
        </div>
      </section>
    </main>
  );
}
