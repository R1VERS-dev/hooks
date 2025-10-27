import { useState } from "react";
import useLocalStorageList from "../hooks/useLocalStorageList";

const estiloGlassmorphism = {
  background: "rgba(248, 188, 39, 0.73)",
  boxShadow: "0 4px 30px rgba(0,0,0,0.1)",
  backdropFilter: "blur(7.8px)",
  WebkitBackdropFilter: "blur(7.8px)",
  borderRadius: "50px",
  border: "1px solid rgba(255,255,255,0.3)",
  padding: "1em",
  margin: "1.5em auto",
  maxWidth: "400px"
};


function Ejercicio3() {
  const [tarea, setTarea] = useState("");
  const [listaTareas, setListaTareas] = useLocalStorageList("misTareas", []);

  const agregarTarea = (e) => {
    e.preventDefault();
    if (tarea.trim() === "") return;
    setListaTareas([...listaTareas, tarea.trim()]);
    setTarea("");
  };

  // Función para eliminar tarea por índice
  const eliminarTarea = (indice) => {
    const nuevaLista = listaTareas.filter((_, i) => i !== indice);
    setListaTareas(nuevaLista);
  };

  return (
    <div style={estiloGlassmorphism}>
      <h2>Ejercicio 3: Lista de tareas con localStorage</h2>
      <form onSubmit={agregarTarea}>
        <input
          type="text"
          placeholder="Nueva tarea"
          value={tarea}
          onChange={(e) => setTarea(e.target.value)}
          style={{ width: "90%", padding: "8px", marginBottom: "12px" }}
        />
        <button type="submit" style={{ padding: "8px 16px" }}>
          Añadir
        </button>
      </form>
      <ul>
        {listaTareas.map((t, index) => (
          <li key={index} style={{ display: "flex", justifyContent: "space-between", padding: "4px 0" }}>
            {t}
            <button onClick={() => eliminarTarea(index)} style={{ color: "red", marginLeft: "10px" }}>Eliminar</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Ejercicio3;
