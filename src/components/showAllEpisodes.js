import React, { Fragment } from "react";
import { Link } from "react-router-dom";

const ShowAllEpisodes = (props) => {
  const { query, data, prevPageHandler, nextPageHandler, page } = props;

  console.log(props.data);
  return (
    <div>
      {" "}
      <>
        {data.map((data, index) => {
          return (
            <Fragment key={index}>
              <h1>
                <Link to={`/${query}/${data.id}`}>{data.name}</Link>
              </h1>

              <h2>{data.episode}</h2>
            </Fragment>
          );
        })}
        <h5>Page no.{page}</h5>
        <button onClick={prevPageHandler}>prev</button>
        <button onClick={nextPageHandler}>next</button>
      </>
    </div>
  );
};

export default ShowAllEpisodes;
