import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Header from "../components/Header";

function AdminProfile() {
  const [setAdmin] = useState({});
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");

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
      <section>
        <form>
          <h3>First Name:</h3>
          <input
            type="text"
            value={firstName}
            onChange={(event) => setFirstName(event.target.value)}
          />
          <h3>Last Name:</h3>
          <input
            type="text"
            value={lastName}
            onChange={(event) => setLastName(event.target.value)}
          />
          <h3>Email:</h3>
          <input
            type="text"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
          <button type="submit">Enregistrer les changements</button>
          <div>
            <Link to="/DvdRegister">
              <button type="button">Enregister un DVD</button>
            </Link>
          </div>
        </form>
      </section>
    </>
  );
}

export default AdminProfile;
