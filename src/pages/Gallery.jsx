import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { galleryData } from "../data/galleryData";

export default function Gallery() {
  const { slug } = useParams();
  const category = (slug || "").toLowerCase();
  const images = galleryData[category] || [];
  const [idx, setIdx] = useState(null);
  const [fade, setFade] = useState(true);

  // ⚙️ Navigation clavier
  useEffect(() => {
    if (idx === null) return;
    function onKey(e) {
      if (e.key === "Escape") setIdx(null);
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  });

  // 🎠 Auto défilement avec fondu
  useEffect(() => {
    if (idx === null) return;
    const timer = setInterval(() => next(), 5000); // 5s entre chaque image
    return () => clearInterval(timer);
  }, [idx]);

  const next = () => {
    setFade(false);
    setTimeout(() => {
      setIdx((i) => (i + 1) % images.length);
      setFade(true);
    }, 200);
  };

  const prev = () => {
    setFade(false);
    setTimeout(() => {
      setIdx((i) => (i - 1 + images.length) % images.length);
      setFade(true);
    }, 200);
  };

  if (images.length === 0) {
    return (
      <div style={{ textAlign: "center", marginTop: 120 }}>
        <h2>Aucune image trouvée pour cette catégorie 🤔</h2>
        <Link to="/portfolio" className="back-btn">← Retour au portfolio</Link>
      </div>
    );
  }

  const title = category.charAt(0).toUpperCase() + category.slice(1);

  return (
    <main className="project-page">
      <Link to="/portfolio" className="back-btn">← Retour</Link>
      <h1 className="center-title">{title}</h1>

      {/* Miniatures */}
      <div className="mosaic">
        {images.map((img, i) => (
          <div
            className="mosaic-item"
            key={i}
            onClick={() => setIdx(i)}
            role="button"
          >
            <img src={img.src} alt={img.caption || `Image ${i + 1}`} />
          </div>
        ))}
      </div>

      {/* Lightbox */}
      {idx !== null && (
        <div
          className="lightbox show"
          onClick={(e) => {
            if (e.target.classList.contains("lightbox")) setIdx(null);
          }}
        >
          <button className="close-btn" onClick={() => setIdx(null)}>×</button>

          {/* Flèches stylisées */}
          <button className="nav-btn left" onClick={(e) => { e.stopPropagation(); prev(); }}>
            <span className="arrow">❮</span>
          </button>

          <div className={`lightbox-image-wrapper ${fade ? "fade-in" : "fade-out"}`}>
            <img
              className="lightbox-img"
              src={images[idx].src}
              alt={images[idx].caption || `Image ${idx + 1}`}
              onClick={(e) => e.stopPropagation()}
            />
          </div>

          <button className="nav-btn right" onClick={(e) => { e.stopPropagation(); next(); }}>
            <span className="arrow">❯</span>
          </button>

          <div className="lightbox-counter">{idx + 1} / {images.length}</div>
        </div>
      )}
    </main>
  );
}