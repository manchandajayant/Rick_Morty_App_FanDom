import React, { useEffect, useState } from "react";

import { Link } from "react-router-dom";
import axios from "axios";

const Episodes = () => {
  const [info, setInfo] = useState({});
  const [episodes, setEpisodes] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    const fetchEpisodes = async () => {
      const result = await axios(
        `https://rickandmortyapi.com/api/episode/?page=${page}`
      );
      console.log(result.data.info);
      setInfo(result.data.info);
      setEpisodes(result.data.results);
    };
    fetchEpisodes();
  }, [page]);

  const nextPageHandler = () => {
    return page <= info.pages ? setPage(page + 1) : setPage(1);
  };

  const prevPageHandler = () => {
    return page > 1 ? setPage(page - 1) : setPage(info.pages);
  };

  if (!episodes) {
    return <h1>Loading...</h1>;
  } else {
    return (
      <div>
        {episodes.map((episode, index) => {
          return (
            <div key={index}>
              <h1>
                <Link to={`/episodes/${episode.id}`}>{episode.name}</Link>
              </h1>
              <h2>{episode.episode}</h2>
            </div>
          );
        })}
        <button onClick={prevPageHandler}>prev</button>
        <button onClick={nextPageHandler}>next</button>
      </div>
    );
  }
};

export default Episodes;
