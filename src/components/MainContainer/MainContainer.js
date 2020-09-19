import React from "react";
import { Route, Switch, withRouter } from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import { Container } from "reactstrap";
import HomePage from "../HomePage";
import AboutPage from "../AboutPage";
import PortfolioPage from "../PortfolioPage";
import ContactPage from "../ContactPage";

const MainContainer = ({ location }) => {
  const currentKey = location.pathname.split("/")[1] || "/";

  return (
    <Container className="main-root">
      <TransitionGroup>
        <CSSTransition key={currentKey} classNames="fade" timeout={300} appear>
          <section className="section-container">
            <Switch location={location}>
              <Route exact path="/" component={HomePage} />
              <Route path="/about" component={AboutPage} />
              <Route path="/portfolio" component={PortfolioPage} />
              <Route path="/contact" component={ContactPage} />
            </Switch>
          </section>
        </CSSTransition>
      </TransitionGroup>
    </Container>
  );
};

export default withRouter(MainContainer);
