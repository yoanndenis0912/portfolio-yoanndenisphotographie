import React, { useState } from "react";
import { useParams } from "react-router-dom";
import galleryData from "../utils/galleryData";
import Lightbox from "../components/Lightbox";
import useFadeIn from "../hooks/useFadeIn";

export default function Gallery() {
  const { slug } = useParams();
  const photos = galleryData[slug] || [];
  const [currentIndex, setCurrentIndex] = useState(null);

  const open = (i) => setCurrentIndex(i);
  const close = () => setCurrentIndex(null);
  const prev = () => setCurrentIndex((i) => (i > 0 ? i - 1 : photos.length - 1));
  const next = () => setCurrentIndex((i) => (i < photos.length - 1 ? i + 1 : 0));

  return (
    <main className="project-page">
      <h1 className="center-title">{slug.toUpperCase()}</h1>
      <div className="masonry-grid">
        {photos.map((img, i) => {
          const [ref, isVisible] = useFadeIn();
          return (
            <img
              key={i}
              ref={ref}
              src={img.src}
              alt={img.alt}
              className={`gallery-img fade-in-up ${isVisible ? "visible" : ""}`}
              loading="lazy"
              onClick={() => open(i)}
            />
          );
        })}
      </div>
      <Lightbox
        images={photos}
        currentIndex={currentIndex}
        onClose={close}
        onPrev={prev}
        onNext={next}
      />
    </main>
  );
}
