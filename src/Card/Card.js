import React from 'react';
import './Card.css'
import star from '../assets/star.png'

const Card = ({ title, posterImage, id, avgRating, displayMovieDetails }) => {
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
