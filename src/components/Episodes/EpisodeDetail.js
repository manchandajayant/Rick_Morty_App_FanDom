import React, { useEffect, useState, useCallback, Fragment } from "react";
import { useParams } from "react-router-dom";

import axios from "axios";

import { Grid } from "@material-ui/core";

import LayoutForCharacters from "../Characters/LayoutForCharacters";

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

  const characterCard = characters.map((propsObject, index) => {
    return (
      <Fragment key={index}>
        <Grid item xs={12} sm={6} md={4}>
          <LayoutForCharacters {...propsObject} />
        </Grid>
      </Fragment>
    );
  });
  if (!load) {
    return <div>Loading...</div>;
  } else {
    return (
      <div>
        <h1>{episode.name}</h1>
        <h3>Characters</h3>
        <div>
          <Grid container spacing={4} style={{ padding: "4%" }}>
            {characterCard}
          </Grid>
        </div>
      </div>
    );
  }
};

export default EpisodeDetail;
