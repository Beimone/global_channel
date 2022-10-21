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

const useStyles = makeStyles(({ spacing }) => ({
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
}));
const CardChannel = ({ canales }) => {
  const [modal, setModal] = useState(false);

  const classes = useStyles();
  const handleModal = () => {
    setModal(!modal);
  };

  return (
    <section>
      <Grid container className={classes.espacio} justifyContent="center">
        {!canales ? (
          <BeatLoader color="#3667d6" className="loading" lengthtype="120" />
        ) : (
          canales.map((canal) => {
            return (
              <article>
                <Card key={canal.id} className={classes.root}>
                  <CardActionArea onClick={handleModal}>
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
        )}
      </Grid>
      <Modal
        open={modal}
        onClose={handleModal}
        className={classes.modal}
        closeAfterTransition
        BackdropProps={{
          timeout: 500,
        }}
      >
        <CardDetails />
      </Modal>
    </section>
  );
};
export default CardChannel;
