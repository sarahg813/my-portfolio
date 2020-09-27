import React from "react";
import { withRouter } from "react-router-dom";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faLink } from "@fortawesome/free-solid-svg-icons";
import MainContainer from "../MainContainer/MainContainer";
import NavBar from "../NavBar";
import Footer from "../Footer";

library.add(fab, faEnvelope, faLink);

const App = (props) => {
  return (
    <div className={props.location.pathname === "/" ? "onlyHome" : "app"}>
      <NavBar />
      <MainContainer />
      <Footer />
    </div>
  );
};

export default withRouter(App);
