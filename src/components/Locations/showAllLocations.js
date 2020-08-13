import React, { Fragment } from "react";

import { Grid } from "@material-ui/core";

import LocationListLayout from "./LocationListLayout";

const ShowAllLocations = (props) => {
  const { data, prevPageHandler, nextPageHandler, page } = props;
  const locationListCard = data.map((propsObject, index) => {
    return (
      <Fragment key={index}>
        <Grid item xs={12} sm={6} md={4}>
          <LocationListLayout {...propsObject} />
        </Grid>
      </Fragment>
    );
  });
  return (
    <div>
      {" "}
      <div>
        <Grid container spacing={4} style={{ padding: "4%" }}>
          {locationListCard}
        </Grid>
        <h5>Page no.{page}</h5>
        <button onClick={prevPageHandler}>prev</button>
        <button onClick={nextPageHandler}>next</button>
      </div>
    </div>
  );
};

export default ShowAllLocations;
