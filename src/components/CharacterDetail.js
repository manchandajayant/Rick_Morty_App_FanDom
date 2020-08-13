import React, { useState, useEffect, useCallback } from "react";
import { useParams, Link } from "react-router-dom";

import axios from "axios";

const CharacterDetail = () => {
  const [character, setCharacter] = useState({});
  const [load, setload] = useState(false);
  const { id } = useParams();

  const fetchCharacter = useCallback(async () => {
    const result = await axios(
      `https://rickandmortyapi.com/api/character/${id}`
    );

    setCharacter(result.data);
    setload(true);
  }, [id]);

  useEffect(() => {
    fetchCharacter();
  }, [fetchCharacter]);

  console.log(character);

  if (!load) {
    return <h1>Loading...</h1>;
  } else {
    const locationId = parseInt(character.location.url.match(/\d+/));

    return (
      <div>
        <h2>Name:{character.name}</h2>
        <img src={character.image} alt={character.name} />
        <h3>Gender:{character.gender}</h3>
        <h3>
          <Link to={`/location/${locationId}`}>
            Location:{character.location.name}
          </Link>
        </h3>
        <h3>Origin:{character.origin.name}</h3>
        <h4>Species:{character.species}</h4>
        <h4>Status:{character.status}</h4>
        Type :{" "}
        {character.type === "" ? <h4>Unknown</h4> : <h4>{character.type}</h4>}
      </div>
    );
  }
};

export default CharacterDetail;
