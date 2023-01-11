import {
  Button,Col,Container,Form,Nav,Navbar,Row,} from "react-bootstrap";
import React, { useEffect, useState } from "react";
import MovieBox from "./MovieBox";
import { Link, useNavigate } from "react-router-dom";
import { MdMovieFilter } from "react-icons/md";



 const Search = () => {  
  const navigate = useNavigate();
  const [movies, setMovies] = useState([]);
  const [query, setQuery] = useState("");
 
  
    // make the API call when the component is mounted
  const searchMovie = async (e) => {
    e.preventDefault();
    try {
      const url = `https://api.themoviedb.org/3/search/movie?api_key=d9b8b56396c1b221d30a114aeb44d454&query=${query}`;
      const res = await fetch(url);
      const data = await res.json();  
      setMovies(data.results);  
    } catch (e) {
      console.log(e);
    }
  };
  useEffect(() => {
  searchMovie();
}, ); // make the API call whenever the query changes
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
                <Nav.Link to="/">          
                  <MdMovieFilter className="logo" />
                </Nav.Link>
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
              <Link to="/">HOME</Link>
              <Link to="/AllMovies">MOVIES</Link>
              <Link to="/TvShowPage">TV SHOW</Link>
              <Link to="/ContactUs">CONTACT US</Link>
          </Nav>
        </div>
      </div>


      <Container  className="bg-Pages">
        <Row>
          {movies && movies.map((movieReq) => (
            <Col>
              <MovieBox key={movieReq.id} {...movieReq} />
            </Col>
          ))}
        
        </Row>
      
      </Container>
    
    </>
  );
};

export default Search;
