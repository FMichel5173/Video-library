import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

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
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            required
          />
        </div>
        <div>
          <input
            type="password"
            placeholder="Mot de passe"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            required
          />
        </div>
        {error && <div>Identifiants incorrects</div>}
        <button type="submit">Valider</button>
      </form>
      <button type="button" onClick={() => navigate("/NewAccount")}>
        Créer un compte
      </button>
    </div>
  );
}
