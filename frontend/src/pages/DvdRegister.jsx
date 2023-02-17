import React, { useState } from "react";
import axios from "axios";
import { RxDoubleArrowLeft } from "react-icons/rx";
import Header from "../components/Header";
import "../styles/DvdRegister.css";

function DvdRegister() {
  const [title, setTitle] = useState("");
  const [cover, setCover] = useState("");
  const [synopsis, setSynopsis] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await axios.post(`${import.meta.env.VITE_BACKEND_URL}/videos`, {
        title,
        cover,
        synopsis,
      });
      setMessage("DVD enregistré avec succès");
    } catch (error) {
      console.error(error);
      setMessage("Erreur lors de l'enregistrement du DVD");
    }
  };

  return (
    <>
      <Header />
      <button
        className="return"
        type="button"
        onClick={() => window.history.back()}
      >
        <RxDoubleArrowLeft />
      </button>
      <div className="DVD">
        {message && <div className="message">{message}</div>}
        <form className="DvdForm" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="title">Titre</label>
            <br />
            <input
              className="title"
              type="text"
              id="title"
              value={title}
              onChange={(event) => setTitle(event.target.value)}
            />
          </div>
          <div>
            <label htmlFor="cover">Pochette</label>
            <br />
            <input
              className="coverD"
              type="text"
              id="cover"
              value={cover}
              onChange={(event) => setCover(event.target.value)}
            />
          </div>
          <div>
            <label htmlFor="synopsis">Synopsis</label>
            <br />
            <textarea
              className="synopsis"
              id="synopsis"
              value={synopsis}
              onChange={(event) => setSynopsis(event.target.value)}
            />
          </div>
          <button className="register" type="submit">
            Enregistrer
          </button>
        </form>
      </div>
    </>
  );
}

export default DvdRegister;
