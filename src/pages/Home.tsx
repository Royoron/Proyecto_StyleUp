import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useApp } from "../context/AppContext";

export default function Home() {
  const navigate = useNavigate();
  const { sesion } = useApp();

  useEffect(() => {
    if (sesion) navigate("/dashboard");
  }, [sesion, navigate]);

  return (
    <main className="home-page">
      <section className="hero">
        <div className="hero-lineas" />
        <div className="hero-letra">S</div>

        <div className="container position-relative">
          <div className="hero-etiqueta">Barbería premium</div>

          <h1 className="hero-titulo">
            Style<span className="acento">Up</span>
          </h1>

          <p className="hero-descripcion">
            Reserva tu cita, consulta tu historial y gestiona tu perfil desde un
            solo lugar.
          </p>

          <div className="hero-botones">
            <Link className="btn-principal" to="/login">
              <i className="bi bi-box-arrow-in-right me-2" />
              Iniciar sesión
            </Link>

            <Link className="btn-contorno" to="/register">
              <i className="bi bi-person-plus me-2" />
              Crear cuenta
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
