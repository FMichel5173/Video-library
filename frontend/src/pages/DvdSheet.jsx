import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import "../styles/DvdSheet.css";
import { BsSkipBackward } from "react-icons/bs";
import Header from "../components/Header";

function DvdSheet() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [video, setVideo] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(
          `${import.meta.env.VITE_BACKEND_URL}/videos/${id}`
        );
        const data = await response.json();
        setVideo(data);
      } catch (err) {
        setError(err);
      }
    }

    fetchData();
  }, [id]);

  if (error) {
    return (
      <div>Une erreur est survenue lors de la récupération des données</div>
    );
  }

  if (!video) {
    return <div>Chargement en cours...</div>;
  }

  return (
    <div>
      <Header />
      <div className="DVDDetails">
        <button className="return" type="button" onClick={() => navigate("/")}>
          <BsSkipBackward />
        </button>
        <h2>{video.title}</h2>
        <img
          className="coverD"
          src={`${import.meta.env.VITE_BACKEND_URL}${video.cover}`}
          alt={video.title}
        />
        <h3>Résumé</h3>
        <p>{video.synopsis}</p>
      </div>
    </div>
  );
}

export default DvdSheet;
