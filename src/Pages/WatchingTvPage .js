import React, { useEffect, useState } from "react";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import { useParams } from "react-router-dom";
import axios from "axios";
import { FaThumbsUp, FaThumbsDown } from "react-icons/fa";
import Search from "../Components/Search";
import Footer from "../Components/Footer";

const WatchingTvPage = () => {
  const params = useParams();
  const [movieInfo, setMovieInfo] = useState([]);

  //get  movie by details
  const MovieDetails = async () => {
    const res = await axios.get(
      `https://api.themoviedb.org/3/tv/${params.id}?api_key=d9b8b56396c1b221d30a114aeb44d454&language=en-US`
    );
    setMovieInfo(res.data);
    console.log(res.data);
  };
  useEffect(() => {
    MovieDetails();
  }, []);
  return (
    <>
      <Search/>
      <Container className="watching-Page">
        <Row>
          <Col>
            <Card style={{ width: "16rem", objectFit: "cover" }}>
              <Card.Img
                style={{ width: "100%" }}
                variant="top"
                src={`https://image.tmdb.org/t/p/w500/` + movieInfo.poster_path}
              />
              <Card.Body>
                <Button style={{ width: "225px" }} variant="primary" size="xl">
                  Watch Now
                </Button>
              </Card.Body>
            </Card>
          </Col>

          {/* ===============Info list =============== */}
          <Col className="infocard">
            <Card style={{ width: "45rem" }}>
              <ListGroup variant="flush">
                <ListGroup.Item>
                  {" "}
                  <p>
                    {" "}
                    <span> TITLE: &nbsp;</span> {movieInfo.name}{" "}
                  </p>{" "}
                </ListGroup.Item>
                <ListGroup.Item>
                  {" "}
                  <p>
                    {" "}
                    <span> OVERVIEW:&nbsp;</span>
                    {movieInfo.overview}{" "}
                  </p>{" "}
                </ListGroup.Item>
              
                <ListGroup.Item>
                  {" "}
                  <p>
                    {" "}
                    <span> RELEASE DATE:&nbsp;</span> {movieInfo.first_air_date}
                  </p>{" "}
                </ListGroup.Item>
                <ListGroup.Item>
                  {" "}
                  <p>
                    {" "}
                    <span> RATING:</span>&nbsp; {movieInfo.vote_average}{" "}
                  </p>{" "}
                </ListGroup.Item>
                <ListGroup.Item>
                  {" "}
                  <p>
                    {" "}
                    <span> VOTE COUNT: </span>&nbsp; {movieInfo.vote_count}
                  </p>{" "}
                </ListGroup.Item>
                <ListGroup.Item className="icons-card">
                  <h5>
                    <FaThumbsUp /> <FaThumbsDown />
                  </h5>{" "}
                </ListGroup.Item>
              </ListGroup>
            </Card>
          </Col>
        </Row>
      </Container>
      <Footer/>
    </>
  );
};

export default WatchingTvPage;
