import React from 'react';
import movies from './Search';
import MovieBox from './MovieBox';
import query from './Search';

const Searching = () => {
  return (
    
       <div>
      {movies.length > 0 ?(
        <div className="container">
        <div className="grid">
          {movies.map((movieReq)=>
          <MovieBox key={movieReq.id} {...movieReq}/>)}
          
            </div>
      </div>
      ):(
        <h1>{`Sorry !! No Movies Found For " ${query}"`} </h1>
        
      )}
    </div> 
  
  );
}

export default Searching;
