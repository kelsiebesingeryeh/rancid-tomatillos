import React from 'react'
import './MovieDetailsHeader.css'

const MovieDetailsHeader = ( { currentMovie }) => {
    return (
      <header className="movieDetailsHeader">
        <img
          className="headerImage"
          src={currentMovie.backdrop_path}
          alt={`${currentMovie.title}-poster`}
        />
      </header>
    );
    }
    
    export default MovieDetailsHeader
  
    
    // let randomMovie = (Math.floor(Math.random() * movies.length))
    // let randomMovieHeader = movies[randomMovie].backdrop_path
    // <img className='headerImage' src={randomMovieHeader}/>