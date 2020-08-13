import React, { Fragment } from "react";

import { Grid } from "@material-ui/core";

import EpisodeListLayout from "./EpisodeListLayout";

const ShowAllEpisodes = (props) => {
  const { data, prevPageHandler, nextPageHandler, page } = props;

  const episodeListCard = data.map((propsObject, index) => {
    return (
      <Fragment key={index}>
        <Grid item xs={12} sm={6} md={4}>
          <EpisodeListLayout {...propsObject} />
        </Grid>
      </Fragment>
    );
  });

  console.log(props.data);
  return (
    <div>
      {" "}
      <>
        <Grid container spacing={4} style={{ padding: "4%" }}>
          {episodeListCard}
        </Grid>
        <h5>Page no.{page}</h5>
        <button onClick={prevPageHandler}>prev</button>
        <button onClick={nextPageHandler}>next</button>
      </>
    </div>
  );
};

export default ShowAllEpisodes;
