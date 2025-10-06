import React, { useEffect, useRef } from "react";
import "./Gallery.css";

const Gallery = ({ images }) => {
  const imgRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 }
    );

    imgRefs.current.forEach((img) => {
      if (img) observer.observe(img);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="gallery-grid">
      {images.map((src, index) => (
        <img
          key={index}
          ref={(el) => (imgRefs.current[index] = el)}
          src={src}
          alt={`photo-${index}`}
          className="gallery-thumb"
        />
      ))}
    </div>
  );
};

export default Gallery;