import React, { Fragment } from "react";

import { Grid } from "@material-ui/core";

import LayoutForCharacters from "./LayoutForCharacters";
const ShowAllCharacters = (props) => {
  const { data, prevPageHandler, nextPageHandler, page } = props;

  const characterCard = data.map((propsObject, index) => {
    return (
      <Fragment key={index}>
        <Grid item xs={12} sm={6} md={4}>
          <LayoutForCharacters {...propsObject} />
        </Grid>
      </Fragment>
    );
  });

  return (
    <div>
      <Grid container spacing={4} style={{ padding: "4%" }}>
        {characterCard}
      </Grid>
      <h5>Page no.{page}</h5>
      <button onClick={prevPageHandler}>prev</button>
      <button onClick={nextPageHandler}>next</button>
    </div>
  );
};

export default ShowAllCharacters;
