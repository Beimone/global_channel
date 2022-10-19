import React, { useState, useEffect } from "react";
import BeatLoader from "react-spinners/BeatLoader";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles({
  root: {
    minWidth: 300,
    minHeight:200,
    alignItems: "center",
  },
  numero_canal:{
    justifyContent:'center',

  },
  typography: {
    h4: 10,

  },
  espacio: {
    gap: 10,
  },
});

const MostrarDatos = () => {
  const classes = useStyles();

  const [canales, setCanales] = useState();

  //Funcion getData crea la llamada a la URL de ApiChannel

  const getData = async () => {
    const response = await fetch("http://localhost:5001/api/channels");
    const result = await response.json();
    setCanales(result);
    console.log(result);
  };

  //Utilizamos el metodo de useEffect para para hacer la llamada, y que se ejecute una sola vez
  useEffect(() => {
    getData();
  }, []);

  return (
    //Aqui se crea la card de cada canal
    <div>
      <h1>Listado de canales</h1>
      <br />
      <Grid container className={classes.espacio} justify="center">
        {!canales ? (
          <BeatLoader color="#3667d6" className="loading" LengthType="120" /> 
        ) : (
          canales.map((canal, index) => {
            return (
              <Card key={canal.id} className={classes.root}>
                <CardActionArea>
                  <CardContent>
                    <Typography align = "center" variant="h4" className={classes.h4} >
                      {canal.nombre}
                    </Typography>
                  </CardContent>
                  <Typography className={classes.numero__canal} align = "center">
                    {canal.numero}
                  </Typography>
                  <div className="picture">
                    <img src={canal.imagen} alt={canal.nombre}></img>
                  </div>
                  <CardContent align = "center">Señal de {canal.tipo}</CardContent>
                  <CardActions  className="btn btn-detalle">
                    <Button
                      variant="contained"
                      color="primary"
                      href="#contained-buttons"
                     
                    >
                      Detalle
                    </Button>
                  </CardActions>
                </CardActionArea>
              </Card>
            );
          })
        )}
      </Grid>
    </div>
  );
};

export default MostrarDatos;
