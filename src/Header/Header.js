import React from 'react'
import './Header.scss'
import PropTypes from 'prop-types'
import Form from '../Form/Form'
import Sort from '../Sort/Sort'

const Header = ({
  movies,
  showForm,
  displaySearchResults,
  displaySubHeadingText,
  showSort,
  displaySortedMovies,
  sortedMovies,
}) => {
  let randomMovie = Math.floor(Math.random() * movies.length);
  let randomMovieHeader = movies[randomMovie];
  let randomMoveImg = randomMovieHeader["backdrop_path"];
  let year = randomMovieHeader.release_date.split("-")[0];

  return (
    <>
      <header className="mainHeader">
        <div className="headerStyling">
          {showForm && (
            <Form
              movies={movies}
              displaySearchResults={displaySearchResults}
              displaySubHeadingText={displaySubHeadingText}
            />
          )}
          {showSort && (
            <Sort
              movies={movies}
              sortedMovies={sortedMovies}
              displaySortedMovies={displaySortedMovies}
            />
          )}
          <div className="headerInfo">
            <h2 className="headerTitle">{randomMovieHeader.title}</h2>
            <div className="headerText">
              <p className="headerYear">{year}</p>
            </div>
          </div>
        </div>
          <h1 className="appTitle">Rancid Tomatillos</h1>
        <div className="randomMovieImage">
          {randomMoveImg.includes("NoPhotoAvailable") ? (
            <div className="noHeaderImage"></div>
          ) : (
            <img
              className="headerImage"
              src={randomMoveImg}
              alt={`${randomMovieHeader.title}-poster`}
            />
          )}
        </div>
      </header>
    </>
  );
};

export default Header

Header.propTypes = {
  movies: PropTypes.array,
};
