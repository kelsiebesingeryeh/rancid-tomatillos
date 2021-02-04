import React from 'react';

const Card = ({title, posterImage, id}) => {
  return (
    <div>
      <img src={posterImage} alt={`${title} poster`}/>
    </div>
  )
}

export default Card;
