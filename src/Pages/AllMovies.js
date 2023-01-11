
import React, { useEffect, useState } from "react";
import { Container, Row ,Col, } from "react-bootstrap";
import Footer from "../Components/Footer";
import MovieBox from "../Components/MovieBox";
import Search from "../Components/Search";



const API_URL="https://api.themoviedb.org/3/movie/popular?api_key=d9b8b56396c1b221d30a114aeb44d454"


const AllMovies = () => {
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
    <>
    <Search/>
    <Container fluid="md" className="bg-Pages">
      
    <Row>
      {Array.from(movie).map((movieReq) =>
         <Col>
             <MovieBox key={movieReq.id} {...movieReq} />
          </Col>)
          }  
    </Row>
    </Container>
    <Footer/>
    </>
); 
}

export default AllMovies;
