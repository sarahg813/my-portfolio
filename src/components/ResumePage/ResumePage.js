import React from "react";
import { TitleComponent } from "../tools/TitleComponent";
import { frontend, backend, other } from "../../data/resumeData";
import { Container } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ResumePage = () => {
  return (
    <Container className="resume-root">
      <TitleComponent title="Résumé | Sarah Goon's Portfolio" />
      <Container className="resume">
        <div className="resume-header">
          <div className="resume-header-title">
            <h2>SARAH GOON</h2>
          </div>
          <div className="resume-header-info">
            <p>
              <FontAwesomeIcon icon="map-pin" /> Brooklyn, NY
            </p>
            <p>
              <a
                href="mailto:goon.sarah@gmail.com"
                target="_top"
                aria-label="email"
                className="resume-link"
              >
                <FontAwesomeIcon icon="envelope" /> goon.sarah&#64;gmail.com
              </a>
            </p>
            <p>
              <a
                href="https://www.sarahg.me"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="website"
                className="resume-link"
              >
                <FontAwesomeIcon icon="link" /> www.sarahg.me
              </a>
            </p>
            <p>
              <a
                href="https://github.com/sarahg813"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Github"
                className="resume-link"
              >
                <FontAwesomeIcon icon={["fab", "github"]} />{" "}
                github.com/sarahg813
              </a>
            </p>
            <p>
              <a
                href="https://linkedin.com/in/sarahgoon"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="resume-link"
              >
                <FontAwesomeIcon icon={["fab", "linkedin"]} />{" "}
                linkedin.com/in/sarahgoon
              </a>
            </p>
          </div>
        </div>
        <div className="resume-subheader">
          <p>
            Mission-driven Full Stack Web Developer with a life-long dedication
            to learning. Intrinsically motivated to improve daily-life through
            technology. Adept at incorporating technology to find scalable and
            efficient solutions.
          </p>
        </div>
        <div className="resume-body">
          <div className="resume-body-main">
            <div className="resume-experience">
              <div className="resume-body-field">
                <h4>EXPERIENCE</h4>
              </div>
              <div>
                <p className="bold project-title">
                  Suite Meraki{" "}
                  <span className="italic">&mdash; Frontend Developer</span>
                </p>
                <p className="subtext">
                  <a
                    href="https://suitemeraki.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="suite-meraki link"
                    className="resume-link"
                  >
                    suitemeraki.com
                  </a>
                  <br />

                  <a
                    href="https://github.com/sarahg813/suite-meraki-site"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="suite-meraki link"
                    className="resume-link"
                  >
                    github.com/sarahg813/suite-meraki-site
                  </a>
                </p>
                <ul>
                  <li>
                    Developed &amp; UI designed this website for a hair &amp;
                    beauty salon
                  </li>
                  <li>Used SEO best practices to attract new customers</li>
                  <li>
                    Utilized AWS S3, Route 53, and Cloudfront to ensure fast and
                    secure content delivery
                  </li>
                  <li>Built with React.js &amp; Material-UI, hosted on AWS</li>
                </ul>
              </div>
            </div>
            <div className="resume-projects">
              <div className="resume-body-field">
                <h4>PROJECTS</h4>
              </div>
              <div>
                <p className="bold project-title">Poledex</p>
                <p className="subtext">
                  <a
                    href="https://poledex.herokuapp.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="suite-meraki link"
                    className="resume-link"
                  >
                    poledex.herokuapp.com
                  </a>
                  <br />

                  <a
                    href="https://github.com/sarahg813/mern-poledex"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="suite-meraki link"
                    className="resume-link"
                  >
                    github.com/sarahg813/mern-poledex
                  </a>
                </p>
                <ul>
                  <li>A directory of pole studios in the Mid-Atlantic</li>
                  <li>
                    Developed and UI designed this full-stack app for the public
                    to easily find a studio, and the admin can log in to create,
                    edit or delete studio listings
                  </li>
                  <li>
                    Built with MERN (MongoDB Atlas, ExpressJS, ReactJS, NodeJS),
                    Redux, Mongoose, Reactstrap (Bootstrap Components), Sass,
                    JSON Web Token (JWT)
                  </li>
                </ul>
              </div>
              <div>
                <p className="bold project-title">World Travel Tracker</p>
                <p className="subtext">
                  <a
                    href="https://crud-travel-tracker.herokuapp.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="suite-meraki link"
                    className="resume-link"
                  >
                    crud-travel-tracker.herokuapp.com
                  </a>
                  <br />

                  <a
                    href="https://github.com/sarahg813/crud-travel-tracker"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="suite-meraki link"
                    className="resume-link"
                  >
                    github.com/sarahg813/crud-travel-tracker
                  </a>
                </p>
                <ul>
                  <li>
                    A CRUD (Create, Read, Update, and Delete) web app to track
                    your travels
                  </li>
                  <li>Built with React.js, React Hooks, and Sass</li>
                </ul>
              </div>
            </div>
            <div>
              <div className="resume-body-field ">
                <h4>EDUCATION</h4>
              </div>
              <div className="aws-container">
                <div className="aws-info">
                  <p>
                    <span className="bold">
                      AWS Certified Cloud Practioner{" "}
                    </span>
                    <br />
                    Validation Number: G74TKPLKPEFEQRKJ
                  </p>
                </div>
                <div className="aws-badge">
                  <a
                    href="https://www.youracclaim.com/badges/cb7bb720-fb01-4b90-a511-2f6270dba3d4/public_url"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="aws ccp badge"
                    className="resume-link"
                  >
                    <img
                      src="/images/resume-img/aws-ccp.png"
                      alt="AWS CCP Badge"
                    />
                  </a>
                </div>
              </div>
              <div>
                <p>
                  <span className="bold">UC Berkeley Extension</span>
                  <br />
                  Full Stack Web Development Certificate <br />
                  <span className="subtext">November 2018, San Francisco</span>
                </p>
              </div>
              <div>
                <p>
                  <span className="bold">Hunter College</span>
                  <br />
                  Bachelor of Arts <br />
                  <span className="subtext">August 2010, New York</span>
                </p>
              </div>
            </div>
          </div>
          <div className="resume-body-side">
            <div className="resume-body-field ">
              <h4>TECHNICAL SKILLS</h4>
            </div>
            <div>
              <p className="bold">Frontend</p>
              <div>
                <ul className="resume-body-side-skills">
                  {frontend.map((skill) => (
                    <li>{skill.skill}</li>
                  ))}
                </ul>
              </div>
            </div>
            <div>
              <p className="bold">Backend</p>
              <div>
                <ul className="resume-body-side-skills">
                  {backend.map((skill) => (
                    <li>{skill.skill}</li>
                  ))}
                </ul>
              </div>
            </div>
            <div>
              <p className="bold">Other</p>
              <div>
                <ul className="resume-body-side-skills">
                  {other.map((skill) => (
                    <li>{skill.skill}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </Container>
  );
};

export default ResumePage;
