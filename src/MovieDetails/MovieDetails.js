import React from 'react'

const MovieDetails = ({ currentMovie, backToMain }) => {
  const date = new Date(currentMovie.release_date)
  return (
    <section className="movieDetails">
      <button onClick={backToMain}>Back to Main</button>
      <h2>{currentMovie.title}</h2>
      <img
        src={currentMovie.poster_path}
        alt={`${currentMovie.title}-poster`}
      />
      <img
        src={currentMovie.backdrop_path}
        alt={`${currentMovie.title}-poster`}
      />
      <p>Average Rating: {currentMovie.average_rating.toFixed(1)}</p>
      <p>Release Date: {date.toLocaleDateString()}</p>
    </section>
  );
}

export default MovieDetails
