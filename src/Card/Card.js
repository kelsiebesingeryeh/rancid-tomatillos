import React from 'react';
import './Card.scss'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import star from '../assets/star.png'

const Card = ({ title, posterImage, id, avgRating }) => {
  return (
    <div className="movieCard">
      <div>
        <Link to={`/movies/${id}`} className="nav">
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
        <span className="viewRatings">
          <img className="star" src={star} alt="star" />
          <p className="movieRating">{avgRating.toFixed(1)}</p>
        </span>
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