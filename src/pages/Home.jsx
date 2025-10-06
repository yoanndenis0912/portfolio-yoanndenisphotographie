import { Link } from "react-router-dom";
import "./Home.css";

export default function Home() {
  return (
    <section className="hero">
  <div className="hero-content">
    <h1 className="hero-title">YOANN DENIS</h1>
    <h2 className="hero-subtitle">PHOTOGRAPHIE</h2>
    <a href="/portfolio" className="hero-button">Entrer dans le portfolio ↓</a>
  </div>
</section>
  );
}