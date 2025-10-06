import React from "react";
import { BrowserRouter as Router, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import AnimatedRoutes from "./router/AnimatedRoutes";
import "./App.css";

function AppContent() {
  const location = useLocation();

  // ✅ Affiche la navbar seulement si on n’est pas sur la page d’accueil
  const showNavbar = location.pathname !== "/";

  return (
    <div className="app-wrapper">
      {showNavbar && <Navbar />}
      <main>
        <AnimatedRoutes />
      </main>
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}