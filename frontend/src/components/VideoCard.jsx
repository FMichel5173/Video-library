import React from "react";
import PropTypes from "prop-types";
import "../styles/VideoCard.css";

export default function VideoCard({ video }) {
  return (
    <section className="cardsVideo">
      <header>
        <h2>{video.title}</h2>
      </header>
      <div className="cover">
        <img
          src={`${import.meta.env.VITE_BACKEND_URL}${video.cover}`}
          alt={video.title}
        />
      </div>
    </section>
  );
}

VideoCard.propTypes = {
  video: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    cover: PropTypes.string.isRequired,
  }).isRequired,
};
