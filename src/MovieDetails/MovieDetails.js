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
          <h2 className="movieTitle">{currentMovie.title}</h2>
          <p className="movieOverview">{currentMovie.overview}</p>
          <ul className="movieDetailsList">
            <li>
              <div className="listHeader">Released</div>
              <div className="listDetails">{date.toLocaleDateString()}</div>
            </li>
            <li>
              <div className="listHeader">Runtime</div>
              <div className="listDetails">{currentMovie.runtime}</div>
            </li>
            <li>
              <div className="listHeader">Genre</div>
              <div className="listDetails">{currentMovie.genres}</div>
            </li>
            <li>
              <div className="listHeader">Budget</div>
              <div className="listDetails">{currentMovie.budget}</div>
            </li>
            <li>
              <div className="listHeader">Revenue</div>
              <div className="listDetails">{currentMovie.revenue}</div>
            </li>
          </ul>
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
