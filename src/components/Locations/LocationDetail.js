import React, { useCallback, useEffect, useState, Fragment } from "react";
import { useParams } from "react-router-dom";

import { Grid } from "@material-ui/core";

import axios from "axios";

import LayoutForCharacters from "../Characters/LayoutForCharacters";

var arrayOfCharacterNumbers = [];

const LocationDetail = () => {
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
  }, [fetchLocation]);

  const fetchAndExtract = useCallback(() => {
    const extractNumbersFromUrlString = location.residents.map((resident) => {
      return arrayOfCharacterNumbers.push(parseInt(resident.match(/\d+/)));
    });

    const fetchResidents = async () => {
      const result = await axios(
        `https://rickandmortyapi.com/api/character/${extractNumbersFromUrlString}`
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
        <h1>Name:{location.name}</h1>
        <h2>Dimension:{location.dimension}</h2>
        <h2>Type:{location.type}</h2>
        <h3>Residents</h3>
        <Grid container spacing={4} style={{ padding: "4%" }}>
          {characterCard}
        </Grid>
      </div>
    );
  }
};

export default LocationDetail;
