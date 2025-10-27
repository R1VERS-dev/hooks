import useForm from "../hooks/useForm";

const estiloGlassmorphism = {
  background: "rgba(211, 52, 255, 0.55)",
  boxShadow: "0 4px 30px rgba(0,0,0,0.1)",
  backdropFilter: "blur(7.8px)",
  WebkitBackdropFilter: "blur(7.8px)",
  borderRadius: "50px",
  border: "1px solid rgba(255,255,255,0.3)",
  padding: "1em",
  margin: "1.5em auto",
  maxWidth: "400px"
};



function Ejercicio2() {
  const [form, handleChange] = useForm({ nombre: "", email: "" });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Nombre: ${form.nombre}, Email: ${form.email}`);
  };

  return (
    <div style={estiloGlassmorphism}>
      <h2>Ejercicio 2: Formulario</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Nombre:</label><br />
          <input
            name="nombre"
            value={form.nombre}
            onChange={handleChange}
            style={{ padding: "8px", width: "90%", marginBottom: "12px" }}
            placeholder="Escribe tu nombre"
          />
        </div>
        <div>
          <label>Email:</label><br />
          <input
            name="email"
            value={form.email}
            onChange={handleChange}
            style={{ padding: "8px", width: "90%", marginBottom: "12px" }}
            placeholder="Escribe tu email"
          />
        </div>
        <button type="submit" style={{ padding: "8px 16px" }}>Enviar</button>
      </form>
      <p>Valores actuales:</p>
      <pre>{JSON.stringify(form, null, 2)}</pre>
    </div>
  );
}

export default Ejercicio2;
