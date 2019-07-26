import React from "react";
import { Grid, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const useStyles = makeStyles(theme => ({
  contact: {
    flexGrow: "1"
  },
  icons: {
    fontSize: "1.5em",
    margin: "0 1em",
    color: theme.palette.primary.main
  },
  text: {
    fontFamily: "Raleway",
    color: theme.palette.primary.main,
    lineHeight: 3
  },
  title: {
    fontFamily: "Petit Formal Script",
    color: theme.palette.primary.main,
    fontWeight: 500
  }
}));

const Contact = () => {
  const classes = useStyles();
  return (
    <Grid
      container
      justify="center"
      alignItems="center"
      direction="column"
      className={classes.contact}
    >
      <Typography variant="h2" className={classes.title}>
        Let's chat!
      </Typography>
      <Typography className={classes.text}>
        <FontAwesomeIcon icon="envelope" /> goon.sarah&#64;gmail.com
      </Typography>
      <div>
        <a
          href="https://github.com/sarahg813"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon className={classes.icons} icon={["fab", "github"]} />
        </a>
        <a
          href="https://linkedin.com/in/sarahgoon"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon
            className={classes.icons}
            icon={["fab", "linkedin"]}
          />
        </a>
        <a
          href="https://angel.co/sarah-goon"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon
            className={classes.icons}
            icon={["fab", "angellist"]}
          />
        </a>
      </div>
    </Grid>
  );
};

export default Contact;
