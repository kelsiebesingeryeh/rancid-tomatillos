import React from 'react'

const MovieDetails = ({id, poster_path, backdrop_path, title, average_rating, release_date}) => {
    return (
      <section className="movieDetails">
        <h2>{title}</h2>
        <img src={poster_path} alt={`${title}-poster`} />
        <img src={backdrop_path} alt={`${title}-poster`} />
        <p>{average_rating}</p>
        <p>{release_date}</p>
      </section>
    )
}

export default MovieDetails
