import React from 'react'
import Card from '../Card/Card'
import './Movies.scss'
import PropTypes from 'prop-types'

const Movies = ({movies, sortedMovies, searchResults}) => {

  const determineMoviesToDisplay = (movieList) => {
    return movieList.map(movie => {
      return (
        <Card
          title={movie.title}
          posterImage={movie["poster_path"]}
          key={movie.id}
          id={movie.id}
          avgRating={movie["average_rating"]}
        />
      )
    })
  }

  return (
    <section className="movieContainer">
        {sortedMovies.length > 0 &&
          determineMoviesToDisplay(sortedMovies) ||
          searchResults.length > 0 &&
          determineMoviesToDisplay(searchResults) ||
          determineMoviesToDisplay(movies)
        }
    </section>
  )
}

export default Movies

 Movies.propTypes = {
   movies: PropTypes.array,
   sortedMovies: PropTypes.array,
   searchResults: PropTypes.array
 }
