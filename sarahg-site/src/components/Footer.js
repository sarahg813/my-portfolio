import React from "react";
import { Container, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  footer: {
    padding: theme.spacing(2),
    marginTop: "auto",
    backgroundColor: "transparent",
    color: "white",
    flexShrink: 0
  },
  footerText: {
    fontFamily: "Raleway"
  }
}));

const Footer = () => {
  const classes = useStyles();
  return (
    <footer className={classes.footer}>
      <Container maxWidth="sm">
        <Typography
          variant="body1"
          align="center"
          className={classes.footerText}
        >
          &copy; 2019
        </Typography>
      </Container>
    </footer>
  );
};

export default Footer;
