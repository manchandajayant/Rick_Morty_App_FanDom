import React, { useState, useEffect, useCallback } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const CharacterDetail = () => {
  const [character, setCharacter] = useState({});

  const { id } = useParams();

  const fetchCharacter = useCallback(async () => {
    const result = await axios(
      `https://rickandmortyapi.com/api/character/${id}`
    );

    setCharacter(result.data);
  }, [id]);

  useEffect(() => {
    fetchCharacter();
  }, [id, fetchCharacter]);

  console.log(character);
  return <div></div>;
};

export default CharacterDetail;
