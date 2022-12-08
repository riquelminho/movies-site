import {
  Button,Col,Container,Form,Nav,Navbar,Row,} from "react-bootstrap";
import React, { useState } from "react";
import MovieBox from "./MovieBox";
import { useNavigate } from "react-router-dom";
import { MdMovieFilter } from "react-icons/md";
import Pages from "./Pagination";

const Search = () => {
  const navigate = useNavigate();
  const [movies, setMovies] = useState([]);
  const [query, setQuery] = useState("");
 

  const searchMovie = async ( page) => {
    try {
      const url = `https://api.themoviedb.org/3/search/movie?api_key=d9b8b56396c1b221d30a114aeb44d454&query=${query}&page=${page}`;
      const res = await fetch(url);
      const data = await res.json();
      console.log(data.selected + 1)
      setMovies(data.results);
  
    } catch (e) {
      console.log(e);
    }
  };
   

    const changeHandler = (e) => {
      e.preventDefault();
      setQuery(e.target.value);
    };
 
  return (
    <>
      <div className="sticky">
        <div className="navbar-search">
          <Navbar expand="lg">
            <Container fluid>
              <Navbar.Brand>
                {" "}
                <Nav.Link href="/">
                  {" "}
                  <MdMovieFilter className="logo" />{" "}
                </Nav.Link>{" "}
              </Navbar.Brand>
              <Form
                className="d-flex"
                onSubmit={searchMovie}
                autoComplete="off"
              >
                <Form.Control
                  type="search"
                  placeholder="Search"
                  className="me-2"
                  aria-label="Search"
                  name="query"
                  value={query}
                  onChange={changeHandler}
                ></Form.Control>
                <Button
                  onClick={() => navigate("/Search")}
                  variant="outline-success"
                  type="submit"
                >
                  Search
                </Button>
              </Form>
            </Container>
          </Navbar>
        </div>

        <div className="nav-links">
          <Nav>
            <Nav.Item>
              <Nav.Link href="/">HOME</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="/AllMovies">MOVIES</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="/TvShowPage">TV SHOW</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="/ContactUs">CONTACT US</Nav.Link>
            </Nav.Item>
          </Nav>
        </div>
      </div>
      <Container fluid="md" className="bg-Pages">
        <Row>
          {movies.map((movieReq) => (
            <Col>
              <MovieBox key={movieReq.id} {...movieReq} />
            </Col>
          ))}
        
        </Row>
        {movies.length >= 1 ? (<Pages />) : null}
      </Container>
    </>
  );
};

export default Search;
