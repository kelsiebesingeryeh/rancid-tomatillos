import React from 'react'
import './Header.scss'
import PropTypes from 'prop-types'
import Form from '../Form/Form'

const Header = ( {movies, showForm}) => {
  let randomMovie = (Math.floor(Math.random() * movies.length))
  let randomMovieHeader = movies[randomMovie]
  let randomMoveImg = randomMovieHeader['backdrop_path']
  let year = randomMovieHeader.release_date.split("-")[0];

  return (
    <header className="mainHeader">
      {showForm && <Form /> }
      <div className="movieDetailsInfo">
        <h2 className="headerTitle">{randomMovieHeader.title}</h2>
        <div className="headerText">
          <p>{year}</p>
        </div>
      </div>
      <div className="randomMovieImage">
        <h1 className="appTitle">Rancid Tomatillos</h1>
      {randomMoveImg.includes('NoPhotoAvailable') ?
        <p className="noHeaderImage"></p>
       :
        <img
          className="headerImage"
          src={randomMoveImg}
          alt={`${randomMovieHeader.title}-poster`}
        />
      }
      </div>
    </header>
  );
}

export default Header

Header.propTypes = {
  movies: PropTypes.array,
};
