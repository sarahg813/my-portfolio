import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { Container, CssBaseline } from "@material-ui/core";
import { makeStyles, MuiThemeProvider } from "@material-ui/core/styles";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import theme from "./theme";

library.add(fab, faEnvelope);

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    flexDirection: "column",
    height: "100%",
    minHeight: "100vh",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center center",
    [theme.breakpoints.down("sm")]: {
      backgroundImage: 'url("/images/meandopie-sm.jpg")'
    },
    [theme.breakpoints.up("sm")]: {
      backgroundImage: 'url("/images/meandopie-md.jpg")'
    },
    [theme.breakpoints.up("md")]: {
      backgroundImage: 'url("/images/meandopie-lg.jpg")'
    },
    [theme.breakpoints.up("xl")]: {
      backgroundImage: 'url("/images/meandopie-xl.jpg")'
    }
  },
  main: {
    display: "flex",
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2),
    flex: "1 0 auto"
  }
}));

function App() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <MuiThemeProvider theme={theme}>
        <BrowserRouter>
          <div className={classes.root}>
            <CssBaseline />
            <Navbar />
            <Container component="main" className={classes.main}>
              <Route exact path="/" component={Home} />
              <Route path="/about" component={About} />
              <Route path="/portfolio" component={Portfolio} />
              <Route path="/contact" component={Contact} />
            </Container>
            <Footer />
          </div>
        </BrowserRouter>
      </MuiThemeProvider>
    </React.Fragment>
  );
}

export default App;
