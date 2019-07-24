import React from "react";
import {
  Container,
  Grid,
  GridList,
  GridListTile,
  Typography,
  Box,
  Paper
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import tileData from "./tileData";

const useStyles = makeStyles(theme => ({
  about: {
    backgroundColor: "rgba(255, 255, 255, 0.9)"
  },
  container: {
    margin: "2em 0"
  },
  div: {
    width: "50%",
    margin: "auto",
    paddingBottom: "1em",
    [theme.breakpoints.down("sm")]: {
      width: "100%"
    }
  },
  image: {
    width: "75px",
    height: "auto",
    [theme.breakpoints.down("sm")]: {
      width: "45px"
    }
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

const About = () => {
  const classes = useStyles();

  return (
    <Box className={classes.about}>
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
          Every little challenge you face while working on a project brings a
          great "woohoo!" when those challenges get solved.
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
          <GridList cellHeight="auto" cols={5} className={classes.grid}>
            {tileData.map(tile => (
              <GridListTile key={tile.img} cols={1} className={classes.tile}>
                <img
                  src={tile.img}
                  alt={tile.title}
                  className={classes.image}
                />
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
          dancing and learning new tricks, at home/out and about, spending time
          with my boyfriend, or at the dog park with our Lab mix puppy.
        </Typography>
      </Container>
    </Box>
  );
};

export default About;
