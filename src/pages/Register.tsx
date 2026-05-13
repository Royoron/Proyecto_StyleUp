import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useApp } from "../context/AppContext";

export default function Register() {
  const navigate = useNavigate();
  const { registrarCliente, sesion } = useApp();
  useEffect(() => {
    if (!sesion) return;
    if (sesion.rol === "superadmin") {
      navigate("/admin");
      return;
    }
    navigate("/dashboard");
  }, [navigate, sesion]);
  const [form, setForm] = useState({
    nombre: "",
    apellido: "",
    correo: "",
    telefono: "",
    cedula: "",
    password: "",
  });
  const [confirmar, setConfirmar] = useState("");
  const [error, setError] = useState("");
  const [cargando, setCargando] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    setError("");
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const { nombre, apellido, correo, telefono, cedula, password } = form;

    if (!nombre || !apellido || !correo || !cedula || !password) {
      setError("Completa todos los campos obligatorios.");
      return;
    }

    if (password !== confirmar) {
      setError("Las contrasenas no coinciden.");
      return;
    }

    if (password.length < 6) {
      setError("La contrasena debe tener al menos 6 caracteres.");
      return;
    }

    setCargando(true);
    const { ok, mensaje } = await registrarCliente({
      nombre,
      apellido,
      correo,
      telefono,
      cedula,
      password,
      fecha_registro: new Date(),
    });
    setCargando(false);

    if (!ok) {
      setError(mensaje);
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
          <div className="hero-etiqueta">Registro</div>

          <h1 className="hero-titulo">
            Style<span className="acento">Up</span>
          </h1>

          <form
            className="su-modal su-modal-lg"
            style={{ marginTop: "2rem" }}
            onSubmit={handleSubmit}
          >
            <div className="su-modal-body">
              <h4 className="su-modal-titulo">Crear cuenta</h4>
              <p className="su-modal-sub">
                Unete y gestiona tus citas facilmente
              </p>

              <div className="row g-3">
                <div className="col-6">
                  <label className="etiqueta-campo">Nombre *</label>
                  <input
                    className="campo-formulario"
                    name="nombre"
                    value={form.nombre}
                    onChange={handleChange}
                    placeholder="Juan"
                  />
                </div>
                <div className="col-6">
                  <label className="etiqueta-campo">Apellido *</label>
                  <input
                    className="campo-formulario"
                    name="apellido"
                    value={form.apellido}
                    onChange={handleChange}
                    placeholder="Perez"
                  />
                </div>
                <div className="col-12">
                  <label className="etiqueta-campo">Correo electronico *</label>
                  <input
                    className="campo-formulario"
                    type="email"
                    name="correo"
                    value={form.correo}
                    onChange={handleChange}
                    placeholder="tu@correo.com"
                  />
                </div>
                <div className="col-6">
                  <label className="etiqueta-campo">Cedula *</label>
                  <input
                    className="campo-formulario"
                    name="cedula"
                    value={form.cedula}
                    onChange={handleChange}
                    placeholder="1234567890"
                  />
                </div>
                <div className="col-6">
                  <label className="etiqueta-campo">Telefono</label>
                  <input
                    className="campo-formulario"
                    name="telefono"
                    value={form.telefono}
                    onChange={handleChange}
                    placeholder="+57 300..."
                  />
                </div>
                <div className="col-6">
                  <label className="etiqueta-campo">Contrasena *</label>
                  <input
                    className="campo-formulario"
                    type="password"
                    name="password"
                    value={form.password}
                    onChange={handleChange}
                    placeholder="••••••••"
                  />
                </div>
                <div className="col-6">
                  <label className="etiqueta-campo">
                    Confirmar contrasena *
                  </label>
                  <input
                    className="campo-formulario"
                    type="password"
                    name="confirmar"
                    value={confirmar}
                    onChange={(e) => {
                      setConfirmar(e.target.value);
                      setError("");
                    }}
                    placeholder="••••••••"
                  />
                </div>
              </div>

              {error && (
                <div className="su-alerta-error mt-3">
                  <i className="bi bi-exclamation-circle me-2" />
                  {error}
                </div>
              )}

              <button
                className="btn-principal w-100 su-btn-submit mt-3"
                type="submit"
                disabled={cargando}
              >
                {cargando ? (
                  <>
                    <i className="bi bi-arrow-repeat su-spin me-2" />
                    Creando cuenta...
                  </>
                ) : (
                  <>
                    <i className="bi bi-person-check me-2" />
                    Crear cuenta
                  </>
                )}
              </button>

              <p className="su-modal-pie">
                Ya tienes cuenta?{" "}
                <Link className="su-link" to="/login">
                  Inicia sesion
                </Link>
              </p>
            </div>
          </form>
        </div>
      </section>
    </main>
  );
}
