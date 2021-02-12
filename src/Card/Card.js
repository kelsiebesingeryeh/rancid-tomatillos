import React from 'react';
import './Card.scss'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

const Card = ({ title, posterImage, id }) => {
  return (
    <div className="movieCard">
      <div>
        <Link to={`/movies/${id}`} className='nav'>
          <img
            className="moviePosterImage"
            src={posterImage}
            alt={`${title} poster`}
            id={id}
          />
        </Link>
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
  id: PropTypes.number
}