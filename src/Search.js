
import {Button, Container, Form, Nav, Navbar} from "react-bootstrap";
import React,{useState} from 'react';
import MovieBox from "./MovieBox";
import {  useNavigate } from "react-router-dom";
import { MdMovieFilter} from "react-icons/md";

const Search = () => {
  const navigate = useNavigate();
   
  const [movies, setMovies]=useState([]);
  const [query, setQuery]=useState('');

  const searchMovie = async(e)=>{
    e.preventDefault();
    console.log("Searching");
    try{
      const url=`https://api.themoviedb.org/3/search/movie?api_key=d9b8b56396c1b221d30a114aeb44d454&query=${query}`;
      const res= await fetch(url);
      const data= await res.json();
      console.log(data);
      setMovies(data.results);
    }
    catch(e){
      console.log(e);
    }
  }

  const changeHandler=(e)=>{
    setQuery(e.target.value);
  }
  return (
    <>
    <div className="navbar-search">
      <Navbar  expand="lg">
        <Container fluid>
          <Navbar.Brand >  <Nav.Link href="/"> <MdMovieFilter className="logo"/> </Nav.Link> </Navbar.Brand>
          <Form className="d-flex" onSubmit={searchMovie} autoComplete="off">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
              name="query"
              value={query} onChange={changeHandler}></Form.Control>
            <Button onClick={() => navigate("/Search")} variant="outline-success" type="submit">Search</Button>
          </Form>
        </Container>
      </Navbar>
      </div>
    
     
        <div className="container">
        <div className="grid">
          {movies.map((movieReq)=>
          <MovieBox key={movieReq.id} {...movieReq}/>)}
            </div>
        </div>

        <div className="nav-links">
        <Nav>
        <Nav.Item>
          <Nav.Link href="/home">HOME</Nav.Link>
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
    </>
  );
};

export default Search;
