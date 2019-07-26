import React from "react";
import {
  Button,
  Container,
  Grid,
  Typography,
  Box,
  Paper
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import portfolioData from "./portfolioData";

const useStyles = makeStyles(theme => ({
  box: {
    backgroundColor: "rgba(255, 255, 255, 0.9)",
    [theme.breakpoints.up("sm")]: {
      margin: "0 5em"
    }
  },
  button: {
    margin: "0 1em 1em 0",
    [theme.breakpoints.up("sm")]: {
      marginRight: theme.spacing(1)
    }
  },
  container: {
    [theme.breakpoints.up("sm")]: {
      margin: "2em 0"
    }
  },
  image: {
    maxWidth: "100%",
    height: "auto"
  },
  paper: {
    marginBottom: "1.5em",
    paddingLeft: ".5em",
    [theme.breakpoints.up("sm")]: {
      margin: "1.5em 2.5em",
      padding: "2em"
    }
  },
  projectTitle: {
    fontWeight: 600,
    fontStyle: "italic"
  },
  text: {
    fontFamily: "Raleway",
    color: theme.palette.primary.dark
  },
  title: {
    fontFamily: "Arima Madurai",
    color: theme.palette.primary.dark
  }
}));

const Portfolio = () => {
  const classes = useStyles();

  return (
    <Box className={classes.box}>
      <Container className={classes.container}>
        <Typography
          variant="h4"
          align="left"
          className={classes.title}
          gutterBottom
        >
          Portfolio
        </Typography>

        <div className={classes.div}>
          {portfolioData.map(portfolio => (
            <Paper className={classes.paper} key={portfolio.project}>
              <Grid container className={classes.grid}>
                <Grid item container spacing={2}>
                  <Grid
                    item
                    xs={12}
                    lg={6}
                    container
                    direction="column"
                    spacing={2}
                  >
                    <Grid item xs>
                      <Typography
                        gutterBottom
                        variant="h6"
                        className={classes.projectTitle}
                      >
                        {portfolio.project}
                      </Typography>
                      <Typography variant="body2" gutterBottom>
                        {portfolio.description}
                      </Typography>
                    </Grid>
                    <Grid item>
                      <Typography
                        variant="subtitle1"
                        color="textSecondary"
                        gutterBottom
                      >
                        {portfolio.languages}
                      </Typography>
                      <Button
                        variant="outlined"
                        target="_blank"
                        rel="noopener noreferrer"
                        href={portfolio.link}
                        className={classes.button}
                        size="small"
                      >
                        Link
                      </Button>
                      <Button
                        variant="outlined"
                        target="_blank"
                        rel="noopener noreferrer"
                        href={portfolio.github}
                        className={classes.button}
                        size="small"
                      >
                        Github
                      </Button>
                    </Grid>
                  </Grid>
                  <Grid item xs={12} lg={6}>
                    <img
                      className={classes.image}
                      alt={portfolio.title}
                      src={portfolio.img}
                    />
                  </Grid>
                </Grid>
              </Grid>
            </Paper>
          ))}
        </div>
      </Container>
    </Box>
  );
};

export default Portfolio;
