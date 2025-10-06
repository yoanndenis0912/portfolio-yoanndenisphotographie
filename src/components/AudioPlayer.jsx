import React, { useRef, useState } from "react";
import "./AudioPlayer.css";

const AUDIO_SRC = "/audio/relaxing-piano-310597.mp3"; // ✅ ton fichier dans public/audio/

export default function AudioPlayer() {
  const audioRef = useRef(null);
  React.useEffect(() => {
  if (audioRef.current) {
    audioRef.current.volume = 0.5; // volume à 50%
  }
}, []);
  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlayPause = async () => {
    const audio = audioRef.current;

    if (!audio) return;

    if (isPlaying) {
      audio.pause();
      setIsPlaying(false);
    } else {
      try {
  await audio.play();
} catch (err) {
  console.warn("Lecture bloquée :", err);
  alert("Cliquez sur le bouton pour activer la musique 🎵");
}
      setIsPlaying(true);
    }
  };

  return (
    <div className="audio-container">
      <audio ref={audioRef} src={AUDIO_SRC} preload="auto" loop />
      <button
        onClick={togglePlayPause}
        className={`audio-btn ${isPlaying ? "playing" : "paused"}`}
      >
        {isPlaying ? "⏸️" : "▶️ Musique"}
      </button>
    </div>
  );
}