
import React, { useEffect, useState } from "react";
import MovieBox from "../Components/MovieBox";
import { Container, Row ,Col, } from "react-bootstrap";



const API_URL =
  "https://api.themoviedb.org/3/movie/upcoming?api_key=d9b8b56396c1b221d30a114aeb44d454";


const UpcomingPage = () => {
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
export default UpcomingPage;
