import React, { Fragment, useEffect, useState, useCallback } from "react";

import axios from "axios";

import { Grid, Typography, Button, TextField } from "@material-ui/core";

import useStyles from "./styles";
import LocationListLayout from "./LocationListLayout";

const ShowAllLocations = (props) => {
  const classes = useStyles();
  const [info, setInfo] = useState({});
  const [data, setData] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [page, setPage] = useState(1);

  const fetchData = useCallback(async () => {
    const result = await axios(
      `https://rickandmortyapi.com/api/location/?page=${page}&name=${searchQuery}`
    );

    setInfo(result.data.info);
    setData(result.data.results);
  }, [page, searchQuery]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  const nextPageHandler = () => {
    return page < info.pages ? setPage(page + 1) : setPage(1);
  };

  const prevPageHandler = () => {
    return page > 1 ? setPage(page - 1) : setPage(info.pages);
  };

  const searchSubmit = (e) => {
    e.preventDefault();
    setSearchQuery(e.target.value);
  };

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
      <TextField
        id="filled-full-width"
        label="search for a character..."
        onChange={searchSubmit}
        className={classes.textfield}
        placeholder="search for a character..."
        fullWidth
        margin="normal"
        variant="filled"
      />
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
