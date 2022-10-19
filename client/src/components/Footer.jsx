import { Container, makeStyles } from "@material-ui/core";

const useStyle = makeStyles(({ spacing, palette }) => ({
  root: {},
  footer: {
    height: spacing(11),
    backgroundColor: palette.primary.main,
    color: palette.common.white,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
  },
  textNormal: {
    fontStyle: "normal",
  },
}));

const Footer = () => {
  const classes = useStyle();
  return (
    <footer className={classes.footer}>
      <Container>
        <small>
          &copy; 2022 <strong>GLobal Channel</strong> -
          <em className={classes.textNormal}>Todos los Derechos Reservados</em>
        </small>
        <br />
        <small>
          <cite>Jorge Sepúlveda </cite>
          and
          <cite> Jhans de la Cruz</cite>
        </small>
      </Container>
    </footer>
  );
};
export default Footer;
