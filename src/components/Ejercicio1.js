import useToggle from "../hooks/useToggle";

const estiloGlassmorphism = {
  background: "rgba(11, 255, 243, 0.72)",
  boxShadow: "0 4px 30px rgba(0,0,0,0.1)",
  backdropFilter: "blur(7.8px)",
  WebkitBackdropFilter: "blur(7.8px)",
  borderRadius: "50px",
  border: "1px solid rgba(255,255,255,0.3)",
  padding: "1em",
  margin: "1.5em auto",
  maxWidth: "400px"
};



function Ejercicio1() {
  
  const [visible, alternar] = useToggle(false);

  return (
    <div style={estiloGlassmorphism}>
      <h2>Ejercicio 1: Mostrar u ocultar detalles</h2>
      <button onClick={alternar} style={{ padding: "8px 16px", marginBottom: "12px" }}>
        {visible ? "Ocultar detalles" : "Mostrar detalles"}
      </button>
      {visible && (
        <div style={{ background: "#f0f8ff", padding: "8px", borderRadius: "5px" }}>
          <strong>Detalles secretos:</strong>
          <ul>
            <li>Vive</li>
            <li>Ama</li>
            <li>Sueña</li>
            <li>Comparte</li>
          </ul>
          <p>La vida es bella cuando decides ver sus detalles ❤️</p>
        </div>
      )}
    </div>
  );
}

export default Ejercicio1;
