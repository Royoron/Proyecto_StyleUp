import { useApp } from "../../context/AppContext";

export default function GlobalAlert() {
  const { alerta, limpiarAlerta } = useApp();

  if (!alerta) return null;

  return (
    <div className={`su-toast ${alerta.tipo}`} onClick={limpiarAlerta}>
      <i
        className={`bi ${alerta.tipo === "error" ? "bi-exclamation-circle" : "bi-check-circle"} me-2`}
      />
      {alerta.mensaje}
    </div>
  );
}
