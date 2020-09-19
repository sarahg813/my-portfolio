import React from "react";
import { Helmet } from "react-helmet";

const TitleComponent = ({ title }) => {
  var defaultTitle = "Sarah Goon's Portfolio";
  return (
    <Helmet>
      <title>{title ? title : defaultTitle}</title>
    </Helmet>
  );
};

export { TitleComponent };
