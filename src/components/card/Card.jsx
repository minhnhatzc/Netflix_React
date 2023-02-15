import React from 'react'
import './Card.css'

function Card(props) {
  const imageUrl = `https://image.tmdb.org/t/p//original/${props.poster}`;
  return (
    <div>
      <img src={imageUrl} alt='poster' className='card__poster'/>
    </div>
  )
}

export default Card;

