
import React, { useEffect, useState } from "react";
import MovieBox from "./MovieBox";


const API_URL =
  "https://api.themoviedb.org/3/movie/top_rated?api_key=d9b8b56396c1b221d30a114aeb44d454";


const TopRatedPage = () => {
  const [movie, setmovie] = useState("");

  useEffect(() => {
    fetch(API_URL )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setmovie(data.results);
      });
  }, []);

  return (
    <div>
      {" "}
      {Array.from(movie).map((movieReq) => (
        <MovieBox key={movieReq.id} {...movieReq} />
      ))}
    </div>
  );
};
export default TopRatedPage;
