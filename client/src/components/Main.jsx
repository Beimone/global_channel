import { Container, Grid, makeStyles, Typography } from "@material-ui/core";
import heroImage from "../img/heroImage.jpg";
import SearchContainer from "./Item/SearchContainer";

const useStyle = makeStyles(({ palette, spacing, breakpoints }) => ({
  root: {},
  hero: {
    width: "100%",
  },
  heroImage: {
    minHeight: "35vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    [breakpoints.up("sm")]: {
      minHeight: "60vh",
    },
    backgroundImage: `url(${heroImage})`,
    backgroundPosition: "center",
    backgroundRrepeat: "no-repeat",
    backgroundSize: "cover",
    padding: spacing(3, 3),
  },
  heroContent: {
    maxWidth: "80%",
    display: "flex",
    flexDirection: "column",
    rowGap: spacing(3),
    justifyContent: "center",
    alignItems: "center",
    [breakpoints.up("lg")]: {
      width: "50%",
    },
  },
  article: {
    height: "90vh",
  },
}));

const Main = () => {
  const classes = useStyle();
  return (
    <main className={classes.root}>
      <Grid className={classes.hero}>
        <article className={classes.heroImage}>
          <div className={classes.heroContent}>
            <Typography variant="h1" align="center">
              Global Channel
            </Typography>
            <SearchContainer />
            <Typography variant="subtitle1" align="center">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Natus
              odio nisi, quibusdam nemo provident impedit quasi.
            </Typography>
          </div>
        </article>
      </Grid>
      <Container>
        <article className={classes.article}></article>
        <p>main</p>
      </Container>
    </main>
  );
};
export default Main;
