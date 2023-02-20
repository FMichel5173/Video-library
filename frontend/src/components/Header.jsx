import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { MdAccountCircle } from "react-icons/md";
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
          <div className="navConnect">
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
                ""
              )}
            </button>
            {menuIsVisible && (
              <div>
                <ul className="menuConnected">
                  <li className="NavLi">
                    <Link to="/AdminProfile" className="navA">
                      Profil
                    </Link>
                  </li>
                  <li className="NavLi">
                    <button
                      className="Disconnect"
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
