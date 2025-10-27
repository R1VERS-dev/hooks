import { useState, useEffect } from "react";

function useLocalStorageList(clave, valorInicial = []) {
  // Inicializa el estado desde localStorage o con el valor inicial
  const [lista, setLista] = useState(() => {
    const almacenado = localStorage.getItem(clave);
    return almacenado ? JSON.parse(almacenado) : valorInicial;
  });

  // Sincroniza con localStorage
  useEffect(() => {
    localStorage.setItem(clave, JSON.stringify(lista));
  }, [clave, lista]);

  return [lista, setLista];
}

export default useLocalStorageList;
