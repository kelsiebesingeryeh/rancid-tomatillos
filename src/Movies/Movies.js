import React from 'react';
import Card from '../Card/Card';
import './Movies.scss';
import PropTypes from 'prop-types'

const Movies = ({movies}) => {
  const moviesToDisplay = movies.map(movie => {
    return (
      <Card
        title={movie.title}
        posterImage={movie["poster_path"]}
        key={movie.id}
        id={movie.id}
        avgRating={movie["average_rating"]}
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

 Movies.propTypes = {
   movies: PropTypes.array,
   displayMovieDetails: PropTypes.func
 };