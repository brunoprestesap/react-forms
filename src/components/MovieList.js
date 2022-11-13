import { useState } from "react";
import moviesDataJSON from "../movies-data.json";
import MovieCard from "./MovieCard";
import AddMovie from "./AddMovie";
import FilterMovies from "./FilterMovies";

function MovieList() {
  const [movies, setMovies] = useState(moviesDataJSON);

  function filterMovieList(str) {
    let filteredMovies;

    if (str === "All") {
      filteredMovies = movies;
    } else {
      filteredMovies = movies.filter((movie) => {
        return movie.title[0].toLowerCase() === str.toLowerCase();
      });
    }

    setMovies(filteredMovies);
  }

  return (
    <div>
      <FilterMovies filterMovieList={filterMovieList}/>
      <AddMovie movies={movies} setMovies={setMovies} />
      <h2>Movie List</h2>
      {movies.map((movie) => {
        return <MovieCard key={movie._id} movie={movie} />;
      })}
    </div>
  );
}

export default MovieList;
