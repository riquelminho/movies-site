
import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import Footer from "../Components/Footer";
import Search from "../Components/Search";
import TvBox from "../Components/TvBox";




const API_URL =
  "https://api.themoviedb.org/3/tv/popular?api_key=d9b8b56396c1b221d30a114aeb44d454";


const TvShowPage = () => {
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
             <TvBox key={movieReq.id} {...movieReq} />
          </Col>)
          }  
    </Row>
    </Container>
    <Footer/>
    </>
  );
};
export default TvShowPage;
