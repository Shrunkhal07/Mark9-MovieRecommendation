import "./styles.css";
import React, { useState } from "react";

const genre = {
  Thriller: [
    { name: "HIT", IMDB: "IMDB Rating: 9.0" },
    { name: "Drishyam", IMDB: "IMDB Rating: 8.6" },
    { name: "The Gray Man", IMDB: "IMDB Rating: 7.7" },
    { name: "Mission-Impossible: Fallout", IMDB: "IMDB Rating:8.5" }
  ],
  Comedy: [
    { name: "Hera Pheri", IMDB: "IMDB Rating: 9.8" },
    { name: "Dhamaal", IMDB: "IMDB Rating: 8.8" },
    { name: "Golmaal", IMDB: "IMDB Rating: 7.7" },
    { name: "Welcome", IMDB: "IMDB Rating: 8.7" }
  ],
  SciFi: [
    { name: "Martian", IMDB: "IMDB Rating: 8.8" },
    { name: "Mad Max: Fury Road", IMDB: "IMDB Rating: 9.0" },
    { name: "Matrix", IMDB: "IMDB Rating: 8.7" },
    { name: "Avatar", IMDB: "IMDB Rating: 6.7" }
  ],
  Horror: [
    { name: "IT", IMDB: "IMDB Rating: 7.1" },
    { name: "Wrong Turn", IMDB: "IMDB Rating: 8.3" },
    { name: "The Conjuring", IMDB: "IMDB Rating: 8.7" },
    { name: "Oculus", IMDB: "IMDB Rating: 9.7" }
  ]
};

export default function App() {
  const [selectMovieGenre, setMovieGenre] = useState("Thriller");

  function movieRecommendHandler(movieGenre) {
    setMovieGenre(movieGenre);
  }

  return (
    <div className="App">
      <h1 class="Title"> Movie Recommendation </h1>
      <h2 style={{ color: "#a7a9be", fontSize: "medium", padding: "1rem" }}>
        {" "}
        Checkout my Recommmended Movies
      </h2>

      <span>
        {Object.keys(genre).map((movieGenre) => (
          <button onClick={() => movieRecommendHandler(movieGenre)}>
            {" "}
            {movieGenre}
          </button>
        ))}
        <br />
      </span>
      {genre[selectMovieGenre].map((movie) => (
        <li key={movie.name}>
          {" "}
          <div class="movie-name">{movie.name}</div>
          <div class="movie-rating">{movie.IMDB}</div>
        </li>
      ))}
    </div>
  );
}
