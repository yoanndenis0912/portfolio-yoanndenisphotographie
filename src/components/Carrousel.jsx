import React, { useMemo, useState, useEffect } from "react";
import "./Gallery.css";

export default function Gallery({ images = [] }) {
  // Normalise: toujours [{src, caption}]
  const items = useMemo(
    () =>
      images
        .map((it) =>
          typeof it === "string" ? { src: it, caption: "" } : { src: it?.src || "", caption: it?.caption || "" }
        )
        .filter((it) => it.src),
    [images]
  );

  const [selectedIndex, setSelectedIndex] = useState(null);

  const open = (i) => setSelectedIndex(i);
  const close = () => setSelectedIndex(null);
  const next = () => setSelectedIndex((i) => (i + 1) % items.length);
  const prev = () => setSelectedIndex((i) => (i - 1 + items.length) % items.length);

  // Défilement auto quand le carrousel est ouvert
  useEffect(() => {
    if (selectedIndex === null) return;
    const t = setInterval(next, 4000);
    return () => clearInterval(t);
  }, [selectedIndex, items.length]);

  if (!items.length) return null;

  return (
    <div className="gallery">
      {/* Mosaïque */}
      <div className="gallery-grid">
        {items.map((img, idx) => (
          <img
            key={idx}
            src={img.src}
            alt={img.caption || `photo-${idx}`}
            className="gallery-thumb"
            onClick={() => open(idx)}
          />
        ))}
      </div>

      {/* Carrousel plein écran */}
      {selectedIndex !== null && (
        <div className="carousel-overlay" onClick={close}>
          <button
            className="nav-btn left"
            onClick={(e) => {
              e.stopPropagation();
              prev();
            }}
          >
            ‹
          </button>

          <img
            className="carousel-image"
            src={items[selectedIndex].src}
            alt={items[selectedIndex].caption || "grande"}
            onClick={(e) => e.stopPropagation()}
          />

          <button
            className="nav-btn right"
            onClick={(e) => {
              e.stopPropagation();
              next();
            }}
          >
            ›
          </button>
        </div>
      )}
    </div>
  );
}