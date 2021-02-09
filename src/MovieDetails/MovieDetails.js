import React from 'react';
import './MovieDetails.css';

const MovieDetails = ({ currentMovie }) => {
  const date = new Date(currentMovie.release_date)
  const genres = currentMovie.genres.join(', ')
  const budget = new Intl.NumberFormat().format(currentMovie.budget)
  const revenue = new Intl.NumberFormat().format(currentMovie.revenue);
  
  return (
    <section className="movieDetails">
      <div className="movieDetailsCard">
        <img
          className="poster"
          src={currentMovie.poster_path}
          alt={`${currentMovie.title}-poster`}
        />
        <span className="movieInfo">
          <h3 className="movieDetailsTitle">Overview</h3>
          <p className="movieOverview">{currentMovie.overview}</p>
          <div className="listDetails">
            <ul className="movieDetailsList">
              <li>Released</li>
              {currentMovie.runtime !== 0 && <li>Runtime</li>}
              {currentMovie.genres.length !== 0 && <li>Genre</li>}
              {currentMovie.budget !== 0 && <li>Budget</li>}
              {currentMovie.revenue !== 0 && <li>Revenue</li>}
              <li>Average Rating</li>
            </ul>
            <ul className="movieDetailsData">
              <li>{date.toLocaleDateString()}</li>
              {currentMovie.runtime !== 0 && (
                <li>{currentMovie.runtime} minutes</li>
              )}
              {currentMovie.genres.length !== 0 && <li>{genres}</li>}
              {currentMovie.budget !== 0 && <li>${budget}</li>}
              {currentMovie.revenue !== 0 && <li>${revenue}</li>}
              <li>{currentMovie.average_rating.toFixed(1)}</li>
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

 {
   /* <span className="viewRatings">
          <img className="star" src={star} alt="star" />
          <p className="movieRating">{avgRating.toFixed(1)}</p>
        </span> */
 }
