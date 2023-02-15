import React from 'react'
import './Card.css'
import { useState, useEffect } from 'react';
import axios from 'axios';

function Card(props) {
  const imageUrl = `https://image.tmdb.org/t/p//original/${props.poster}`;

  const [video, setVideo] = useState('');
  const youtubeUrl = `https://www.youtube.com/embed/`;

  const fetchURL = async () => {
    try {
      const response = await axios.get(`/movies/${props.id}`, {
        params: {
          append_to_response: 'videos',
        },
      });
        if(response.data.videos.results.length > 0) {
        setVideo(response.data.videos.results[0].key)
        }

    } catch (e) {
      console.log(e)
    }
  };

  useEffect(() => {
    fetchURL();
  }, [])

  return (
    <div>
      <img src={imageUrl} alt='poster' className='card__poster' />
    </div>
  )
}

export default Card;

