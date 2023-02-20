import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { MdAccountCircle, MdClose } from "react-icons/md";
import MaVidéothèque from "../assets/Ma_Vidéothèque.jpeg";
import "../styles/header.css";
import { AuthContext } from "../contexts/AuthContext";

function Header() {
  const { auth, setAuth } = useContext(AuthContext);
  const [menuIsVisible, setMenuIsVisible] = useState(false);

  return (
    <header className="mainHeader">
      <nav>
        <Link to="/">
          <img className="MVLogo" src={MaVidéothèque} alt="Ma Vidéothèque" />
        </Link>
        {!auth.isAuthenticated && (
          <Link to="/connexionPage">
            <button type="button" className="button-connexion">
              <MdAccountCircle className="personIcon" />
              <p className="connect">Connectez vous</p>
            </button>
          </Link>
        )}

        {auth.isAuthenticated && (
          <div>
            <button
              type="button"
              className="button-connexion"
              onClick={() => {
                setMenuIsVisible(!menuIsVisible);
              }}
            >
              {!menuIsVisible ? (
                <>
                  <MdAccountCircle className="personIcon" />
                  <p className="connectOn">Connecté</p>
                </>
              ) : (
                <MdClose className="personIconClose" />
              )}
            </button>
            {menuIsVisible && (
              <div>
                <ul className="menuConnected">
                  <li>
                    <Link to="/AdminProfile">Profil</Link>
                  </li>
                  <li>
                    <button
                      type="button"
                      onClick={() => {
                        setAuth({
                          isAuthenticated: false,
                          token: null,
                          id: null,
                          role: null,
                        });
                      }}
                    >
                      Déconnexion
                    </button>
                  </li>
                </ul>
              </div>
            )}
          </div>
        )}
      </nav>
    </header>
  );
}

export default Header;
