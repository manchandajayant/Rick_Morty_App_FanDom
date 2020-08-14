import React, { useEffect, useState, useCallback } from "react";

import axios from "axios";

import { TextField, Typography } from "@material-ui/core";

import ShowAllCharacters from "../Characters/ShowAllCharacters";
import useStyles from "./Styles";

const HomePage = () => {
  const classes = useStyles();
  const [info, setInfo] = useState({});
  const [data, setData] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [page, setPage] = useState(1);

  //Data Fetch From the API for Characters
  const fetchData = useCallback(async () => {
    const result = await axios(
      `https://rickandmortyapi.com/api/character/?page=${page}&name=${searchQuery}`
    );

    setInfo(result.data.info);
    setData(result.data.results);
  }, [page, searchQuery]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  //Functionality For Search
  const searchSubmit = (e) => {
    e.preventDefault();
    setSearchQuery(e.target.value);
  };

  //Fuctionality for pagination
  const nextPageHandler = () => {
    return page < info.pages ? setPage(page + 1) : setPage(1);
  };

  const prevPageHandler = () => {
    return page > 1 ? setPage(page - 1) : setPage(info.pages);
  };

  //props to component
  const props = {
    data,
    page,
    prevPageHandler,
    nextPageHandler,
  };

  if (data.length < 1) {
    return <h1>Loading...</h1>;
  } else {
    return (
      <div>
        <Typography variant="h4" className={classes.title}>
          Characters
        </Typography>
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

        <ShowAllCharacters {...props} />
      </div>
    );
  }
};

export default HomePage;
