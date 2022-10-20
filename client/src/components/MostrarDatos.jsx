import { Typography } from "@material-ui/core";
import React, { useState, useEffect } from "react";
import CardChannel from "./Item/CardChannel";

const MostrarDatos = () => {
  const [canales, setCanales] = useState();

  //Funcion getData crea la llamada a la URL de ApiChannel

  const getData = async () => {
    const response = await fetch("http://localhost:5001/api/channels");
    const result = await response.json();
    setCanales(result);
  };

  //Utilizamos el metodo de useEffect para para hacer la llamada, y que se ejecute una sola vez
  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <Typography variant="h2">Listado de canales</Typography>
      <CardChannel canales={canales} />
    </>
  );
};

export default MostrarDatos;
