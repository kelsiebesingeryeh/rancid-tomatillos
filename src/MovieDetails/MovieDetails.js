import React from 'react';
import './MovieDetails.css';

const MovieDetails = ({ currentMovie }) => {
  const date = new Date(currentMovie.release_date)
  return (
    <section className="movieDetails">
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
              {currentMovie.runtime !== 0 && 
                <li>Runtime</li>
              }
              {currentMovie.genres.length !== 0 && 
                <li>Genre</li>
              }
              {currentMovie.budget !== 0 && 
                <li>Budget</li>
              }
              {currentMovie.revenue !== 0 && 
              <li>Revenue</li>
              }
            </ul>
            <ul className="movieDetailsData">
              <li>{date.toLocaleDateString()}</li>
              {currentMovie.runtime !== 0 && 
                <li>{currentMovie.runtime}</li>
              }
              {currentMovie.genres.length !== 0 && 
                <li>{currentMovie.genres}</li>
              }
              {currentMovie.budget !== 0 && 
                <li>{currentMovie.budget}</li>
              }
              {currentMovie.revenue !== 0 && 
                <li>{currentMovie.revenue}</li>
              }
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
