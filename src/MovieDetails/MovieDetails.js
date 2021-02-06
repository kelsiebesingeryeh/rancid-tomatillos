import React from 'react';
import './MovieDetails.css';

const MovieDetails = ({ currentMovie, backToMain }) => {
  const date = new Date(currentMovie.release_date)
  return (
    <section className="movieDetails">
      <button onClick={backToMain}>Back to Main</button>
      <div className="movieDetailsCard">
        <img
          className="poster"
          src={currentMovie.poster_path}
          alt={`${currentMovie.title}-poster`}
        />
        <span className="movieInfo">
          <h3 className="movieTitle">Overview</h3>
          <p className="movieOverview">{currentMovie.overview}</p>
          <div className="listDetails">
            <ul className="movieDetailsList">
              <li>Released</li>
              <li>Runtime</li>
              <li>Genre</li>
              <li>Budget</li>
              <li>Revenue</li>
            </ul>
            <ul className="movieDetailsList">
              <li>{date.toLocaleDateString()}</li>
              <li>{currentMovie.runtime}</li>
              <li>{currentMovie.genres}</li>
              <li>{currentMovie.budget}</li>
              <li>{currentMovie.revenue}</li>
            </ul>
          </div>
        </span>
      </div>
      {/* <div className="trailerContainer">
        <img className="trailer"
          src={currentMovie.backdrop_path}
          alt={`${currentMovie.title}-poster`}
        />
      </div> */}
    </section>
  );
}

export default MovieDetails
