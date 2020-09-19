import React from "react";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardLink,
  CardTitle,
  CardSubtitle,
} from "reactstrap";
import { TitleComponent } from "../tools/TitleComponent";
import portfolioData from "../../data/portfolioData";

const PortfolioPage = () => {
  return (
    <div className="portfolio-root">
      <TitleComponent title="Portfolio | Sarah Goon's Portfolio" />
      <div className="portfolio-title">
        <h2>Portfolio</h2>
      </div>
      <div>
        <div className="cards-container">
          {portfolioData.map((portfolio) => (
            <Card key={portfolio.title}>
              <CardBody>
                <CardTitle>{portfolio.project}</CardTitle>
                <CardImg
                  width="100%"
                  src={portfolio.img}
                  alt={portfolio.title}
                />
              </CardBody>
              <CardBody>
                <CardText>{portfolio.description}</CardText>
                <CardSubtitle>{portfolio.languages}</CardSubtitle>
                <CardLink
                  target="_blank"
                  rel="noopener noreferrer"
                  href={portfolio.link}
                >
                  Link
                </CardLink>
                <CardLink
                  target="_blank"
                  rel="noopener noreferrer"
                  href={portfolio.github}
                >
                  Github
                </CardLink>
              </CardBody>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PortfolioPage;
