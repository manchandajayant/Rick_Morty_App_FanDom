import React from "react";
import { Link } from "react-router-dom";
import { Typography } from "@material-ui/core";

const LandingPage = () => {
  return (
    <div className="bg">
      {" "}
      <div style={{ display: "flex", justifyContent: "center" }}>
        <Typography
          variant="h1"
          style={{ fontFamily: "Dosis, sans-serif", letterSpacing: "3px" }}
        >
          {" "}
          Wubba lubba dub dub!!
        </Typography>
      </div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <Typography
          variant="h1"
          style={{ fontFamily: "Dosis, sans-serif", letterSpacing: "3px" }}
        >
          <Link to="/homepage">GET STARTED</Link>
        </Typography>
      </div>
    </div>
  );
};

export default LandingPage;
