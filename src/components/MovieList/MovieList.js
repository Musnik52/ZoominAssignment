import React, { useState, useEffect } from "react";
import { fetchMovies } from "../../services/api";
import MovieItem from "../MovieItem/MovieItem";
import Loading from "../Loading/Loading";

function MovieList({ onMovieSelect }) {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function getMovies() {
      try {
        const data = await fetchMovies();
        setMovies(data);
        console.log(data)
      } catch (error) {
        console.error("Failed fetching movies:", error);
      } finally {
        setIsLoading(false);
      }
    }

    getMovies();
  }, []);

  return (
    <div className="container">
      {isLoading ? (
        <Loading message="Loading Movies..." />
      ) : (
        movies.map((movie) => (
          <MovieItem 
            key={movie.episode_id}
            movie={movie}
            onMovieSelect={onMovieSelect}
          />
        ))
      )}
    </div>
  );
}

export default MovieList;
