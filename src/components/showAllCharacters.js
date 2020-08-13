import React from "react";
import { Link } from "react-router-dom";

const ShowAllCharacters = (props) => {
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

              <img alt={data.name} src={data.image} />
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

export default ShowAllCharacters;
