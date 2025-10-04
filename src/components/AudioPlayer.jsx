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
        audio.volume = 0; // démarre à zéro
        await audio.play();

        // Animation fade-in
        let vol = 0;
        const fade = setInterval(() => {
          if (vol < 0.3) {
            vol += 0.02;
            audio.volume = vol;
          } else {
            clearInterval(fade);
          }
        }, 150);

        setPlaying(true);
      } catch (err) {
        console.error("Erreur lecture audio :", err);
      }
    }
  };

  return (
    <>
      <audio ref={audioRef} src="/audio/relaxing-piano-310597.mp3" loop />
      <button className="audio-btn" onClick={toggle}>
        {playing ? "⏸ Stop Musique" : "▶ Jouer Musique"}
      </button>
    </>
  );
}