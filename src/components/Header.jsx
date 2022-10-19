import {
  AppBar,
  Button,
  Container,
  Grid,
  makeStyles,
  Toolbar,
  InputBase,
  alpha,
  Typography,
} from "@material-ui/core/";
import SearchIcon from "@material-ui/icons/Search";
// import WbIncandescentIcon from "@material-ui/icons/WbIncandescent";
import logo from "../logo.svg";

const useStyle = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  header: {
    padding: theme.spacing(1, 0),
  },

  headerItem: {
    display: "flex",
    columnGap: theme.spacing(2),
    padding: theme.spacing(1, 0),
  },
  headerRight: {
    display: "flex",
    justifyContent: "flex-end",
    columnGap: theme.spacing(2),
    rowGap: theme.spacing(1),
  },
  logo: {
    white: "60px",
    height: "60px",
  },
  search: {
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "auto",
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  inputRoot: {
    color: "inherit",
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },
}));

const Header = () => {
  const classes = useStyle();

  const search = (
    <div className={classes.search}>
      <div className={classes.searchIcon}>
        <SearchIcon />
      </div>
      <InputBase
        placeholder="Buscar…"
        classes={{
          root: classes.inputRoot,
          input: classes.inputInput,
        }}
        inputProps={{ "aria-label": "search" }}
      />
    </div>
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
                {search}
                <Button variant="contained" color="secondary">
                  Login
                </Button>

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
