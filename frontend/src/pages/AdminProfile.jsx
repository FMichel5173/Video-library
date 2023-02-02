import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import "../styles/AdminProfile.css";

function AdminProfile() {
  const [setAdmin] = useState({});
  const [setFirstName] = useState("");
  const [setLastName] = useState("");
  const [setEmail] = useState("");

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}/admins`)
      .then((response) => {
        setAdmin(response.data);
        setFirstName(response.data.firstName);
        setLastName(response.data.lastName);
        setEmail(response.data.email);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <>
      <Header />
      <section className="profile">
        <form className="profileForm">
          <p>First Name:</p>
          <input
            className="firstname"
            type="text"
            value="Frédéric"
            onChange={(event) => setFirstName(event.target.value)}
          />
          <p>Last Name:</p>
          <input
            className="lastname"
            type="text"
            value="MICHEL"
            onChange={(event) => setLastName(event.target.value)}
          />
          <p>Email:</p>
          <input
            className="email"
            type="text"
            value="fmichel81@sfr.fr"
            onChange={(event) => setEmail(event.target.value)}
          />
          <button className="register" type="submit">
            Enregistrer les modifications
          </button>
          <div>
            <Link to="/DvdRegister">
              <button className="register" type="button">
                Enregister un DVD
              </button>
            </Link>
          </div>
        </form>
      </section>
    </>
  );
}

export default AdminProfile;
