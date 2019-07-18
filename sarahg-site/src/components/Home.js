import React from "react";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import "../styles.scss";

const useStyles = makeStyles(theme => ({
  home: {
    display: "flex",
    alignItems: "center",
    flexGrow: "1"
  }
}));

const Home = () => {
  const classes = useStyles();
  return (
    <div className={classes.home}>
      <h1>Sarah Goon</h1>
    </div>
  );
};

export default Home;
