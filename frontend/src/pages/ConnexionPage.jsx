import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Header from "../components/Header";
import "../styles/ConnexionPage.css";

const API_URL = import.meta.env.VITE_BACKEND_URL;

export default function ConnexionPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const handleConnection = (adminData) => {
    console.warn(adminData);
    console.warn(
      `La connexion de l'administrateur ${email} a été établie avec succès`
    );
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const adminResponse = await axios.get(`${API_URL}/admins`, {
        params: {
          email,
        },
      });
      const { data: adminData } = adminResponse;
      if (adminData.length === 0) {
        setError("Email inconnu");
        return;
      }
      const admin = adminData[0];
      const passwordResponse = await axios.get(`${API_URL}/admins/${admin.id}`);
      const { data: passwordData } = passwordResponse;
      if (passwordData.email === email && passwordData.password === password) {
        localStorage.setItem("admin", JSON.stringify(adminData));
        handleConnection(adminData);
        navigate("/");
      } else {
        setError("Identifiants incorrects");
      }
    } catch (err) {
      console.error(err);
      setError("Identifiants incorrects");
    }
  };

  return (
    <>
      <Header />
      <div className="connexion">
        <form className="formC" onSubmit={handleSubmit}>
          <div>
            <input
              className="email"
              type="email"
              placeholder="Email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              required
            />
          </div>
          <div>
            <input
              className="password"
              type="password"
              placeholder="**********"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              required
            />
          </div>
          {error && <div>{error}</div>}
          <button className="connectB" type="submit">
            Valider
          </button>
        </form>
        <button
          className="createB "
          type="button"
          onClick={() => navigate("/NewAccountPage")}
        >
          Créer un compte
        </button>
      </div>
    </>
  );
}
