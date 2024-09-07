import React from "react";
import e1 from "../../static/1.jpg";
import e2 from "../../static/2.jpg";
import e3 from "../../static/3.jpg";
import e4 from "../../static/4.jpg";
import e5 from "../../static/5.jpg";
import e6 from "../../static/6.jpg";

function MovieItem({ movie, onMovieSelect }) {
  const imgs = [e1, e2, e3, e4, e5, e6];
  return (
    <button onClick={() => onMovieSelect(movie)}>
      <div
        className="movie-item"
        style={{ backgroundImage: `url(${imgs[movie.episode_id - 1]})` }}
      >
        <div key={movie.episode_id}>{movie.title}</div>
      </div>
    </button>
  );
}

export default MovieItem;
