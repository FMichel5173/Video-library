import React, { useState, useEffect } from "react";
import axios from "axios";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import "../styles/AdminProfile.css";

function AdminProfile({ adminId }) {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}/admins/${adminId}`)
      .then((response) => {
        setFirstName(response.data.firstName);
        setLastName(response.data.lastName);
        setEmail(response.data.email);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [adminId]);

  return (
    <>
      <Header />
      <section className="profile">
        <form className="profileForm">
          <p>First Name:</p>
          <input
            className="firstname"
            type="text"
            value={firstName}
            onChange={(event) => setFirstName(event.target.value)}
          />
          <p>Last Name:</p>
          <input
            className="lastname"
            type="text"
            value={lastName}
            onChange={(event) => setLastName(event.target.value)}
          />
          <p>Email:</p>
          <input
            className="email"
            type="text"
            value={email}
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

AdminProfile.propTypes = {
  adminId: PropTypes.number.isRequired,
};
