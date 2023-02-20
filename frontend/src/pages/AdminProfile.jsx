import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import "../styles/AdminProfile.css";
import { AuthContext } from "../contexts/AuthContext";

function AdminProfile() {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isSaved, setIsSaved] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [adminPassword, setAdminPassword] = useState("");
  const { auth } = useContext(AuthContext);

  useEffect(() => {
    if (auth && auth.isAuthenticated) {
      axios
        .get(`${import.meta.env.VITE_BACKEND_URL}/admins/${auth.id}`, {
          headers: {
            Authorization: `Bearer ${auth.token}`,
          },
        })
        .then((response) => {
          setFirstname(response.data.firstname);
          setLastname(response.data.lastname);
          setEmail(response.data.email);
          setPassword(response.data.password);
          setAdminPassword(response.data.password);
        })
        .catch((error) => {
          console.error(error);
        });
    }
  }, [auth]);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (auth && auth.isAuthenticated) {
      axios
        .put(
          `${import.meta.env.VITE_BACKEND_URL}/admins/${auth.id}`,
          {
            firstname,
            lastname,
            role: "admin",
            email,
            password: password || adminPassword,
          },
          {
            headers: {
              Authorization: `Bearer ${auth.token}`,
            },
          }
        )
        .then(() => {
          setIsSaved(true);
          setHasError(false);
        })
        .catch((error) => {
          console.error(error);
          setIsSaved(false);
          setHasError(true);
        });
    }
  };

  return (
    <>
      <Header />
      <section className="profile">
        <form className="profileForm" onSubmit={handleSubmit}>
          <p>Prénom</p>
          <input
            className="firstname"
            type="text"
            value={firstname}
            onChange={(event) => setFirstname(event.target.value)}
          />
          <p>Nom</p>
          <input
            className="lastname"
            type="text"
            value={lastname}
            onChange={(event) => setLastname(event.target.value)}
          />
          <p>Email</p>
          <input
            className="email"
            type="text"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
          <button className="register" type="submit">
            Enregistrer les modifications
          </button>
          {isSaved && !hasError && <p>Modifications enregistrées</p>}
          {hasError && (
            <p style={{ color: "red" }}>Modifications non enregistrées</p>
          )}
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
