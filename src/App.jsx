import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "./components/Navbar";
import AudioPlayer from "./components/AudioPlayer";
import AnimatedRoutes from "./router/AnimatedRoutes";
import "./App.css";

export default function App() {
  return (
    <Router>
      <Navbar />
      <main>
        <AnimatedRoutes />
      </main>
      <AudioPlayer />
    </Router>
  );
}