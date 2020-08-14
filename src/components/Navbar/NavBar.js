import React from "react";
import { Link } from "react-router-dom";

import { AppBar, Toolbar, Typography } from "@material-ui/core";

import useStyles from "./styles";

const NavBar = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="sticky" className={classes.appbar}>
        <Toolbar variant="dense">
          <img
            className={classes.brand}
            src="https://repository-images.githubusercontent.com/120371205/b6740400-92d4-11ea-8a13-d5f6e0558e9b"
            alt="nothing"
          />
          <Typography className={classes.navlinks}>
            <Link to="/homepage" className={classes.links}>
              Home
            </Link>
          </Typography>
          <Typography className={classes.navlinks}>
            <Link to="/location" className={classes.links}>
              Locations
            </Link>
          </Typography>
          <Typography className={classes.navlinks}>
            <Link to="/episode" className={classes.links}>
              Episodes
            </Link>
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default NavBar;
