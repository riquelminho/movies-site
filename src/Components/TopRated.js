import React, { useEffect, useState } from "react";
import MovieBox from "./MovieBox";
import { Container, Nav } from "react-bootstrap";


const API_URL =
  "https://api.themoviedb.org/3/movie/top_rated?api_key=d9b8b56396c1b221d30a114aeb44d454";

const TopRated = () => {
  const [Rating, setRating] = useState("");

  useEffect(() => {
    fetch(API_URL)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setRating(data.results);
      });
  }, []);
  return (
    <div>
    <div className="home-title"><h3><Nav.Link href= "/TopRatedPage">Top Rated</Nav.Link></h3> </div>
    <Container fluid className="horizental-scroll">
      
      {Array.from(Rating).map((movieReq) => (
        <MovieBox key={movieReq.id} {...movieReq} />
        
      ))}
    
    </Container>
    </div>
  );
};

export default TopRated;
