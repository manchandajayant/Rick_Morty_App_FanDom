import React, { useEffect, useState, useCallback, Fragment } from "react";
import { useParams } from "react-router-dom";

import axios from "axios";

import { Grid, Typography } from "@material-ui/core";

import useStyles from "./Styles";
import LayoutForCharacters from "../Characters/LayoutForCharacters";

var arrayOfCharacterNumbers = [];

const EpisodeDetail = () => {
  const classes = useStyles();
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
    if (fetchEpisode) {
      arrayOfCharacterNumbers = [];
    }
  }, [id, fetchEpisode]);

  const fetchAndExtract = useCallback(() => {
    episode.characters.map((character) => {
      return arrayOfCharacterNumbers.push(parseInt(character.match(/\d+/)));
    });

    const fetchCharacters = async () => {
      const result = await axios(
        `https://rickandmortyapi.com/api/character/${arrayOfCharacterNumbers}`
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
        <div className={classes.episode}>
          <Typography variant="h4">{episode.name}</Typography>
        </div>
        <div className={classes.episode}>
          <Typography variant="h4">Characters</Typography>
        </div>
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
