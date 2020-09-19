import React from "react";
import { Container } from "reactstrap";
import { TitleComponent } from "../tools/TitleComponent";

const HomePage = () => {
  return (
    <div className="home-root">
      <TitleComponent title="Home | Sarah Goon's Portfolio" />
      <Container className="home-container">
        <div>
          <h1>Sarah Goon</h1>
        </div>
      </Container>
    </div>
  );
};

export default HomePage;
