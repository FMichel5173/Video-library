import React, { useState } from "react";
import { Link } from "react-router-dom";
import { MdAccountCircle, MdClose } from "react-icons/md";
import MaVidéothèque from "../assets/Ma_Vidéothèque.jpeg";
import "../styles/header.css";

function Header() {
  const [isConnected, setIsConnected] = useState(false);
  const [menuIsVisible, setMenuIsVisible] = useState(false);

  return (
    <header className="mainHeader">
      <nav>
        <Link to="/">
          <img className="MVLogo" src={MaVidéothèque} alt="Ma Vidéothèque" />
        </Link>
        {!isConnected ? (
          <Link to="/connexionPage">
            <button type="button" className="button-connexion">
              <MdAccountCircle className="personIcon" />
            </button>
          </Link>
        ) : (
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
              <div className="menuConnected">
                <Link to="/profil">Profil</Link>
                <button
                  className="connectedB"
                  type="button"
                  onClick={() => {
                    setIsConnected(false);
                    setMenuIsVisible(false);
                  }}
                >
                  Déconnexion
                </button>
              </div>
            )}
          </div>
        )}
      </nav>
    </header>
  );
}

export default Header;
