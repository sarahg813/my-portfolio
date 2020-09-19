import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { TitleComponent } from "../tools/TitleComponent";

const ContactPage = () => {
  return (
    <div className="contact-root">
      <TitleComponent title="Contact | Sarah Goon's Portfolio" />
      <div>
        <h2>Let's Chat!</h2>
      </div>
      <div>
        <a
          href="mailto:goon.sarah@gmail.com"
          target="_top"
          className="contact-email"
        >
          <FontAwesomeIcon icon="envelope" /> goon.sarah&#64;gmail.com{" "}
        </a>
      </div>
      <div>
        <a
          href="https://github.com/sarahg813"
          target="_blank"
          rel="noopener noreferrer"
          className="contact-icons"
        >
          <FontAwesomeIcon icon={["fab", "github"]} />
        </a>
        <a
          href="https://linkedin.com/in/sarahgoon"
          target="_blank"
          rel="noopener noreferrer"
          className="contact-icons"
        >
          <FontAwesomeIcon icon={["fab", "linkedin"]} />
        </a>
        <a
          href="https://angel.co/sarah-goon"
          target="_blank"
          rel="noopener noreferrer"
          className="contact-icons"
        >
          <FontAwesomeIcon icon={["fab", "angellist"]} />
        </a>
        <a
          href="https://twitter.com/sarahg813"
          target="_blank"
          rel="noopener noreferrer"
          className="contact-icons"
        >
          <FontAwesomeIcon icon={["fab", "twitter"]} />
        </a>
      </div>
    </div>
  );
};

export default ContactPage;
