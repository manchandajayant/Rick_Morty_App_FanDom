import React from "react";
import { Link } from "react-router-dom";

const ShowAllEpisodes = (props) => {
  const { query, data, prevPageHandler, nextPageHandler, page } = props;

  console.log(props.data);
  return (
    <div>
      {" "}
      <div class="chr">
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

export default ShowAllEpisodes;
