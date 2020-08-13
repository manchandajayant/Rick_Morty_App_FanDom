import React, { useEffect, useState, useCallback } from "react";
import { Link } from "react-router-dom";

import axios from "axios";

const Homepage = () => {
  const [info, setInfo] = useState({});
  const [data, setData] = useState([]);
  const [query, setQuery] = useState("episode");
  const [searchQuery, setSearchQuery] = useState("");
  const [page, setPage] = useState(1);

  const fetchData = useCallback(async () => {
    const result = await axios(
      `https://rickandmortyapi.com/api/${query}/?page=${page}&name=${searchQuery}`
    );
    console.log(result.data);
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
    setQuery(event.target.value);
  };

  const nextPageHandler = () => {
    return page <= info.pages ? setPage(page + 1) : setPage(1);
  };

  const prevPageHandler = () => {
    return page > 1 ? setPage(page - 1) : setPage(info.pages);
  };

  if (data.length < 1) {
    return <h1>Loading...</h1>;
  } else {
    return (
      <div>
        <div>
          <select value={query} onChange={querySelector}>
            <option label="episodes">episode</option>
            <option label="characters">character</option>
            <option label="locations">location</option>
          </select>
        </div>

        <input onChange={searchSubmit}></input>

        {data.map((data, index) => {
          return (
            <div key={index}>
              <h1>
                <Link to={`/${query}/${data.id}`}>{data.name}</Link>
              </h1>

              <h2>{data.episode}</h2>
            </div>
          );
        })}

        <button onClick={prevPageHandler}>prev</button>
        <button onClick={nextPageHandler}>next</button>
      </div>
    );
  }
};

export default Homepage;
