import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Header from "../components/Header";
import "../styles/ConnexionPage.css";
import { AuthContext } from "../contexts/AuthContext";

const API_URL = import.meta.env.VITE_BACKEND_URL;

export default function ConnexionPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const { setAuth } = useContext(AuthContext);

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post(`${API_URL}/login`, {
        email,
        password,
      });
      const { token } = response.data;
      localStorage.setItem("token", token);
      axios.defaults.headers.common.Authorization = `Bearer ${token}`;
      setAuth({
        isAuthenticated: true,
        token,
      });
      navigate("/");
    } catch (err) {
      console.error(err);
      setError("Identifiants incorrects");
    }
  };

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
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
          <div className="passDiv">
            <input
              className="password"
              type={showPassword ? "text" : "password"}
              placeholder="**********"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              required
            />
            <label className="checkPass">
              <input
                className="showPassword"
                type="checkbox"
                checked={showPassword}
                onChange={handleShowPassword}
              />
              Afficher le mot de passe
            </label>
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
