import React, { useEffect, useState, useCallback } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";

var arrayOfCharacterNumbers = [];

const EpisodeDetail = () => {
  const [episode, setEpisode] = useState({});
  const [characters, setCharacters] = useState([]);
  const [load, setload] = useState(false);
  const { id } = useParams();

  const fetchEpisode = useCallback(async () => {
    const result = await axios(`https://rickandmortyapi.com/api/episode/${id}`);
    console.log(result);
    setload(true);
    setEpisode(result.data);
  }, [id]);

  useEffect(() => {
    fetchEpisode();
  }, [id, fetchEpisode]);

  const fetchAndExtract = useCallback(() => {
    const extractNumbersFromUrlString = episode.characters.map((character) => {
      return arrayOfCharacterNumbers.push(parseInt(character.match(/\d+/)));
    });

    const fetchCharacters = async () => {
      const result = await axios(
        `https://rickandmortyapi.com/api/character/${extractNumbersFromUrlString}`
      );

      setCharacters(result.data);
    };
    fetchCharacters();
  }, [episode.characters]);

  useEffect(() => {
    if (episode.characters) {
      fetchAndExtract();
    }
  }, [episode, fetchAndExtract]);

  console.log(characters);
  if (!load) {
    return <div>Loading...</div>;
  } else {
    return (
      <div>
        <h1>{episode.name}</h1>
        <h3>Characters</h3>
        <div>
          {characters.map((character, index) => {
            return (
              <div key={index}>
                <h4>
                  <Link to={`/characters/${character.id}`}>
                    {character.name}
                  </Link>
                </h4>
                <img src={character.image} alt={character.name} />
              </div>
            );
          })}
        </div>
      </div>
    );
  }
};

export default EpisodeDetail;
