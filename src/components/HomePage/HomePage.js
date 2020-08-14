import React, { useEffect, useState, useCallback } from "react";
import { Link } from "react-router-dom";

import axios from "axios";

import { TextField, Typography } from "@material-ui/core";

import ShowAllCharacters from "../Characters/showAllCharacters";
import useStyles from "./styles";

const HomePage = () => {
  const classes = useStyles();
  const [info, setInfo] = useState({});
  const [data, setData] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [page, setPage] = useState(1);

  const totalPages = info.pages;

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

  const searchSubmit = (e) => {
    e.preventDefault();
    setSearchQuery(e.target.value);
  };

  const nextPageHandler = () => {
    return page < info.pages ? setPage(page + 1) : setPage(1);
  };

  const prevPageHandler = () => {
    return page > 1 ? setPage(page - 1) : setPage(info.pages);
  };

  const props = {
    data,
    page,
    prevPageHandler,
    nextPageHandler,
    totalPages,
  };

  if (data.length < 1) {
    return <h1>Loading...</h1>;
  } else {
    return (
      <div>
        <div className={classes.div}>
          <Typography className={classes.list}>
            <Link to="/locations">Show All Locations</Link>
          </Typography>
          {"  "}
          <Typography>
            <Link to="/episodes">Show All Episodes</Link>
          </Typography>
        </div>
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
