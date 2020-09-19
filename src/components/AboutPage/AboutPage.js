import React from "react";
import { TitleComponent } from "../tools/TitleComponent";
import tileData from "../../data/tileData";

const AboutPage = () => {
  return (
    <div className="about-root">
      <TitleComponent title="About | Sarah Goon's Portfolio" />
      <div>
        <div>
          <h3>Hi! I'm a Full Stack Web Developer based in NYC.</h3>
          <p>
            The reason why I love developing is because of the gratifying
            results. Every little challenge I face while working on a project
            brings a great "woohoo!" when those challenges get solved.
          </p>
          <p>
            I completed the UC Berkeley Extension Full Stack Web Developer
            Bootcamp in 2018, and I've been continuously learning new things
            about code and working on passion projects.
          </p>
          <p>
            I also passed the AWS Certified Cloud Practioner exam in August
            2020.
          </p>
          <p>
            Proficient in a wide array of scripting languages and frameworks
            which include:
          </p>
        </div>
        <div className="tiles-container">
          {tileData.map((tile) => (
            <div className="tile-div" key={tile.img}>
              <img src={tile.img} alt={tile.title} className="tile-img" />
              <p>{tile.name}</p>
            </div>
          ))}
        </div>
        <div>
          <p>
            When I'm not coding, you can generally find me either at a pole
            studio dancing and learning new tricks, spending time with my
            boyfriend, or out on a stroll with my dog, Opie.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
