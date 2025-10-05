import "./Loader.css";

export default function Loader({ fadeOut }) {
  return (
    <div className={`loader-overlay ${fadeOut ? "fade-out" : ""}`}>
      <div className="loader-text">
        <h1 className="loader-name">YOANN DENIS</h1>
        <h2 className="loader-sub">PHOTOGRAPHIE</h2>
      </div>
    </div>
  );
}