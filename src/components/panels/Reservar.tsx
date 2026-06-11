// ══════════════════════════════════════════════════════════
//  PANEL NUEVA RESERVA — StyleUp
// ══════════════════════════════════════════════════════════

import { useEffect, useRef, useState } from "react";
import { useApp } from "../../context/AppContext";
import {
  Button,
  Label,
  Input,
  Select,
  AlertaExito,
  SeparadorDorado,
} from "../ui";
import { horasDisponibles } from "../../data/catalogo";
import { citasService } from "../../api/services";
import { esImagenValida, leerArchivoComoBase64 } from "../../utils/helpers";
import type { FormularioCita } from "../../types";

const FORM_INICIAL: FormularioCita = {
  cedula_barbero: "",
  id_especialidad: 0,
  fecha: "",
  hora: "",
};

function hoyISO() {
  const hoy = new Date();
  const mes = String(hoy.getMonth() + 1).padStart(2, "0");
  const dia = String(hoy.getDate()).padStart(2, "0");
  return `${hoy.getFullYear()}-${mes}-${dia}`;
}

export default function PanelReservar() {
  const {
    agregarCita,
    barberosDisponibles,
    cargarBarberosDisponibles,
    especialidades,
  } = useApp();
  const [form, setForm] = useState<FormularioCita>(FORM_INICIAL);
  const [exito, setExito] = useState(false);
  const [errorForm, setErrorForm] = useState("");
  const [horasOcupadas, setHorasOcupadas] = useState<string[]>([]);
  const [previewSrc, setPreviewSrc] = useState<string | null>(null);
  const [nombreArchivo, setNombreArchivo] = useState("");
  const [errorImagen, setErrorImagen] = useState(false);
  const inputFileRef = useRef<HTMLInputElement>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => {
    const { name, value } = e.target;
    setErrorForm("");
    if (name === "id_especialidad") {
      // Cambiar de servicio reinicia barbero y hora
      setForm((prev) => ({
        ...prev,
        id_especialidad: Number(value),
        cedula_barbero: "",
        hora: "",
      }));
    } else if (name === "fecha") {
      // Cambiar de fecha reinicia barbero y hora (la disponibilidad cambia)
      setForm((prev) => ({ ...prev, fecha: value, cedula_barbero: "", hora: "" }));
    } else if (name === "cedula_barbero") {
      setForm((prev) => ({ ...prev, cedula_barbero: value, hora: "" }));
    } else {
      setForm((prev) => ({ ...prev, [name]: value }));
    }
  };

  // Barberos disponibles según servicio y día elegido
  useEffect(() => {
    cargarBarberosDisponibles(form.id_especialidad, form.fecha || undefined);
  }, [cargarBarberosDisponibles, form.id_especialidad, form.fecha]);

  // Horas ya reservadas del barbero en la fecha elegida
  useEffect(() => {
    if (!form.cedula_barbero || !form.fecha) {
      setHorasOcupadas([]);
      return;
    }

    let activo = true;
    citasService
      .listarCitasPorBarberoYDia(form.cedula_barbero, form.fecha)
      .then((citas) => {
        if (activo) {
          setHorasOcupadas(
            citas.filter((c) => c.estado !== "Cancelada").map((c) => c.hora),
          );
        }
      })
      .catch(() => {
        if (activo) setHorasOcupadas([]);
      });

    return () => {
      activo = false;
    };
  }, [form.cedula_barbero, form.fecha]);

  // Horas dentro de la franja del barbero, sin las ocupadas
  const barberoElegido = barberosDisponibles.find(
    (b) => b.cedula_barbero === form.cedula_barbero,
  );
  const franja = barberoElegido?.horario_dia;
  const horasParaReservar = horasDisponibles.filter((h) => {
    if (franja && (h < franja.hora_inicio || h >= franja.hora_fin)) return false;
    return !horasOcupadas.includes(h);
  });

  const handleImagen = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const archivo = e.target.files?.[0];
    if (!archivo || !esImagenValida(archivo)) {
      setErrorImagen(true);
      if (inputFileRef.current) inputFileRef.current.value = "";
      return;
    }
    setErrorImagen(false);
    const base64 = await leerArchivoComoBase64(archivo);
    setPreviewSrc(base64);
    setNombreArchivo(archivo.name);
    setForm((prev) => ({ ...prev, imagen_referencia: base64 }));
  };

  const eliminarImagen = (e: React.MouseEvent) => {
    e.stopPropagation();
    setPreviewSrc(null);
    setNombreArchivo("");
    setErrorImagen(false);
    setForm((prev) => ({ ...prev, imagen_referencia: undefined }));
    if (inputFileRef.current) inputFileRef.current.value = "";
  };

  const handleSubmit = async () => {
    if (
      !form.cedula_barbero ||
      !form.id_especialidad ||
      !form.fecha ||
      !form.hora
    ) {
      setErrorForm("Por favor completa todos los campos requeridos.");
      return;
    }
    if (form.fecha < hoyISO()) {
      setErrorForm("La fecha no puede ser anterior a hoy.");
      return;
    }
    if (franja && (form.hora < franja.hora_inicio || form.hora >= franja.hora_fin)) {
      setErrorForm(
        `El barbero atiende ese día de ${franja.hora_inicio} a ${franja.hora_fin}.`,
      );
      return;
    }
    if (horasOcupadas.includes(form.hora)) {
      setErrorForm("Esa hora ya está reservada, elige otra.");
      return;
    }

    const ok = await agregarCita(form);
    if (!ok) return;
    setErrorForm("");
    setExito(true);
    setForm(FORM_INICIAL);
    setPreviewSrc(null);
    setNombreArchivo("");
    setTimeout(() => setExito(false), 3000);
  };

  return (
    <div className="row g-4">
      {/* Info lateral */}
      <div className="col-lg-4">
        <div className="seccion-etiqueta">Agenda fácil</div>
        <h2 className="seccion-titulo">
          Reserva tu <span className="acento">cita</span>
        </h2>
        <SeparadorDorado />
        <p className="seccion-subtitulo">
          Selecciona tu barbero, servicio, fecha y hora. Confirma al instante.
        </p>
        <div className="d-flex flex-column gap-2 mt-3">
          {[
            "Confirmación inmediata",
            "Cancelación sin costo",
            "Historial de citas",
          ].map((txt) => (
            <div
              key={txt}
              style={{ display: "flex", alignItems: "center", gap: ".6rem" }}
            >
              <i
                className="bi bi-check-circle-fill"
                style={{ color: "var(--dorado)" }}
              />
              <span style={{ fontSize: ".85rem", color: "var(--gris)" }}>
                {txt}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Formulario */}
      <div className="col-lg-8">
        <div className="tarjeta-servicio" style={{ height: "auto" }}>
          <h5
            style={{
              fontFamily: "'Playfair Display', serif",
              color: "var(--claro)",
              marginBottom: "1.4rem",
            }}
          >
            Nueva reservación
          </h5>

          <div className="row g-3">
            {/* Especialidad */}
            <div className="col-md-6">
              <Label>Especialidad</Label>
              <Select
                name="id_especialidad"
                value={form.id_especialidad || ""}
                onChange={handleChange}
              >
                <option value="">Seleccionar servicio</option>
                {especialidades.map((e) => (
                  <option key={e.id_especialidad} value={e.id_especialidad}>
                    {e.especialidad} ({e.tiempo_estimado} min)
                  </option>
                ))}
              </Select>
            </div>

            {/* Fecha */}
            <div className="col-md-6">
              <Label>Fecha</Label>
              <Input
                type="date"
                name="fecha"
                value={form.fecha}
                min={hoyISO()}
                onChange={handleChange}
              />
            </div>

            {/* Barbero (solo los que atienden el día elegido) */}
            <div className="col-md-6">
              <Label>Barbero</Label>
              <Select
                name="cedula_barbero"
                value={form.cedula_barbero}
                onChange={handleChange}
                disabled={!form.id_especialidad}
              >
                <option value="">
                  {!form.id_especialidad
                    ? "Selecciona especialidad primero"
                    : barberosDisponibles.length
                      ? "Seleccionar barbero"
                      : form.fecha
                        ? "Ningún barbero atiende ese día"
                        : "No hay barberos para este servicio"}
                </option>
                {barberosDisponibles.map((b) => (
                  <option key={b.cedula_barbero} value={b.cedula_barbero}>
                    {b.nombre} {b.apellido}
                    {b.horario_dia
                      ? ` (${b.horario_dia.hora_inicio} - ${b.horario_dia.hora_fin})`
                      : ""}
                  </option>
                ))}
              </Select>
            </div>

            {/* Hora (dentro de la franja del barbero, sin ocupadas) */}
            <div className="col-md-6">
              <Label>Hora</Label>
              <Select
                name="hora"
                value={form.hora}
                onChange={handleChange}
                disabled={!form.cedula_barbero || !form.fecha}
              >
                <option value="">
                  {!form.cedula_barbero || !form.fecha
                    ? "Selecciona barbero y fecha primero"
                    : horasParaReservar.length
                      ? "Seleccionar hora"
                      : "Sin horas disponibles ese día"}
                </option>
                {horasParaReservar.map((h) => (
                  <option key={h} value={h}>
                    {h}
                  </option>
                ))}
              </Select>
            </div>

            {/* Imagen de referencia */}
            <div className="col-12">
              <Label>Imagen de referencia (opcional)</Label>
              <input
                ref={inputFileRef}
                type="file"
                accept=".jpg,.jpeg,.png,.webp"
                style={{ display: "none" }}
                onChange={handleImagen}
              />
              <ZonaImagen
                previewSrc={previewSrc}
                nombreArchivo={nombreArchivo}
                onClick={() => inputFileRef.current?.click()}
                onEliminar={eliminarImagen}
              />
              {errorImagen && (
                <div
                  style={{
                    marginTop: ".4rem",
                    fontSize: ".78rem",
                    color: "#dc5050",
                  }}
                >
                  <i className="bi bi-exclamation-circle me-1" />
                  Solo se permiten imágenes JPG, JPEG, PNG o WEBP.
                </div>
              )}
            </div>

            {/* Error de validación */}
            {errorForm && (
              <div className="col-12">
                <div className="su-alerta-error">
                  <i className="bi bi-exclamation-circle me-2" />
                  {errorForm}
                </div>
              </div>
            )}

            {/* Botón confirmar */}
            <div className="col-12 mt-1">
              <Button onClick={handleSubmit}>
                <i className="bi bi-calendar2-check me-2" />
                Confirmar cita
              </Button>
            </div>
          </div>

          {exito && (
            <AlertaExito mensaje="¡Cita reservada con éxito! Te esperamos." />
          )}
        </div>
      </div>
    </div>
  );
}

// ── Sub-componente: zona de imagen ─────────────────────────
function ZonaImagen({
  previewSrc,
  nombreArchivo,
  onClick,
  onEliminar,
}: {
  previewSrc: string | null;
  nombreArchivo: string;
  onClick: () => void;
  onEliminar: (e: React.MouseEvent) => void;
}) {
  return (
    <div
      onClick={onClick}
      style={{
        border: "1px dashed rgba(201,168,76,.35)",
        borderRadius: "3px",
        padding: "1.4rem",
        textAlign: "center",
        cursor: "pointer",
        background: "var(--oscuro2)",
        transition: "border-color .2s, background .2s",
      }}
      onMouseOver={(e) => {
        (e.currentTarget as HTMLDivElement).style.borderColor = "var(--dorado)";
        (e.currentTarget as HTMLDivElement).style.background =
          "rgba(201,168,76,.05)";
      }}
      onMouseOut={(e) => {
        (e.currentTarget as HTMLDivElement).style.borderColor =
          "rgba(201,168,76,.35)";
        (e.currentTarget as HTMLDivElement).style.background = "var(--oscuro2)";
      }}
    >
      {previewSrc ? (
        <>
          <img
            src={previewSrc}
            alt="Referencia"
            style={{
              maxHeight: 140,
              maxWidth: "100%",
              borderRadius: 3,
              objectFit: "cover",
            }}
          />
          <div
            style={{
              marginTop: ".6rem",
              fontSize: ".78rem",
              color: "var(--dorado)",
            }}
          >
            {nombreArchivo}
          </div>
          <button
            className="btn-nav"
            style={{
              marginTop: ".5rem",
              fontSize: ".7rem",
              padding: ".25rem .7rem",
            }}
            onClick={onEliminar}
          >
            <i className="bi bi-x me-1" />
            Quitar imagen
          </button>
        </>
      ) : (
        <>
          <i
            className="bi bi-image"
            style={{
              fontSize: "1.8rem",
              color: "rgba(201,168,76,.4)",
              display: "block",
              marginBottom: ".5rem",
            }}
          />
          <span style={{ fontSize: ".82rem", color: "var(--gris)" }}>
            Haz clic para subir una imagen de referencia
          </span>
          <br />
          <span
            style={{
              fontSize: ".72rem",
              color: "rgba(136,136,136,.5)",
              letterSpacing: ".08em",
            }}
          >
            JPG · JPEG · PNG · WEBP
          </span>
        </>
      )}
    </div>
  );
}
