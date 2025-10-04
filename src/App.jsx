import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "./components/Navbar";
import AudioPlayer from "./components/AudioPlayer";
import AnimatedRoutes from "./router/AnimatedRoutes";
import "./App.css";
import { useEffect } from "react";

export default function App() {
  useEffect(() => {
    // Active la musique au premier clic de l'utilisateur
    const enableAudio = () => {
      const audio = document.querySelector("audio");
      if (audio && audio.paused) {
        audio.play().catch(() => {});
      }
      window.removeEventListener("click", enableAudio);
    };

    window.addEventListener("click", enableAudio);
  }, []);

  return (
    <Router>
      <Navbar />
      <AnimatedRoutes />
      <AudioPlayer />
    </Router>
  );
}