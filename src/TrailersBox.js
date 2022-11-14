import React from 'react';



// ===================


const API_IMG="https://image.tmdb.org/t/p/w500/";



const TrailersBox = ({  vote_average, name, key}) => {
  return (

   <div class="container">
  <div class="row">
    <div class="col-2">
    <div class="card"  style={{width: '15rem'}}>

  <video> 
  <source src={API_IMG+key} class="card-img-top"  type="video/mp4"/> 
</video> 
 
  <div class="card-body">
    <ul class="list-group list-group-flush">
    <li class="list-group-item"><h2> {name}{name}</h2></li>
    <li class="list-group-item">{vote_average}</li>
  </ul>
  </div>
</div>
    </div>
  </div>
</div>
  );
}

export default TrailersBox;
