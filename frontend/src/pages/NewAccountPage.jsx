import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "../styles/NewAccountPage.css";
import Header from "../components/Header";

export default function NewAccountPage() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (password !== confirmPassword) {
      setError(true);
      return;
    }

    try {
      const response = await axios.post(
        `${process.env.VITE_BACKEND_URL}/admins`,
        {
          firstName,
          lastName,
          email,
          password,
        }
      );
      const { data } = response;
      localStorage.setItem("admin", JSON.stringify(data));
      navigate("/");
    } catch (err) {
      console.error(err);
      setError(true);
    }
  };

  return (
    <>
      <Header />
      <div className="create">
        <form className="createForm" onSubmit={handleSubmit}>
          <div>
            <input
              className="createFirstname"
              type="text"
              placeholder="Prénom"
              value={firstName}
              onChange={(event) => setFirstName(event.target.value)}
              required
            />
          </div>
          <div>
            <input
              className="createLastname"
              type="text"
              placeholder="Nom"
              value={lastName}
              onChange={(event) => setLastName(event.target.value)}
              required
            />
          </div>
          <div>
            <input
              className="createEmail"
              type="email"
              placeholder="Email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              required
            />
          </div>
          <div>
            <input
              className="createPassword"
              type={showPassword ? "text" : "password"}
              placeholder="Mot de passe"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              required
            />
          </div>
          <div>
            <input
              className="createConfirmPassword"
              type={showPassword ? "text" : "password"}
              placeholder="Confirmer le mot de passe"
              value={confirmPassword}
              onChange={(event) => setConfirmPassword(event.target.value)}
              required
            />
          </div>
          <div>
            <label htmlFor="show-password">
              <input
                className="createCheckbox"
                type="checkbox"
                id="show-password"
                checked={showPassword}
                onChange={() => setShowPassword(!showPassword)}
              />
              <span>Afficher le mot de passe</span>
            </label>
          </div>
          {error && <div>Les mots de passe ne correspondent pas</div>}
          <button className="createAccount" type="submit">
            Créer un compte
          </button>
        </form>
        <button
          className="createCancel"
          type="button"
          onClick={() => navigate("/")}
        >
          Annuler
        </button>
      </div>
    </>
  );
}
