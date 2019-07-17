import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { Container, CssBaseline, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    flexDirection: "column",
    minHeight: "100vh"
  },
  main: {
    marginTop: theme.spacing(8),
    marginBottom: theme.spacing(2)
  }
}));

function App() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <BrowserRouter>
        <div className={classes.root}>
          <CssBaseline />
          <Navbar />
          <Container component="main" className={classes.main} maxWidth="sm">
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/portfolio" component={Portfolio} />
            <Route path="/contact" component={Contact} />
          </Container>
          <Footer />
        </div>
      </BrowserRouter>
    </React.Fragment>
  );
}

export default App;
