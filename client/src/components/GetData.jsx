import { Typography } from "@material-ui/core";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import CardChannel from "../components/Item/CardChannel";

const GetData = () => {
  const [canales, setCanales] = useState([]);

  const { search, typeCards } = useParams();

  //Funcion getData crea la llamada a la URL de ApiChannel

  const getData = async () => {
    const response = await fetch(
      `http://localhost:5001/api/search/${typeCards}/${search}`
    );
    const result = await response.json();
    setCanales(result);
  };

  //Utilizamos el metodo de useEffect para para hacer la llamada, y que se ejecute una sola vez
  useEffect(() => {
    getData();
  }, [typeCards, search]);

  return (
    <>
      <Typography variant="h2">Listado de canales</Typography>
      <CardChannel canales={canales} />
    </>
  );
};

export default GetData;
