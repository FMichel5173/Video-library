import React, { useEffect, useState } from "react";
import axios from "axios";

export default function VideoCard() {
  const [formData, setFormData] = useState({
    id: "",
    title: "",
    cover: "",
  });

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}/videos`)
      .then((response) => {
        setFormData(response.data[0]);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <section className="cardsVideo">
      <header>
        <h2>{formData.title}</h2>
      </header>
      <img
        src={`${import.meta.env.VITE_BACKEND_URL}${formData.cover}`}
        alt={formData.title}
      />
    </section>
  );
}
