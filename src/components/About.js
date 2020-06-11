import React from "react";
import {
  Container,
  GridList,
  GridListTile,
  Typography,
  Box,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import tileData from "./tileData";

const useStyles = makeStyles((theme) => ({
  box: {
    backgroundColor: "rgba(255, 255, 255, 0.9)",
    [theme.breakpoints.up("sm")]: {
      margin: "0 5em",
    },
  },
  container: {
    margin: "2em 0",
  },
  div: {
    width: "100%",
    margin: "auto",
    paddingBottom: "1em",
    [theme.breakpoints.up("sm")]: {
      width: "50%",
    },
  },
  image: {
    width: "45px",
    height: "auto",
    [theme.breakpoints.up("sm")]: {
      width: "75px",
    },
  },
  text: {
    fontFamily: "Raleway",
    color: theme.palette.primary.dark,
  },
  title: {
    fontFamily: "Arima Madurai",
    color: theme.palette.primary.dark,
  },
  tile: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
}));

const About = () => {
  const classes = useStyles();

  return (
    <Box className={classes.box}>
      <Container className={classes.container}>
        <Typography
          variant="h4"
          align="center"
          className={classes.title}
          gutterBottom
        >
          Hi! I am a Full Stack Web Developer based in NYC.
        </Typography>
        <Typography
          variant="body1"
          align="center"
          paragraph
          className={classes.text}
        >
          The reason why I love developing is because of the gratifying results.
          Every little challenge I face while working on a project brings a
          great "woohoo!" when those challenges get solved.
        </Typography>
        <Typography
          variant="body1"
          align="center"
          paragraph
          className={classes.text}
        >
          I completed the UC Berkeley Extension Full Stack Web Developer
          Bootcamp in 2018, and I've been continuously learning new things about
          code and working on passion projects.
        </Typography>
        <Typography
          variant="body1"
          align="center"
          paragraph
          className={classes.text}
        >
          Proficient in a wide array of scripting languages and frameworks which
          include:
        </Typography>

        <div className={classes.div}>
          <GridList
            cellHeight="auto"
            cols={6}
            className={classes.grid}
            spacing={2}
          >
            {tileData.map((tile) => (
              <GridListTile key={tile.img} cols={1}>
                <div className={classes.tile}>
                  <img
                    src={tile.img}
                    alt={tile.title}
                    className={classes.image}
                  />
                  <p>{tile.name}</p>
                </div>
              </GridListTile>
            ))}
          </GridList>
        </div>

        <Typography
          variant="body1"
          align="center"
          paragraph
          className={classes.text}
        >
          When I'm not coding, you can generally find me either at a pole studio
          dancing and learning new tricks, spending time with my boyfriend, or
          out on a stroll with my dog, Opie.
        </Typography>
      </Container>
    </Box>
  );
};

export default About;
