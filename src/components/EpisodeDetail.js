import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { episodeFetch } from "../store/actions";
const EpisodeDetail = () => {
  const episode = useSelector((state) => state.episode);

  const dispatch = useDispatch();

  const { id } = useParams();
  useEffect(() => {
    dispatch(episodeFetch(id));
  }, [dispatch, id]);
  console.log(episode);

  if (!episode) {
    return <div>Loading...</div>;
  } else {
    return (
      <div>
        <h1>{episode.name}</h1>
        {episode.characters.map((character, index) => {
          return (
            <div key={index}>
              <p>{character}</p>
            </div>
          );
        })}
      </div>
    );
  }
};

export default EpisodeDetail;
