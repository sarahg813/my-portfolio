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

const styleSheet = {
  appbar: {
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
    margin: 1
  },
  toolbar: {
    flexWrap: "wrap"
  },
  toolbarTitle: {
    flexGrow: 1
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
    return (
      <div>
        <AppBar>
          <Toolbar>
            <Grid
              container
              direction="row"
              justify="space-between"
              alignItems="center"
            >
              <MenuIcon
                className={this.props.classes.sideBarIcon}
                onClick={() => {
                  this.setState({ drawer: true });
                }}
              />

              <Typography color="inherit" variant="headline">
                Title
              </Typography>
              <Typography color="inherit" variant="headline" />
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
            <MenuList className={this.props.classes.list}>
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
          <Typography
            variant="h6"
            color="inherit"
            noWrap
            className={classes.toolbarTitle}
          >
            Company name
          </Typography>
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
