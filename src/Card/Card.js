import React from 'react';
import './Card.css'
import PropTypes from 'prop-types'

const Card = ({ title, posterImage, id, displayMovieDetails }) => {
  return (
    <div className="movieCard">
      <div>
        <img
          className="moviePosterImage"
          src={posterImage}
          alt={`${title} poster`}
          id={id}
          onClick={() => displayMovieDetails(id)}
        />
      </div>
      <div className="movieTitles">
        <p className="movieTitle">{title}</p>
      </div>
    </div>
  );
};

export default Card;

Card.propTypes = {
  title: PropTypes.string,
  posterImage: PropTypes.string,
  id: PropTypes.number,
  displayMovieDetails: PropTypes.func
};
