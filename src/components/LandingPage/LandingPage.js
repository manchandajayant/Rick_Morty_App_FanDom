import React from "react";
import { Link } from "react-router-dom";
import { Typography } from "@material-ui/core";

import useStyles from "./Styles";

const LandingPage = () => {
  const classes = useStyles();
  return (
    <div className="bg">
      {" "}
      <div className={classes.div}>
        <Typography variant="h1" className={classes.typography}>
          {" "}
          Wubba lubba dub dub!!
        </Typography>
      </div>
      <div className={classes.div}>
        <Typography variant="h1" className={classes.typography}>
          <Link to="/homepage">GET STARTED</Link>
        </Typography>
      </div>
    </div>
  );
};

export default LandingPage;
