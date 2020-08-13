import React, { useCallback, useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import axios from "axios";

const LocationDetail = () => {
  const [location, setLocation] = useState({});
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

  console.log(location);
  return <div></div>;
};

export default LocationDetail;
