import React, { useEffect, useState } from "react";
import TrailersBox from "./TrailersBox";
import { Container } from "react-bootstrap";

const API_URL =
  "https://api.themoviedb.org/3/movie/475557/videos?api_key=d9b8b56396c1b221d30a114aeb44d454&language=en-US";

const Trailers = () => {
  const [video, setvideo] = useState("");

  useEffect(() => {
    fetch(API_URL)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setvideo(data.results);
      });
  }, []);
  return (
    <Container className="horizental-scroll">
      {Array.from(video).map((movieReq) => (
        <TrailersBox key={movieReq.id} {...movieReq} />
      ))}
    </Container>
  );
};

export default Trailers;
