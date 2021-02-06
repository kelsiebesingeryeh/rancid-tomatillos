import React from 'react'
import './MovieDetailsHeader.css'

const MovieDetailsHeader = ( { currentMovie }) => {
    return (
      <header className="movieDetailsHeader">

            <div className="movieDetailsInfo">
                <h2>{currentMovie.title}</h2>
            </div>

            <div className="movieImage">
                <img
                    className="headerImage"
                    src={currentMovie.backdrop_path}
                    alt={`${currentMovie.title}-poster`}
                />
            </div>
      </header>
    );
    }
    
    export default MovieDetailsHeader
  
    
    // let randomMovie = (Math.floor(Math.random() * movies.length))
    // let randomMovieHeader = movies[randomMovie].backdrop_path
    // <img className='headerImage' src={randomMovieHeader}/>