import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

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
      <button type="button" onClick={() => navigate("/")}>
        Retour
      </button>
      <h1>{video.title}</h1>
      <img
        src={`${import.meta.env.VITE_BACKEND_URL}${video.cover}`}
        alt={video.title}
      />
      <p>{video.synopsis}</p>
    </div>
  );
}

export default DvdSheet;
