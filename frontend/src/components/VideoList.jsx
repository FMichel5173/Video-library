import React, { useState } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import VideoCard from "./VideoCard";

function VideoList({ videoList }) {
  const [searchTerm, setSearchTerm] = useState("");

  function handleSearch(event) {
    setSearchTerm(
      event.target.value
        .toLowerCase()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
    );
  }

  const filteredList = videoList.filter((video) => {
    return video.title
      .toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .includes(searchTerm);
  });

  return (
    <section className="listVideo">
      <input
        type="text"
        value={searchTerm}
        onChange={handleSearch}
        placeholder="Rechercher un DVD"
      />
      <ul className="VideoList">
        {filteredList && filteredList.length
          ? filteredList.map((video) => (
              <li key={video.id}>
                <Link to={`/video/${video.id}`}>
                  <VideoCard video={video} />
                </Link>
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
