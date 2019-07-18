import React, { Component } from "react";
import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";
import {
  AppBar,
  Button,
  Toolbar,
  Typography,
  withStyles,
  Grid,
  SwipeableDrawer,
  MenuList,
  MenuItem
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import "../styles.scss";

const styleSheet = {
  appbar: {
    backgroundColor: "transparent"
  },
  mobileBar: {
    backgroundColor: "transparent"
  },
  list: {
    width: 200
  },
  padding: {
    paddingRight: 30,
    cursor: "pointer"
  },
  sideBarIcon: {
    padding: 0,
    color: "white",
    cursor: "pointer"
  },
  button: {
    margin: 1,
    color: "white",
    fontFamily: "Raleway"
  },
  toolbar: {
    flexWrap: "wrap",
    justifyContent: "flex-end"
  }
};

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = { drawerActivate: false, drawer: false };
    this.createDrawer = this.createDrawer.bind(this);
    this.destroyDrawer = this.destroyDrawer.bind(this);
  }

  componentWillMount() {
    if (window.innerWidth <= 600) {
      this.setState({ drawerActivate: true });
    }

    window.addEventListener("resize", () => {
      if (window.innerWidth <= 600) {
        this.setState({ drawerActivate: true });
      } else {
        this.setState({ drawerActivate: false });
      }
    });
  }

  //Mobile Screens
  createDrawer() {
    const { classes } = this.props;
    return (
      <div>
        <AppBar position="static" elevation={0} className={classes.mobileBar}>
          <Toolbar>
            <Grid
              container
              direction="row"
              justify="space-between"
              alignItems="center"
            >
              <MenuIcon
                className={classes.sideBarIcon}
                onClick={() => {
                  this.setState({ drawer: true });
                }}
              />
            </Grid>
          </Toolbar>
        </AppBar>

        <SwipeableDrawer
          open={this.state.drawer}
          onClose={() => {
            this.setState({ drawer: false });
          }}
          onOpen={() => {
            this.setState({ drawer: true });
          }}
        >
          <div
            tabIndex={0}
            role="button"
            onClick={() => {
              this.setState({ drawer: false });
            }}
            onKeyDown={() => {
              this.setState({ drawer: false });
            }}
          >
            <MenuList className={classes.list}>
              <MenuItem component={NavLink} exact to="/" button divider>
                Home
              </MenuItem>
              <MenuItem component={NavLink} to="/about" button divider>
                About
              </MenuItem>
              <MenuItem component={NavLink} to="/portfolio" button divider>
                Portfolio
              </MenuItem>
              <MenuItem component={NavLink} to="/contact" button divider>
                Contact
              </MenuItem>
            </MenuList>
          </div>
        </SwipeableDrawer>
      </div>
    );
  }

  //Non-mobile screens
  destroyDrawer() {
    const { classes } = this.props;
    return (
      <AppBar position="static" elevation={0} className={classes.appbar}>
        <Toolbar className={classes.toolbar}>
          <nav>
            <Button
              component={NavLink}
              exact
              to="/"
              variant="button"
              color="textPrimary"
              className={classes.button}
            >
              Home
            </Button>
            <Button
              component={NavLink}
              to="/about"
              variant="button"
              color="textPrimary"
              className={classes.button}
            >
              About
            </Button>
            <Button
              component={NavLink}
              to="/portfolio"
              variant="button"
              color="textPrimary"
              className={classes.button}
            >
              Portfolio
            </Button>
            <Button
              component={NavLink}
              to="/contact"
              variant="button"
              color="textPrimary"
              className={classes.button}
            >
              Contact
            </Button>
          </nav>
        </Toolbar>
      </AppBar>
    );
  }
  render() {
    return (
      <div>
        {this.state.drawerActivate ? this.createDrawer() : this.destroyDrawer()}
      </div>
    );
  }
}
Navbar.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styleSheet)(Navbar);
