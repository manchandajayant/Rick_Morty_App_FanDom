import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

var arrayOfCharacterNumbers = [];

const EpisodeDetail = () => {
  const [episode, setEpisode] = useState({});
  const [characters, setCharacters] = useState([]);

  const { id } = useParams();

  useEffect(() => {
    fetch(`https://rickandmortyapi.com/api/episode/${id}`)
      .then((res) => res.json())
      .then(setEpisode);
  }, [id]);

  useEffect(() => {
    if (episode.characters) {
      const arr = episode.characters.map((character) => {
        return arrayOfCharacterNumbers.push(parseInt(character.match(/\d+/)));
      });
      console.log(arr, "arr");
      fetch(`https://rickandmortyapi.com/api/character/${arr}`)
        .then((res) => res.json())
        .then(setCharacters);
    }
  }, [episode]);

  console.log(characters, "chars");
  if (!episode) {
    return <div>Loading...</div>;
  } else {
    return (
      <div>
        <h1>{episode.name}</h1>
        <h3>Characters</h3>
        <div>
          {characters.map((character, index) => {
            return <h4 key={index}>{character.name}</h4>;
          })}
        </div>
      </div>
    );
  }
};

export default EpisodeDetail;
