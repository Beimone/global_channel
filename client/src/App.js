import Footer from "./components/Footer";
import Header from "./components/Header";
import About from "./components/About";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import SignUp from "./components/Account/SignUp";
import Login from "./components/Account/Login";
import { makeStyles } from "@material-ui/core";
const useStyle = makeStyles(() => ({
  main: {
    display: "flex",
    minHeight: "80.2vh",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
}));

function App() {
  const classes = useStyle();
  return (
    <>
      <Header />
      <main className={classes.main}>
        <Routes>
          <Route exact path="/" element={<About />} />
          <Route path="/contacto" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default App;
