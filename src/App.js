import React, { useState, useEffect } from "react";
import MovieList from "./components/MovieList/MovieList";
import MovieDetails from "./components/MovieDetails/MovieDetails";
import "./App.css";
import MyLogo from "./logo.svg";
import e1 from "./static/w1.jpg";
import e2 from "./static/w2.jpg";
import e3 from "./static/w3.jpg";
import e4 from "./static/w4.jpg";
import e5 from "./static/w5.jpg";
import e6 from "./static/w6.jpg";

function App() {
  const initialFavorites = JSON.parse(localStorage.getItem("favorites")) || [];
  const [favorites, setFavorites] = useState(initialFavorites);
  const [selectedMovie, setSelectedMovie] = useState("");
  const imgs = [e1, e2, e3, e4, e5, e6];

  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [favorites]);

  const handleFavorite = (movie) => {
    if (favorites.some((fav) => fav.episode_id === movie.episode_id)) {
      setFavorites(
        favorites.filter((fav) => fav.episode_id !== movie.episode_id)
      );
    } else {
      setFavorites([...favorites, movie]);
    }
  };

  function handleMovieSelect(movie) {
    setSelectedMovie(movie);
  }

  return (
    <div className="App">
      <header
        className="App-header"
        style={{
          backgroundImage: `url(${imgs[selectedMovie.episode_id - 1]})`,
        }}
      >
        <img src={MyLogo} className="App-logo" alt="animated app logo" />
        {!selectedMovie && <h1>Select A Movie</h1>}
        {selectedMovie && (
          <MovieDetails
            movie={selectedMovie}
            onFavoriteToggle={handleFavorite}
            favorites={favorites}
          />
        )}
      </header>
      <MovieList onMovieSelect={handleMovieSelect} />
    </div>
  );
}

export default App;
