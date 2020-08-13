import React from "react";
import { Link } from "react-router-dom";

const ShowAllLocations = (props) => {
  const { query, data, prevPageHandler, nextPageHandler, page } = props;

  return (
    <div>
      {" "}
      <div>
        {data.map((data, index) => {
          return (
            <div key={index}>
              <h1>
                <Link to={`/${query}/${data.id}`}>{data.name}</Link>
              </h1>

              <h2>{data.episode}</h2>
            </div>
          );
        })}
        <h5>Page no.{page}</h5>
        <button onClick={prevPageHandler}>prev</button>
        <button onClick={nextPageHandler}>next</button>
      </div>
    </div>
  );
};

export default ShowAllLocations;
