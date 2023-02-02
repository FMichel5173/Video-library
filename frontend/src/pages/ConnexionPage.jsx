import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Header from "../components/Header";
import "../styles/ConnexionPage.css";

export default function ConnexionPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post(
        `${process.env.VITE_BACKEND_URL}/login`,
        { email, password }
      );
      const { data } = response;
      localStorage.setItem("admin", JSON.stringify(data));
      navigate("/");
    } catch (err) {
      console.error(error);
      setError(true);
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
              value="fmichel81@sfr.fr"
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
          {error && <div>Identifiants incorrects</div>}
          <button
            className="connectB"
            type="button"
            onClick={() => navigate("/AdminProfile")}
          >
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
