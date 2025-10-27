import Saludo from './components/Saludo';
import './App.css';
import Ejercicio1 from './components/Ejercicio1';
import Ejercicio2 from './components/Ejercicio2';
import Ejercicio3 from './components/Ejercicio3';


function App() {
  return (
    <div className="App">
      <h1>Mis ejercicios con Hooks😁</h1>


      <Saludo />

      <Ejercicio1 />
      <Ejercicio2 />
      <Ejercicio3 />
     

    </div>
  );
}

export default App;
