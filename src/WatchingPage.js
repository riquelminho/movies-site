import React, { useEffect, useState } from 'react';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const WatchingPage = () => {
  const params = useParams();
  const [movieInfo, setMovieInfo] = useState([])

  //get  movie by details 
  const MovieDetails = async () => {
      const res = await axios.get(`https://api.themoviedb.org/3/movie/${params.id}?api_key=d9b8b56396c1b221d30a114aeb44d454&language=en-US`)
      setMovieInfo(res.data)
      console.log(res.data)
  }
  useEffect(() => {
      MovieDetails();
  }, [])
  return (
    <>
      
      <Container>
      <Row>
        <Col>
        <Card style={{ width: '18rem',objectFit:"cover" }}>
      <Card.Img style={{ width: '100%',   }} variant="top" src={`https://image.tmdb.org/t/p/w500/` + movieInfo.poster_path} />
      <Card.Body>
      <Button style={{width:"250px"}} variant="primary" size="xl">
        Watch Now
      </Button>
      </Card.Body>
    </Card>
        </Col>
        <Col>
        {/* ===============Info list =============== */}

        <Card style={{ width: '50rem' }}>
      <Card.Header>Title {movieInfo.title}</Card.Header>
      <ListGroup variant="flush">
        <ListGroup.Item>Overview: {movieInfo.overview}</ListGroup.Item>
        <ListGroup.Item>Runtime: {movieInfo.runtime} min</ListGroup.Item>
        <ListGroup.Item>Release date: {movieInfo.release_date}</ListGroup.Item>
        <ListGroup.Item>Rating: {movieInfo.vote_average}</ListGroup.Item>
        <ListGroup.Item>Vote count:  {movieInfo.vote_count}</ListGroup.Item>
        <ListGroup.Item>Watchlist like dislike  </ListGroup.Item>
      </ListGroup> 
    </Card>
        </Col>
      </Row>
    </Container>

  

   
    </>
  );
}

export default WatchingPage;
