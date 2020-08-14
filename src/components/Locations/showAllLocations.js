import React, { Fragment } from "react";

import { Grid, Typography, Button } from "@material-ui/core";

import useStyles from "./styles";
import LocationListLayout from "./LocationListLayout";

const ShowAllLocations = (props) => {
  const classes = useStyles();
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
      <div className={classes.pages}>
        <Button onClick={prevPageHandler}>prev</Button>
        <Button onClick={nextPageHandler}>next</Button>
      </div>
      <Grid container spacing={4} className={classes.container} style={{}}>
        {locationListCard}
      </Grid>

      <div className={classes.pages}>
        <Typography>Pg {page}</Typography>
      </div>
    </div>
  );
};

export default ShowAllLocations;
