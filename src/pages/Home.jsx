import heroImg from "/photo/accueil.jpg";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <section className="hero" style={{ backgroundImage: `url(${heroImg})` }}>
      <div className="hero-overlay">
        <h1 className="hero-title">YOANN DENIS</h1>
        <p className="hero-subtitle">PHOTOGRAPHIE</p>
        <Link to="/portfolio" className="hero-btn">Entrer dans le portfolio ↓</Link>
      </div>
    </section>
  );
}
