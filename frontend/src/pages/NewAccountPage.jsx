import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "../styles/NewAccountPage.css";
import Header from "../components/Header";

function NewAccountPage() {
  const [formValues, setFormValues] = useState({
    firstname: "",
    lastname: "",
    role: "admin",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState(false);
  const navigate = useNavigate();

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormValues((prevValues) => ({ ...prevValues, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const { firstname, lastname, role, email, password, confirmPassword } =
      formValues;

    if (password !== confirmPassword) {
      setError(true);
      return;
    }

    try {
      const response = await axios.post(
        `${import.meta.env.VITE_BACKEND_URL}/admins`,
        {
          firstname,
          lastname,
          role,
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
              name="firstname"
              value={formValues.firstname}
              onChange={handleInputChange}
              required
            />
          </div>
          <div>
            <input
              className="createLastname"
              type="text"
              placeholder="Nom"
              name="lastname"
              value={formValues.lastname}
              onChange={handleInputChange}
              required
            />
          </div>
          <div>
            <input
              className="createEmail"
              type="email"
              placeholder="Email"
              name="email"
              value={formValues.email}
              onChange={handleInputChange}
              required
            />
          </div>
          <div>
            <input
              className="createPassword"
              type={showPassword ? "text" : "password"}
              placeholder="Mot de passe"
              name="password"
              value={formValues.password}
              onChange={handleInputChange}
              required
            />
          </div>
          <div>
            <input
              className="createConfirmPassword"
              type={showPassword ? "text" : "password"}
              placeholder="Confirmer le mot de passe"
              name="confirmPassword"
              value={formValues.confirmPassword}
              onChange={handleInputChange}
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

export default NewAccountPage;
