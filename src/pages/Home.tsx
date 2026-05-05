import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import LoginModal from '../components/modals/LoginModal';
import RegistroClienteModal from '../components/modals/RegistroClienteModal';
import RegistroBarberoModal from '../components/modals/RegistroBarberoModal';
import { useApp } from '../context/AppContext';

type ModalAuth = 'login' | 'registroCliente' | 'registroBarbero' | null;

export default function Home() {
  const navigate = useNavigate();
  const { sesion } = useApp();
  const [modalAuth, setModalAuth] = useState<ModalAuth>(null);

  useEffect(() => {
    if (sesion) navigate('/dashboard');
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
            Reserva tu cita, consulta tu historial y gestiona tu perfil desde un solo lugar.
          </p>

          <div className="hero-botones">
            <button className="btn-principal" onClick={() => setModalAuth('login')}>
              <i className="bi bi-box-arrow-in-right me-2" />
              Iniciar sesión
            </button>

            <button className="btn-contorno" onClick={() => setModalAuth('registroCliente')}>
              <i className="bi bi-person-plus me-2" />
              Crear cuenta
            </button>
          </div>
        </div>
      </section>

      {modalAuth === 'login' && (
        <LoginModal
          onClose={() => setModalAuth(null)}
          onAbrirRegistro={() => setModalAuth('registroCliente')}
          onLoginExitoso={() => navigate('/dashboard')}
        />
      )}

      {(modalAuth === 'registroCliente' || modalAuth === 'registroBarbero') && (
        <>
          <div className="registro-tabs">
            <button
              className={`rol-btn ${modalAuth === 'registroCliente' ? 'activo' : ''}`}
              onClick={() => setModalAuth('registroCliente')}
            >
              <i className="bi bi-person-fill" /> Cliente
            </button>
            <button
              className={`rol-btn ${modalAuth === 'registroBarbero' ? 'activo' : ''}`}
              onClick={() => setModalAuth('registroBarbero')}
            >
              <i className="bi bi-scissors" /> Barbero
            </button>
          </div>
          {modalAuth === 'registroCliente' ? (
            <RegistroClienteModal
              onClose={() => setModalAuth(null)}
              onAbrirLogin={() => setModalAuth('login')}
              onRegistroExitoso={() => navigate('/dashboard')}
            />
          ) : (
            <RegistroBarberoModal
              onClose={() => setModalAuth(null)}
              onAbrirLogin={() => setModalAuth('login')}
              onRegistroExitoso={() => navigate('/dashboard')}
            />
          )}
        </>
      )}
    </main>
  );
}
