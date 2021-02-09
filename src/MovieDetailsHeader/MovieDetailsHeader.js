import React from 'react'
import './MovieDetailsHeader.css'

const MovieDetailsHeader = ( { currentMovie }) => {
    let year = currentMovie.release_date.split('-')[0]
    
    return (
      <header className="movieDetailsHeader">
        <div className="movieDetailsInfo">
          <h2 className="headerTitle">{currentMovie.title}</h2>
          <div className="headerText">
            {currentMovie.runtime === 0 ?
            <p></p>
            :
            <p>{currentMovie.runtime} minutes</p>
            }
            <p className="year">{year}</p>
          </div>
        </div>

        <div className="movieImage">
          {currentMovie.backdrop_path.includes('NoPhotoAvailable') ?
            <p></p>
           :

          <img
            className="headerImage"
            src={currentMovie.backdrop_path}
            alt={`${currentMovie.title}-poster`}
          />
    }
        </div>
      </header>
    );
    }
    
    export default MovieDetailsHeader