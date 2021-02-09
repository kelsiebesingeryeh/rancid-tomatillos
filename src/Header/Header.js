import React from 'react'
import './Header.css'
import PropTypes from 'prop-types'

const Header = ( {movies}) => {
  let randomMovie = (Math.floor(Math.random() * movies.length))
  let randomMovieHeader = movies[randomMovie]
  let randomMoveImg = randomMovieHeader['backdrop_path']
  let year = randomMovieHeader.release_date.split("-")[0];
  
  return (
    <header className="mainHeader">
      <div className="movieDetailsInfo">
        <h2 className="headerTitle">{randomMovieHeader.title}</h2>
        <div className="headerText">
          <p>{year}</p>
        </div>
      </div>
      <div className="randomMovieImage">
        <img className="headerImage" src={randomMoveImg} />
      </div>
    </header>
  );
}

export default Header

Header.propTypes = {
  movies: PropTypes.array,
};
