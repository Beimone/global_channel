import { Link } from "react-router-dom";

import {
  AppBar,
  Button,
  Container,
  Grid,
  makeStyles,
  Toolbar,
  Typography,
} from "@material-ui/core/";

// import WbIncandescentIcon from "@material-ui/icons/WbIncandescent";
import logo from "../logo.svg";

const useStyle = makeStyles(({ spacing, palette, shadows }) => ({
  root: {
    flexGrow: 1,
  },
  header: {
    padding: spacing(1, 0),
  },

  headerItem: {
    display: "flex",
    columnGap: spacing(2),
    padding: spacing(1, 0),
  },
  headerRight: {
    display: "flex",
    flexWrap: "nowrap",
    justifyContent: "flex-end",
    columnGap: spacing(2),
    rowGap: spacing(1),
  },
  logo: {
    white: "60px",
    height: "60px",
  },
  colorWhite: {
    color: palette.common.white,
  },
  btnUnderlineNone: {
    textDecoration: "none",
  },
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  modalSection: {
    maxWidth: "80%",
    backgroundColor: palette.common.white,
    boxShadow: shadows[5],
    padding: spacing(7, 4),
    borderRadius: spacing(3),
  },
  formButton: {
    display: "flex",
    justifyContent: "center",
  },
  formButtonCancel: {
    maxWidth: "70%",
    width: "100%",
    borderRadius: spacing(2.5),
  },
}));

const Header = () => {
  const classes = useStyle();

  return (
    <>
      <AppBar position="sticky" className={classes.header}>
        <Container>
          <Toolbar disableGutters>
            <Grid container justifyContent="space-between">
              <Grid
                container
                item
                sm={6}
                xs={12}
                className={classes.headerItem}
                alignItems="center"
              >
                <Link to="/">
                  <img className={classes.logo} src={logo} alt="logo" />
                </Link>
                <span>
                  <Link to="/" className={classes.btnUnderlineNone}>
                    <Typography className={classes.colorWhite} variant="h6">
                      Global <code>Channel</code>
                    </Typography>
                  </Link>
                </span>
              </Grid>
              <Grid
                container
                item
                sm={6}
                xs={12}
                className={(classes.headerItem, classes.headerRight)}
                alignItems="center"
              >
                <Link
                  to="/contacto"
                  component="button"
                  align="right"
                  className={classes.colorWhite}
                >
                  Contactar con el administrador
                </Link>

                <Link to="/login" className={classes.btnUnderlineNone}>
                  <Button variant="contained" color="secondary">
                    Iniciar sesión
                  </Button>
                </Link>
                {/* <WbIncandescentIcon /> */}
              </Grid>
            </Grid>
          </Toolbar>
        </Container>
      </AppBar>
    </>
  );
};
export default Header;
