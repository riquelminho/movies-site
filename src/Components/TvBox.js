import React from "react";
import { Link } from "react-router-dom";

// ===================

const API_IMG = "https://image.tmdb.org/t/p/w500/";

const TvBox = ({ id,title, poster_path, vote_average, name, release_date,first_air_date }) => {
  return (
    <>
      <div className="container  MovieBox">
      <Link to={`/WatchingTvPage/${id}`}> 
        <div className="row ">
          <div className="col-2">
            <div className="card" style={{ width: "13rem" }}>
              <div className="main-content">
                <img
                  src={API_IMG + poster_path}
                  className="card-img-top"
                  alt={title}
                />
              </div>
              <div className="overlay-content">
              <ul >
              <li >  <h6>{name}{title}</h6>   </li>
              <li > <h6>{release_date}{first_air_date}</h6> </li>
              <li > <h6>Rating: {vote_average}</h6> </li>
              </ul >
              </div>
            </div>
          </div>
        </div>
        </Link>
      </div>
    </>
  );
};

export default TvBox;
