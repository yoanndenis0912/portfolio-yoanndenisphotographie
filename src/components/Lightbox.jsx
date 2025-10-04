import { useEffect } from "react";

export default function Lightbox({ images = [], currentIndex, onClose, onPrev, onNext }) {
  const isOpen = currentIndex !== null && currentIndex >= 0;

  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") onPrev();
      if (e.key === "ArrowRight") onNext();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [isOpen, onClose, onPrev, onNext]);

  if (!isOpen) return null;
  const img = images[currentIndex];

  return (
    <div className={`lightbox ${isOpen ? "show" : ""}`} onClick={onClose}>
      <button className="lb-btn lb-close" onClick={onClose}>✕</button>
      <button className="lb-btn lb-prev" onClick={(e)=>{e.stopPropagation(); onPrev();}}>‹</button>
      <img className="lightbox-img" src={img.src} alt={img.alt || ""} onClick={(e)=>e.stopPropagation()} />
      <button className="lb-btn lb-next" onClick={(e)=>{e.stopPropagation(); onNext();}}>›</button>
      <div className="lb-counter">{currentIndex+1} / {images.length}</div>
    </div>
  );
}
