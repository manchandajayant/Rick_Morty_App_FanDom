import React, { useState, useEffect, useCallback } from "react";
import { useParams, Link } from "react-router-dom";

import axios from "axios";

import { Typography } from "@material-ui/core";

import useStyles from "./Styles";

const CharacterDetail = () => {
  const classes = useStyles();
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
      <div className={classes.container}>
        <Typography variant="h2" className={classes.title}>
          {character.name}
        </Typography>
        <div className={classes.image}>
          <img src={character.image} alt={character.name} />
        </div>
        <Typography className={classes.description}>
          Gender:{character.gender}
        </Typography>
        <Typography className={classes.typo}>
          <Link to={`/location/${locationId}`}>
            Location:{character.location.name}
          </Link>
        </Typography>
        <Typography className={classes.typo}>
          Origin:{character.origin.name}
        </Typography>
        <Typography className={classes.description}>
          Species:{character.species}
        </Typography>
        <Typography className={classes.description}>
          Status:{character.status}
        </Typography>

        {character.type === "" ? (
          <Typography className={classes.type}>Type:Unknown</Typography>
        ) : (
          <Typography className={classes.type}>
            Type :{character.type}
          </Typography>
        )}
      </div>
    );
  }
};

export default CharacterDetail;
