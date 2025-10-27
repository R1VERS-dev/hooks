import { useState } from "react";

function useForm(valorInicial = {}) {
  const [form, setForm] = useState(valorInicial);

  // Cambia solo el campo que se modifica, y mantiene el resto
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm(f => ({ ...f, [name]: value }));
  };

  return [form, handleChange];
}

export default useForm;
