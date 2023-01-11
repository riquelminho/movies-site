import React, { useEffect, useState } from "react";
import { Container} from 'react-bootstrap';
import { Link } from "react-router-dom";
import TvBox from "./TvBox";


const API_URL="https://api.themoviedb.org/3/tv/popular?api_key=d9b8b56396c1b221d30a114aeb44d454"


const TvShow = () => {
  const [Tvshow, setTvshow] = useState('');

  useEffect(() => {
    fetch(API_URL)
    .then((res)=>res.json())
    .then(data=>{
      console.log(data);
      setTvshow(data.results);
    })            
  },[])
  return (
    <div>
    <div className="home-title"><h3><Link to= "/TvShowPage">TV Show</Link></h3> </div>
    <Container fluid className="horizental-scroll">
      
      {Array.from(Tvshow).map((movieReq)=>
        <TvBox key={movieReq.id} {...movieReq}/> )}
    
</Container>
</div>
  );
}

export default TvShow;
