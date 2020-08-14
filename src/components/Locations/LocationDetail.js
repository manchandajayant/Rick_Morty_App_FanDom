import React, { useCallback, useEffect, useState, Fragment } from "react";
import { useParams } from "react-router-dom";

import { Grid, Typography } from "@material-ui/core";

import axios from "axios";

import useStyles from "./Styles";
import LayoutForCharacters from "../Characters/ShowAllCharactersLayout";

var arrayOfCharacterNumbers = [];

const LocationDetail = () => {
  const classes = useStyles();
  const [location, setLocation] = useState({});
  const [residents, setResidents] = useState([]);
  const [load, setload] = useState(false);

  const { id } = useParams();

  const fetchLocation = useCallback(async () => {
    const result = await axios(
      `https://rickandmortyapi.com/api/location/${id}`
    );

    setLocation(result.data);
    setload(true);
  }, [id]);

  useEffect(() => {
    fetchLocation();
    if (fetchLocation()) {
      arrayOfCharacterNumbers = [];
    }
  }, [fetchLocation]);

  const fetchAndExtract = useCallback(() => {
    location.residents.map((resident) => {
      return arrayOfCharacterNumbers.push(parseInt(resident.match(/\d+/)));
    });

    const fetchResidents = async () => {
      const result = await axios(
        `https://rickandmortyapi.com/api/character/${arrayOfCharacterNumbers}`
      );
      Array.isArray(result.data)
        ? setResidents(result.data)
        : setResidents([result.data]);
    };
    fetchResidents();
  }, [location.residents]);

  useEffect(() => {
    if (location.residents) {
      fetchAndExtract();
    }
  }, [location.residents, fetchAndExtract]);

  const characterCard = residents.map((propsObject, index) => {
    return (
      <Fragment key={index}>
        <Grid item xs={12} sm={6} md={4}>
          <LayoutForCharacters {...propsObject} />
        </Grid>
      </Fragment>
    );
  });

  if (!load) {
    return <h1>Loading...</h1>;
  } else {
    return (
      <div>
        <div>
          <div className={classes.detail}>
            <Typography variant="h4" className={classes.des}>
              {" "}
              {location.name}
            </Typography>
          </div>
          <div className={classes.detail}>
            <Typography variant="h4" className={classes.des}>
              Dimension: {location.dimension}
            </Typography>
          </div>
          <div className={classes.detail}>
            <Typography variant="h4" className={classes.des}>
              Type: {location.type}
            </Typography>
          </div>
          <div className={classes.detail}>
            <Typography variant="h5" className={classes.des}>
              Residents
            </Typography>
          </div>
        </div>
        <Grid container spacing={4} className={classes.container}>
          {characterCard}
        </Grid>
      </div>
    );
  }
};

export default LocationDetail;
