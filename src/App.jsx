import { useState, useEffect } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "./components/Navbar";
import AudioPlayer from "./components/AudioPlayer";
import AnimatedRoutes from "./router/AnimatedRoutes";
import Loader from "./components/Loader";
import "./App.css";

export default function App() {
  const [showLoader, setShowLoader] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    // Lance le fondu après 3.2s
    const fadeTimer = setTimeout(() => setFadeOut(true), 4000);

    // Retire complètement le loader après 6s
    const removeTimer = setTimeout(() => setShowLoader(false), 6000);

    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(removeTimer);
    };
  }, []);

  return (
    <Router>
      <div className={`app-wrapper ${fadeOut ? "fade-in" : "fade-out"}`}>
        <Navbar />
        <main>
          <AnimatedRoutes />
        </main>
        <AudioPlayer />
      </div>

      {/* Le Loader reste visible au-dessus du Hero */}
      {showLoader && <Loader fadeOut={fadeOut} />}
    </Router>
  );
}