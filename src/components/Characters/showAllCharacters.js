import React, { Fragment } from "react";

import { Grid, Typography, Button } from "@material-ui/core";

import useStyles from "./styles";
import LayoutForCharacters from "./LayoutForCharacters";

const ShowAllCharacters = (props) => {
  const classes = useStyles();
  const { data, prevPageHandler, nextPageHandler, page } = props;

  const characterCard = data.map((propsObject, index) => {
    const combinedProps = { ...props, ...propsObject };
    return (
      <Fragment key={index}>
        <Grid item xs={12} sm={6} md={4}>
          <LayoutForCharacters {...combinedProps} />
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
      <Grid container spacing={4} style={{ padding: "4%" }}>
        {characterCard}
      </Grid>
      <div className={classes.pages}>
        <Typography>Pg{page}</Typography>
      </div>
    </div>
  );
};

export default ShowAllCharacters;
