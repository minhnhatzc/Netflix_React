import React from "react";
import "./Card.css";
import { useState, useEffect } from "react";
import axios from "axios";

function Card(props) {
  const imageUrl = `https://image.tmdb.org/t/p/original/${props.backdrop_Path}`;
  const [isHovered, setIsHovered] = useState(false);
  const [video, setVideo] = useState(null);
  const youtubeUrl = `https://www.youtube.com/embed/`;
  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const fetchURL = async () => {
    try {
      const response = await axios.get(`/movie/${props.id}`, {
        params: {
          append_to_response: "videos",
        },
      });
      if (response.data.videos.results.length > 0) {
        setVideo(response.data.videos.results[0].key);
      }
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    fetchURL();
  }, [props.id]);

  return (
    <div
    className="card__warapper"
    style={{
      position: 'relative',
    }}
    onMouseEnter={handleMouseEnter}
    onMouseLeave={handleMouseLeave}>
      {!isHovered && <img src={imageUrl} alt={`img-${props.id}`} />}
        {
          isHovered && (
        <div className="card__info">
        <iframe
          width="100%"
          height="100%"
          src={`${youtubeUrl}${video}`}
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>

        </div>
        )}
    </div>
  );
}

export default Card;
