import React from "react";
import PropTypes from "prop-types";

export default function VideoCard({ video }) {
  return (
    <section className="cardsVideo">
      <header>
        <h2>{video.video_title}</h2>
      </header>
      <img src={video.video_cover} alt={video.video_title} />
    </section>
  );
}

VideoCard.propTypes = {
  video: PropTypes.shape({
    video_title: PropTypes.string,
    video_cover: PropTypes.string,
  }).isRequired,
};
