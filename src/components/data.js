import React, { useEffect, useState, useCallback } from "react";

import axios from "axios";

import ShowAllEpisodes from "./showAllEpisodes";
import ShowAllLocations from "./showAllLocations";
import ShowAllCharacters from "./showAllCharacters";

const Data = () => {
  const [info, setInfo] = useState({});
  const [data, setData] = useState([]);
  const [query, setQuery] = useState("character");
  const [searchQuery, setSearchQuery] = useState("");
  const [page, setPage] = useState(1);

  const fetchData = useCallback(async () => {
    const result = await axios(
      `https://rickandmortyapi.com/api/${query}/?page=${page}&name=${searchQuery}`
    );

    setInfo(result.data.info);
    setData(result.data.results);
  }, [page, query, searchQuery]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  const searchSubmit = (e) => {
    e.preventDefault();
    setSearchQuery(e.target.value);
  };

  const querySelector = (event) => {
    setPage(1);
    setQuery(event.target.value);
  };

  const nextPageHandler = () => {
    return page < info.pages ? setPage(page + 1) : setPage(1);
  };

  const prevPageHandler = () => {
    return page > 1 ? setPage(page - 1) : setPage(info.pages);
  };

  const props = {
    querySelector,
    query,
    data,
    page,
    prevPageHandler,
    nextPageHandler,
  };

  if (data.length < 1) {
    return <h1>Loading...</h1>;
  } else if (query === "episode") {
    return (
      <div>
        <select value={query} onChange={querySelector}>
          <option label="episodes">episode</option>
          <option label="characters">character</option>
          <option label="locations">location</option>
        </select>
        <input onChange={searchSubmit}></input>
        <ShowAllEpisodes {...props} />
      </div>
    );
  } else if (query === "character") {
    return (
      <div>
        <select value={query} onChange={querySelector}>
          <option label="episodes">episode</option>
          <option label="characters">character</option>
          <option label="locations">location</option>
        </select>
        <input onChange={searchSubmit}></input>
        <ShowAllCharacters {...props} />
      </div>
    );
  } else if (query === "location") {
    return (
      <div>
        <select value={query} onChange={querySelector}>
          <option label="episodes">episode</option>
          <option label="characters">character</option>
          <option label="locations">location</option>
        </select>
        <input onChange={searchSubmit}></input>
        <ShowAllLocations {...props} />
      </div>
    );
  }
};

export default Data;
