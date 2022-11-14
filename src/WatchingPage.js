import React from 'react';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

const WatchingPage = () => {
  return (
    <>
      
      <Container>
      <Row>
        <Col>
        <Card style={{ width: '18rem',objectFit:"cover" }}>
      <Card.Img style={{ width: '100%',   }} variant="top" src="https://image.tmdb.org/t/p/w500//pHkKbIRoCe7zIFvqan9LFSaQAde.jpg" />
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
      <Card.Header>Title</Card.Header>
      <ListGroup variant="flush">
        <ListGroup.Item>Overview: Select all the lines that you would like to be commented. 
          Press Ctrl + / Two slashes “//” will be added to the front of each line,
           causing them to be recognized as a comment.</ListGroup.Item>
        <ListGroup.Item>Release date: </ListGroup.Item>
        <ListGroup.Item>Rating: </ListGroup.Item>
        <ListGroup.Item>Vote count: </ListGroup.Item>
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
