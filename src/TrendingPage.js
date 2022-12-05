
import React, { useEffect, useState } from "react";
import { Container, Row ,Col, } from "react-bootstrap";
import MovieBox from "./MovieBox";


const API_URL =
  "https://api.themoviedb.org/3/movie/popular?api_key=d9b8b56396c1b221d30a114aeb44d454";


const TrendingPage = () => {
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

 <Container fluid="md" className="bg-Pages">
<Row>
  {Array.from(movie).map((movieReq) =>
     <Col>
         <MovieBox key={movieReq.id} {...movieReq} />
      </Col>)
      }  
</Row>
</Container>


  );
};
export default TrendingPage;
