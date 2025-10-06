import React, { useState, useEffect } from "react";
import "./Gallery.css";

const Gallery = ({ images }) => {
  const [selectedIndex, setSelectedIndex] = useState(null);
  const [isFading, setIsFading] = useState(false);

  // Fonction d'ouverture du carrousel
  const openCarousel = (index) => {
    setSelectedIndex(index);
  };

  // Fonction de fermeture du carrousel
  const closeCarousel = () => {
    setSelectedIndex(null);
  };

  // Navigation dans le carrousel
  const nextImage = () => {
    if (images.length > 1) {
      setIsFading(true);
      setTimeout(() => {
        setSelectedIndex((prevIndex) => (prevIndex + 1) % images.length);
        setIsFading(false);
      }, 300);
    }
  };

  const prevImage = () => {
    if (images.length > 1) {
      setIsFading(true);
      setTimeout(() => {
        setSelectedIndex(
          (prevIndex) => (prevIndex - 1 + images.length) % images.length
        );
        setIsFading(false);
      }, 300);
    }
  };

  // Fermer avec la touche Échap
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") closeCarousel();
      if (e.key === "ArrowRight") nextImage();
      if (e.key === "ArrowLeft") prevImage();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  });

  return (
    <div className="gallery-grid">
      {images.map((img, index) => (
        <img
          key={index}
          src={img}
          alt={`gallery-${index}`}
          className="gallery-thumb"
          onClick={() => openCarousel(index)}
        />
      ))}

      {selectedIndex !== null && (
        <div className="carousel-overlay" onClick={closeCarousel}>
          <button
            className="nav-btn left"
            onClick={(e) => {
              e.stopPropagation();
              prevImage();
            }}
          >
            ‹
          </button>

          <img
            src={images[selectedIndex]}
            alt="carousel"
            className={`carousel-image ${isFading ? "fade" : ""}`}
          />

          <button
            className="nav-btn right"
            onClick={(e) => {
              e.stopPropagation();
              nextImage();
            }}
          >
            ›
          </button>
        </div>
      )}
    </div>
  );
};

export default Gallery;