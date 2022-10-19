import { useState } from "react";
import {
  AppBar,
  Button,
  Container,
  Grid,
  makeStyles,
  Modal,
  Toolbar,
  Typography,
  Link,
} from "@material-ui/core/";
import BlockIcon from "@material-ui/icons/Block";
// import WbIncandescentIcon from "@material-ui/icons/WbIncandescent";
import logo from "../logo.svg";
import SignUp from "./Account/SignUp";
import Login from "./Account/Login";
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
  btnContac: {
    color: palette.common.white,
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
  const [modal, setModal] = useState(false);
  const [isUser, setIsUser] = useState(true);
  console.log(setIsUser, "XXXXXXXX");
  const classes = useStyle();

  const handleModal = () => {
    setModal(!modal);
  };

  const modalBody = (
    <section className={classes.modalSection}>
      {isUser ? <Login /> : <SignUp />}
      <div className={classes.formButton}>
        <Button
          className={classes.formButtonCancel}
          variant="contained"
          color="secondary"
          startIcon={<BlockIcon />}
          size="large"
          onClick={handleModal}
        >
          Cancelar
        </Button>
      </div>
    </section>
  );
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
                <img className={classes.logo} src={logo} alt="logo" />

                <Typography variant="h6">
                  Global <code>Channel</code>
                </Typography>
              </Grid>
              <Grid
                container
                item
                sm={6}
                xs={12}
                className={(classes.headerItem, classes.headerRight)}
                alignItems="center"
              >
                <Link component="button" className={classes.btnContac}>
                  Contactar con el administrador
                </Link>
                <Button
                  variant="contained"
                  color="secondary"
                  onClick={handleModal}
                >
                  Iniciar sesión
                </Button>

                {/* <WbIncandescentIcon /> */}
              </Grid>
            </Grid>
          </Toolbar>
        </Container>
      </AppBar>
      <Modal open={modal} onClose={handleModal} className={classes.modal}>
        {modalBody}
      </Modal>
    </>
  );
};
export default Header;
