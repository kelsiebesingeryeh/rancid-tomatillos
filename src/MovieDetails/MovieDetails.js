import React from 'react'

const MovieDetails = ({ currentMovie }) => {
    return (
      <section className="movieDetails">
        <h2>{currentMovie.title}</h2>
        <img
          src={currentMovie.poster_path}
          alt={`${currentMovie.title}-poster`}
        />
        <img
          src={currentMovie.backdrop_path}
          alt={`${currentMovie.title}-poster`}
        />
        <p>{currentMovie.average_rating}</p>
        <p>{currentMovie.release_date}</p>
      </section>
    );
}

export default MovieDetails
