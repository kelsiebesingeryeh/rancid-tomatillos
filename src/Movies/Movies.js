import React from 'react';
import Card from '../Card/Card';
import './Movies.css';

const Movies = ({movies}) => {
  console.log(movies)
  const moviesToDisplay = movies.map(movie => {
    return (
      <Card
        title={movie.title}
        posterImage={movie["poster_path"]}
        key={movie.id}
        id={movie.id}
      />
    )
  })

  return (
    <section className="movieContainer">
        {moviesToDisplay}
    </section>
  )
}

export default Movies;
