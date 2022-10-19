import { Container } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";

const useStyle = makeStyles(() => ({
  root: {},
  main: {
    height: "100vh",
  },
}));
const Main = () => {
  const classes = useStyle();
  return (
    <main className={classes.main}>
      <Container>
        <p>main</p>
      </Container>
    </main>
  );
};
export default Main;
