import React from 'react';
import Card from '../Card/Card';
import './Movies.css';

const Movies = ({movies, displayMovieDetails}) => {
  console.log('movies', movies)
  const moviesToDisplay = movies.map(movie => {
    return (
      <Card
        title={movie.title}
        posterImage={movie["poster_path"]}
        key={movie.id}
        id={movie.id}
        avgRating={movie["average_rating"]}
        displayMovieDetails={displayMovieDetails}
      />
    );
  })

  return (
    <section className="movieContainer">
        {moviesToDisplay}
    </section>
  )
}

export default Movies;
