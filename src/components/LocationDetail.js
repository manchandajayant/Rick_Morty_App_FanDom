import React, { useCallback, useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

import axios from "axios";

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

  console.log(residents);
  if (!load) {
    return <h1>Loading...</h1>;
  } else {
    return (
      <div>
        <h1>Name:{location.name}</h1>
        <h2>Dimension:{location.dimension}</h2>
        <h2>Type:{location.type}</h2>
        <h3>Residents</h3>
        {residents.map((resident, index) => {
          return (
            <h4 key={index}>
              <Link to={`/character/${resident.id}`}>{resident.name}</Link>
            </h4>
          );
        })}
      </div>
    );
  }
};

export default LocationDetail;
