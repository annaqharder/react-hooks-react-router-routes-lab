import React from "react";
import { movies } from "../data";

function Movies() {
  const moviesArray = movies.map((movie) => 
  <div key={movies.title}>
    <h2>{movie.title}</h2>
    <p>Runtime: {movie.time} min</p>
    <ul>
      {movie.genres.map((genre) => (
        <li key={genre}>{genre}</li>
      ))}
    </ul>
    </div>
  )

  return (
    <div>
      <h1>Movies</h1>
      {moviesArray}
    </div>
  )
}

export default Movies;
