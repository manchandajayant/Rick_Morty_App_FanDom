import React, { useEffect, useState } from "react";

import { Link } from "react-router-dom";
import axios from "axios";

const Episodes = () => {
  const [data, setdata] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios("https://rickandmortyapi.com/api/episode");

      setdata(result.data.results);
    };
    fetchData();
  }, []);

  console.log(data);
  if (!data) {
    return <h1>Loading...</h1>;
  } else {
    return (
      <div>
        {data.map((episode, index) => {
          return (
            <div key={index}>
              <h1>
                <Link to={`/episodes/${episode.id}`}>{episode.name}</Link>
              </h1>
              <h2>{episode.episode}</h2>
            </div>
          );
        })}
      </div>
    );
  }
};

export default Episodes;
