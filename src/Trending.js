
import React, { useEffect, useState } from "react";
import MovieBox from "./MovieBox";
import { Container} from 'react-bootstrap';
import { Link } from "react-router-dom";



const API_URL="https://api.themoviedb.org/3/movie/popular?api_key=d9b8b56396c1b221d30a114aeb44d454"

const Trending = () => {
  const [movie, setmovie] = useState('');
  //const [pageCount, setpageCount] = useState(0)

  useEffect(() => {
    fetch(API_URL)
    .then((res)=>res.json())
    .then(data=>{
      console.log(data);
      setmovie(data.results);
    
      
    })            
  },[])
  

return (
<div >
  {     /*  <Container>
      <Row>
      {Array.from(movie).map((movieReq)=>
        <Col><MovieBox key={movieReq.id} {...movieReq}/> </Col>)}
      </Row>  <Link to= "/">Home page</Link>
    </Container> */}
<div className="home-title"><h3><Link to= "/TrendingPage">Trending</Link></h3> </div>
<Container fluid className="horizental-scroll">
      
      {Array.from(movie).map((movieReq)=>
        <MovieBox key={movieReq.id} {...movieReq}/> )}
    
</Container>

</div>  
    //Array.from(movie).map(element => <MovieBox/>
); 
}

export default Trending;
