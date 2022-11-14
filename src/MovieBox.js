import React from "react";

// ===================

const API_IMG = "https://image.tmdb.org/t/p/w500/";

const MovieBox = ({ title, poster_path, vote_average, name }) => {
  return (
    <>
      <div class="container  MovieBox">
        <div class="row ">
          <div class="col-2">
            <div class="card" style={{ width: "13rem" }}>
              <img
                src={API_IMG + poster_path}
                class="card-img-top"
                alt={title}
              />
            </div>
          </div>
        </div>
        <p>
          {title}
          {name}
        </p>
      </div>

    
    </>
  );
};

export default MovieBox;
