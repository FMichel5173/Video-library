import React, { useState } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import VideoCard from "./VideoCard";
import "../styles/VideoList.css";

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
      <p className="searchT">Recherche par titre</p>
      <input
        type="text"
        className="searchDVD"
        value={searchTerm}
        onChange={handleSearch}
        placeholder="Entrez le titre"
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
