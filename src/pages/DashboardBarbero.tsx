import { useMemo, useState } from 'react';
import { useApp } from '../context/AppContext';
import { Avatar, Badge, Button, EtiquetaSeccion, Input, Label, Select } from '../components/ui';
import { especialidades } from '../data/mockData';
import { fechaActualLegible, formatearFecha, getInicial, getNombreEspecialidad } from '../utils/helpers';
import type { Cita, DiaSemana, FormularioPerfilBarbero, FranjaHoraria, HistorialCita, PanelBarberoId } from '../types';

interface NavItem {
  panel: PanelBarberoId;
  icono: string;
  label: string;
}

const navBarbero: NavItem[] = [
  { panel: 'agenda', icono: 'bi-calendar-event', label: 'Agenda' },
  { panel: 'citas', icono: 'bi-list-check', label: 'Gestionar citas' },
  { panel: 'horario', icono: 'bi-clock', label: 'Horario' },
  { panel: 'historial', icono: 'bi-clock-history', label: 'Historial' },
  { panel: 'perfil', icono: 'bi-person', label: 'Perfil' },
];

const diasSemana: DiaSemana[] = ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado', 'Domingo'];

export default function DashboardBarbero() {
  const { barberoActual, panelBarberoActivo, navegarBarberoA, logout } = useApp();
  const [sidebarAbierto, setSidebarAbierto] = useState(false);

  if (!barberoActual) return null;

  const handleNav = (panel: PanelBarberoId) => {
    navegarBarberoA(panel);
    setSidebarAbierto(false);
  };

  return (
    <>
      <div className={`overlay-sidebar ${sidebarAbierto ? 'activo' : ''}`} onClick={() => setSidebarAbierto(false)} />

      <aside className={`sidebar ${sidebarAbierto ? 'abierto' : ''}`}>
        <div className="sidebar-header">
          <a className="navbar-brand" href="/">Style<span>Up</span></a>
        </div>

        <div className="sidebar-usuario">
          <Avatar inicial={getInicial(barberoActual.nombre)} />
          <div style={{ overflow: 'hidden' }}>
            <div style={{ fontSize: '.88rem', fontWeight: 500, color: 'var(--claro)', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
              {barberoActual.nombre} {barberoActual.apellido}
            </div>
            <div style={{ fontSize: '.72rem', color: 'var(--gris)', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
              {getNombreEspecialidad(barberoActual.id_especialidad)}
            </div>
          </div>
        </div>

        <nav className="sidebar-nav">
          <div className="nav-seccion-label">Barbero</div>
          {navBarbero.map(item => (
            <div
              key={item.panel}
              className={`nav-item-dash ${panelBarberoActivo === item.panel ? 'activo' : ''}`}
              onClick={() => handleNav(item.panel)}
            >
              <i className={`bi ${item.icono}`} />
              {item.label}
            </div>
          ))}
        </nav>

        <div className="sidebar-footer">
          <button className="btn-cerrar-sesion" onClick={logout}>
            <i className="bi bi-box-arrow-left" /> Cerrar sesión
          </button>
        </div>
      </aside>

      <main className="main-content">
        <div className="topbar">
          <div className="d-flex align-items-center gap-3">
            <button className="btn-menu-movil" onClick={() => setSidebarAbierto(true)}>
              <i className="bi bi-list" />
            </button>
            <div>
              <div style={{ fontFamily: "'Playfair Display', serif", fontSize: '1.5rem', fontWeight: 700, color: 'var(--claro)' }}>
                Panel de <span style={{ color: 'var(--dorado)', fontStyle: 'italic' }}>barbero</span>
              </div>
              <div style={{ fontSize: '.78rem', color: 'var(--gris)' }}>{fechaActualLegible()}</div>
            </div>
          </div>
          <Avatar inicial={getInicial(barberoActual.nombre)} onClick={() => navegarBarberoA('perfil')} />
        </div>

        {panelBarberoActivo === 'agenda' && <PanelAgenda />}
        {panelBarberoActivo === 'citas' && <PanelCitasBarbero />}
        {panelBarberoActivo === 'horario' && <PanelHorario />}
        {panelBarberoActivo === 'historial' && <PanelHistorialBarbero />}
        {panelBarberoActivo === 'perfil' && <PanelPerfilBarbero />}
      </main>
    </>
  );
}

function PanelAgenda() {
  const { todasLasCitas, navegarBarberoA } = useApp();
  const hoy = new Date().toISOString().split('T')[0];
  const citasHoy = useMemo(
    () => todasLasCitas.filter(c => c.fecha === hoy).sort((a, b) => a.hora.localeCompare(b.hora)),
    [todasLasCitas, hoy]
  );
  const proximas = useMemo(
    () => todasLasCitas.filter(c => c.fecha >= hoy).sort(ordenarPorFechaHora).slice(0, 8),
    [todasLasCitas, hoy]
  );

  return (
    <div className="row g-4">
      <div className="col-12">
        <div className="tarjeta-servicio" style={{ height: 'auto' }}>
          <div className="d-flex justify-content-between align-items-center mb-3">
            <EtiquetaSeccion>Citas de hoy</EtiquetaSeccion>
            <Button variante="nav" onClick={() => navegarBarberoA('citas')}>Ver todas</Button>
          </div>
          <AgendaTimeline citas={citasHoy} />
        </div>
      </div>

      <div className="col-lg-4">
        <StatBarbero icono="bi-calendar2-check" label="Hoy" valor={String(citasHoy.length)} />
      </div>
      <div className="col-lg-4">
        <StatBarbero icono="bi-hourglass-split" label="Pendientes" valor={String(todasLasCitas.filter(c => c.estado === 'Pendiente').length)} />
      </div>
      <div className="col-lg-4">
        <StatBarbero icono="bi-check-circle" label="Confirmadas" valor={String(todasLasCitas.filter(c => c.estado === 'Confirmada').length)} />
      </div>

      <div className="col-12">
        <TablaCitas citas={proximas} titulo="Próximas citas" />
      </div>
    </div>
  );
}

function PanelCitasBarbero() {
  const { todasLasCitas, actualizarEstadoCita } = useApp();
  const [filtro, setFiltro] = useState<'todas' | 'hoy' | 'semana'>('todas');
  const hoy = new Date();
  const hoyISO = hoy.toISOString().split('T')[0];
  const finSemana = new Date(hoy);
  finSemana.setDate(hoy.getDate() + 7);
  const finSemanaISO = finSemana.toISOString().split('T')[0];

  const citasFiltradas = todasLasCitas
    .filter(c => {
      if (filtro === 'hoy') return c.fecha === hoyISO;
      if (filtro === 'semana') return c.fecha >= hoyISO && c.fecha <= finSemanaISO;
      return true;
    })
    .sort(ordenarPorFechaHora);

  return (
    <div className="tarjeta-servicio" style={{ height: 'auto' }}>
      <div className="d-flex justify-content-between align-items-center mb-3 flex-wrap gap-2">
        <EtiquetaSeccion>Gestión de citas</EtiquetaSeccion>
        <div className="filtro-citas">
          {(['todas', 'hoy', 'semana'] as const).map(opcion => (
            <button key={opcion} className={filtro === opcion ? 'activo' : ''} onClick={() => setFiltro(opcion)}>
              {opcion === 'todas' ? 'Todas' : opcion === 'hoy' ? 'Hoy' : 'Semana'}
            </button>
          ))}
        </div>
      </div>

      <table className="tabla-citas">
        <thead>
          <tr>
            <th>Servicio</th>
            <th>Fecha</th>
            <th>Hora</th>
            <th>Estado</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {citasFiltradas.length === 0 ? (
            <tr><td colSpan={5} style={{ color: 'var(--gris)', textAlign: 'center', padding: '1.5rem' }}>No hay citas para este filtro</td></tr>
          ) : citasFiltradas.map(cita => (
            <tr key={cita.id_cita}>
              <td>{getNombreEspecialidad(cita.id_especialidad)}</td>
              <td>{formatearFecha(cita.fecha)}</td>
              <td>{cita.hora}</td>
              <td><Badge estado={cita.estado} /></td>
              <td>
                <div className="acciones-cita">
                  <button onClick={() => actualizarEstadoCita(cita.id_cita, 'Completada')}>Completar</button>
                  <button onClick={() => actualizarEstadoCita(cita.id_cita, 'Cancelada')}>Cancelar</button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function PanelHorario() {
  const { barberoActual, actualizarHorarioBarbero } = useApp();
  const [horario, setHorario] = useState<FranjaHoraria[]>(() => barberoActual?.horario ?? []);
  const [exito, setExito] = useState(false);

  const actualizarDia = (dia: DiaSemana, campo: 'hora_inicio' | 'hora_fin', valor: string) => {
    setHorario(prev => {
      const existe = prev.some(f => f.dia === dia);
      const base = existe ? prev : [...prev, { dia, hora_inicio: '08:00', hora_fin: '17:00' }];
      return base.map(f => f.dia === dia ? { ...f, [campo]: valor } : f);
    });
  };

  const toggleDia = (dia: DiaSemana) => {
    setHorario(prev =>
      prev.some(f => f.dia === dia)
        ? prev.filter(f => f.dia !== dia)
        : [...prev, { dia, hora_inicio: '08:00', hora_fin: '17:00' }]
    );
  };

  const guardar = () => {
    actualizarHorarioBarbero(horario);
    setExito(true);
    setTimeout(() => setExito(false), 2500);
  };

  return (
    <div className="tarjeta-servicio" style={{ height: 'auto' }}>
      <EtiquetaSeccion>Horario registrado</EtiquetaSeccion>
      <div className="horario-grid">
        {diasSemana.map(dia => {
          const franja = horario.find(f => f.dia === dia);
          return (
            <div key={dia} className={`horario-dia ${franja ? 'activo' : ''}`}>
              <label>
                <input type="checkbox" checked={Boolean(franja)} onChange={() => toggleDia(dia)} />
                {dia}
              </label>
              <input type="time" value={franja?.hora_inicio ?? '08:00'} disabled={!franja} onChange={e => actualizarDia(dia, 'hora_inicio', e.target.value)} />
              <input type="time" value={franja?.hora_fin ?? '17:00'} disabled={!franja} onChange={e => actualizarDia(dia, 'hora_fin', e.target.value)} />
            </div>
          );
        })}
      </div>
      <Button className="mt-3" onClick={guardar}>
        <i className="bi bi-check2 me-2" />Guardar horario
      </Button>
      {exito && <div className="su-alerta-ok">Horario actualizado correctamente.</div>}
    </div>
  );
}

function PanelHistorialBarbero() {
  const { historialBarbero } = useApp();
  return (
    <TablaCitas
      citas={historialBarbero}
      titulo="Historial de citas atendidas"
      vacio="No tienes historial de citas atendidas"
    />
  );
}

function PanelPerfilBarbero() {
  const { barberoActual, actualizarPerfilBarbero, historialBarbero } = useApp();
  const [exito, setExito] = useState(false);
  const [form, setForm] = useState<FormularioPerfilBarbero>(() => ({
    nombre_completo: `${barberoActual?.nombre ?? ''} ${barberoActual?.apellido ?? ''}`.trim(),
    correo: barberoActual?.correo ?? '',
    telefono: barberoActual?.telefono ?? '',
    cedula_barbero: barberoActual?.cedula_barbero ?? '',
    id_especialidad: barberoActual?.id_especialidad ?? '',
  }));

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const guardar = () => {
    actualizarPerfilBarbero(form);
    setExito(true);
    setTimeout(() => setExito(false), 2500);
  };

  if (!barberoActual) return null;

  return (
    <div className="row g-4">
      <div className="col-lg-4">
        <div className="tarjeta-servicio text-center" style={{ height: 'auto' }}>
          <Avatar inicial={getInicial(barberoActual.nombre)} size={80} fontSize="2rem" style={{ margin: '0 auto 1rem' }} />
          <h5 style={{ fontFamily: "'Playfair Display', serif", color: 'var(--claro)' }}>
            {barberoActual.nombre} {barberoActual.apellido}
          </h5>
          <p style={{ fontSize: '.78rem', color: 'var(--gris)', marginTop: '.3rem' }}>
            {getNombreEspecialidad(barberoActual.id_especialidad)}
          </p>
          <div className="perfil-stat">
            <span>Citas atendidas</span>
            <strong>{historialBarbero.filter(h => h.estado === 'Completada').length}</strong>
          </div>
        </div>
      </div>

      <div className="col-lg-8">
        <div className="tarjeta-servicio" style={{ height: 'auto' }}>
          <EtiquetaSeccion>Perfil profesional</EtiquetaSeccion>
          <div className="row g-3">
            <div className="col-md-6">
              <Label>Nombre completo</Label>
              <Input name="nombre_completo" value={form.nombre_completo} onChange={handleChange} />
            </div>
            <div className="col-md-6">
              <Label>Especialidad</Label>
              <Select name="id_especialidad" value={form.id_especialidad} onChange={handleChange}>
                {especialidades.map(e => <option key={e.id_especialidad} value={e.id_especialidad}>{e.especialidad}</option>)}
              </Select>
            </div>
            <div className="col-md-6">
              <Label>Correo</Label>
              <Input type="email" name="correo" value={form.correo} onChange={handleChange} />
            </div>
            <div className="col-md-6">
              <Label>Teléfono</Label>
              <Input name="telefono" value={form.telefono} onChange={handleChange} />
            </div>
            <div className="col-md-6">
              <Label>Cédula</Label>
              <Input name="cedula_barbero" value={form.cedula_barbero} disabled onChange={handleChange} />
            </div>
            <div className="col-12">
              <Button onClick={guardar}>
                <i className="bi bi-check2 me-2" />Guardar perfil
              </Button>
            </div>
          </div>
          {exito && <div className="su-alerta-ok">Perfil actualizado correctamente.</div>}
        </div>
      </div>
    </div>
  );
}

function AgendaTimeline({ citas }: { citas: Cita[] }) {
  if (citas.length === 0) {
    return <div className="agenda-vacia">No tienes citas programadas para hoy.</div>;
  }

  return (
    <div className="agenda-timeline">
      {citas.map(cita => (
        <div key={cita.id_cita} className="agenda-item">
          <div className="agenda-hora">{cita.hora}</div>
          <div className="agenda-punto" />
          <div className="agenda-card">
            <strong>{getNombreEspecialidad(cita.id_especialidad)}</strong>
            <span><Badge estado={cita.estado} /></span>
          </div>
        </div>
      ))}
    </div>
  );
}

function TablaCitas({ citas, titulo, vacio = 'No hay citas para mostrar' }: {
  citas: Array<Cita | HistorialCita>;
  titulo: string;
  vacio?: string;
}) {
  return (
    <div className="tarjeta-servicio" style={{ height: 'auto' }}>
      <EtiquetaSeccion>{titulo}</EtiquetaSeccion>
      <table className="tabla-citas">
        <thead>
          <tr>
            <th>Servicio</th>
            <th>Fecha</th>
            <th>Hora</th>
            <th>Estado</th>
          </tr>
        </thead>
        <tbody>
          {citas.length === 0 ? (
            <tr><td colSpan={4} style={{ color: 'var(--gris)', textAlign: 'center', padding: '1.5rem' }}>{vacio}</td></tr>
          ) : citas.map(cita => (
            <tr key={cita.id_cita}>
              <td>{getNombreEspecialidad(cita.id_especialidad)}</td>
              <td>{formatearFecha(cita.fecha)}</td>
              <td>{'hora' in cita ? cita.hora : '-'}</td>
              <td><Badge estado={cita.estado} /></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function StatBarbero({ icono, label, valor }: { icono: string; label: string; valor: string }) {
  return (
    <div className="tarjeta-servicio stat-barbero" style={{ height: 'auto' }}>
      <i className={`bi ${icono}`} />
      <span>{label}</span>
      <strong>{valor}</strong>
    </div>
  );
}

function ordenarPorFechaHora(a: Cita, b: Cita) {
  return `${a.fecha} ${a.hora}`.localeCompare(`${b.fecha} ${b.hora}`);
}
