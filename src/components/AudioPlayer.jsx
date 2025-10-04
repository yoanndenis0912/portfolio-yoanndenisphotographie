import { useRef, useState } from "react";

export default function AudioPlayer() {
  const audioRef = useRef(null);
  const [playing, setPlaying] = useState(false);

  const toggle = async () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (playing) {
      audio.pause();
      setPlaying(false);
    } else {
      try {
        await audio.play();
        setPlaying(true);
      } catch (err) {
        console.error("Erreur lecture audio :", err);
      }
    }
  };

  return (
    <>
      {/* ⚠️ Vérifie que ton fichier est bien dans public/audio/ */}
      <audio ref={audioRef} src="/audio/relaxing-piano-310597.mp3" loop />
      <button className="audio-btn" onClick={toggle}>
        {playing ? "⏸ Stop Musique" : "▶ Jouer Musique"}
      </button>
    </>
  );
}