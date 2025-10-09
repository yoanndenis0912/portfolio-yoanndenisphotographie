import React from "react";
import { Link } from "react-router-dom";
import "./Merci.css";

function Merci() {
  return (
    <div className="merci-page">
      <div className="merci-overlay"></div>

      <div className="merci-content">
        <h1>Merci pour ton message !</h1>
        <p>
          Ton message a bien été envoyé 📸  
          Je te répondrai sous sept jours ouvrés.
        </p>
        <Link to="/" className="back-home">
          ← Retour à l’accueil
        </Link>
      </div>
    </div>
  );
}

export default Merci;