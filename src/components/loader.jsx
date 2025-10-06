import React from "react";

export default function Loader({ visible, fading }) {
  // Si pas visible => rien dans le DOM (évite de gêner le carrousel)
  if (!visible) return null;

  return (
    <div
      id="app-loader"
      style={{
        position: "fixed",
        inset: 0,
        // ✅ fond garanti noir au début, qui devient transparent pendant le fade out
        background: fading ? "rgba(0,0,0,0)" : "#000",
        color: "#fff",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        zIndex: 100000, // au-dessus de tout
        transition: "background 700ms ease, opacity 700ms ease",
        opacity: fading ? 0 : 1,
        pointerEvents: "none", // ne bloque jamais les clics du carrousel ni du site
      }}
    >
      <h1 className="app-title">YOANN DENIS</h1>
      <h2 className="app-sub">PHOTOGRAPHIE</h2>
    </div>
  );
}