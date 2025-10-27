import { useState } from "react";

function useToggle(valorInicial = false) {
 
  const [valor, setValor] = useState(valorInicial);

  // Cambia el valor al opuesto
  const alternar = () => setValor(v => !v);

  
  return [valor, alternar];
}

export default useToggle;
