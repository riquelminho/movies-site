
import React, { useEffect, useState } from "react";
import MovieBox from "./MovieBox";
import { Container, Row ,Col,  } from "react-bootstrap";
import Pages from "./Pagination";


  const TopRatedPage = ({ getPage, pageCount }) => {
  const API_URL =
  `https://api.themoviedb.org/3/movie/popular?api_key=d9b8b56396c1b221d30a114aeb44d454`;

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
    <Pages getPage={getPage} pageCount={pageCount}/>
    </Container>
  );
};
export default TopRatedPage;
//<Pages getPage={getPage} pageCount={pageCount}/>
//const TopRatedPage = ({ getPage, pageCount }) => {