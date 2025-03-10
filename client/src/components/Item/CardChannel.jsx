import BeatLoader from "react-spinners/BeatLoader";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import { useState } from "react";
import { Modal } from "@material-ui/core";
import CardDetails from "./CardDetails";

const useStyles = makeStyles(({ palette, spacing }) => ({
  root: {
    minWidth: 300,
    minHeight: 200,
    alignItems: "center",
  },
  numero_canal: {
    justifyContent: "center",
  },
  typography: {
    h4: 10,
  },
  espacio: {
    paddingTop: spacing(5),
    gap: spacing(1.2),
  },
  btnDetalle: {
    justifyContent: "center",
  },
  picture: {
    display: "flex",
    justifyContent: "center",
    alignContent: "center",
    minHeight: "100px",
    objectFit: "contain",
  },
  pictureImg: {
    maxWidth: "100px",
  },
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  subTitle: {
    color: palette.text.secondary,
    margin: spacing(3, 5),
  },
}));

const CardChannel = ({ canales }) => {
  const [modal, setModal] = useState(false);
  const [id, setId] = useState("");

  const classes = useStyles();
  const handleModal = (prop) => (event) => {
    setId(prop);
    setModal(!modal);
  };

  //Se ordenan el array de canales por numero del canal
  canales.sort((item, itemNext) => {
    if (item.numero < itemNext.numero) {
      return -1;
    }
    if (item.numero > itemNext.numero) {
      return 1;
    }
    return 0;
  });

  const ConditionalTitle = ({ length, name }) => {
    switch (length) {
      case 0:
        return (
          <Typography variant="h2" className={classes.subTitle}>
            <b>Canal: </b> No encontrado
          </Typography>
        );
      case 1:
        return (
          <Typography variant="h2" className={classes.subTitle}>
            <b>Canal: </b>
            {name}
          </Typography>
        );

      default:
        return (
          <Typography variant="h2" className={classes.subTitle}>
            {" "}
            <b>Listado de canales</b>
          </Typography>
        );
    }
  };

  return (
    <section>
      {canales.length === 1 ? (
        <ConditionalTitle length={1} name={canales[0].nombre} />
      ) : (
        <ConditionalTitle length={canales.length} />
      )}

      <Grid container className={classes.espacio} justifyContent="center">
        {!canales ? (
          <BeatLoader color="#3667d6" className="loading" lengthtype="120" />
        ) : (
          canales
            .map((canal) => {
              return (
                <article key={canal.id}>
                  <Card className={classes.root}>
                    <CardActionArea onClick={handleModal(`${canal.id}`)}>
                      <CardContent>
                        <Typography
                          align="center"
                          variant="h4"
                          className={classes.h4}
                        >
                          {canal.nombre}
                        </Typography>
                      </CardContent>
                      <Typography
                        className={classes.numero__canal}
                        align="center"
                      >
                        {canal.numero}
                      </Typography>
                      <picture className={classes.picture}>
                        <img
                          className={classes.pictureImg}
                          src={canal.imagen}
                          alt={canal.nombre}
                        ></img>
                      </picture>
                      <CardContent align="center">
                        Señal de {canal.tipo}
                      </CardContent>
                    </CardActionArea>
                  </Card>
                </article>
              );
            })
            .sort()
        )}
      </Grid>
      <Modal
        open={modal}
        onClose={handleModal("")}
        className={classes.modal}
        closeAfterTransition
        BackdropProps={{
          timeout: 500,
        }}
      >
        <CardDetails id={id} />
      </Modal>
    </section>
  );
};
export default CardChannel;
