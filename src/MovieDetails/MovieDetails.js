import React from 'react';
import './MovieDetails.css';

const MovieDetails = ({ currentMovie, backToMain }) => {
  const date = new Date(currentMovie.release_date)
  return (
    <section className="movieDetails">
      <button onClick={backToMain}>Back to Main</button>
      <div className="movieDetailsCard">
        <img className="poster"
          src={currentMovie.poster_path}
          alt={`${currentMovie.title}-poster`}
        />
        <span className="movieInfo">
          <h2>{currentMovie.title}</h2>
          <p><strong>Average Rating:</strong> {currentMovie.average_rating.toFixed(1)}</p>
          <p><strong>Release Date:</strong> {date.toLocaleDateString()}</p>
        </span>
      </div>
      <div className="trailerContainer">
        <img className="trailer"
          src={currentMovie.backdrop_path}
          alt={`${currentMovie.title}-poster`}
        />
      </div>
    </section>
  );
}

export default MovieDetails
