import React from 'react'

const MovieDetails = ({ currentMovie, backToMain }) => {
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
        <p>{currentMovie.average_rating}</p>
        <p>{currentMovie.release_date}</p>
      </section>
    );
}

export default MovieDetails
