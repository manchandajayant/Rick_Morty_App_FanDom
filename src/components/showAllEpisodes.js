import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { showAllEpisodes } from "../store/actions";

const Episodes = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.episodes.results);

  useEffect(() => {
    dispatch(showAllEpisodes());
  }, [dispatch]);

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
