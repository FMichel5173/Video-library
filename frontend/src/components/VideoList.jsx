import React from "react";
import PropTypes from "prop-types";
import VideoCard from "./VideoCard";

function VideoList({ videoList }) {
  return (
    <section className="listVideo">
      <ul className="VideoList">
        {videoList && videoList.length
          ? videoList.map((video) => (
              <li key={video.id}>
                <VideoCard video={video} />
              </li>
            ))
          : "Pas de DVD à afficher"}
      </ul>
    </section>
  );
}

VideoList.propTypes = {
  videoList: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default VideoList;
