import React from 'react';
import './Card.css'

const Card = ({title, posterImage, id}) => {
  return (
    <div className="movieCard">
      <img className="moviePosterImage" src={posterImage} alt={`${title} poster`}/>
    </div>
  )
}

export default Card;
