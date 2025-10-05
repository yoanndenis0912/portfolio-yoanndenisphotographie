import { useRef, useState } from "react";
import "./AudioPlayer.css";

const AUDIO_SRC = "/audio/relaxing-piano-310597.mp3";

export default function AudioPlayer() {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const fadeAudio = (targetVol, duration = 1000) => {
    const audio = audioRef.current;
    if (!audio) return;
    const step = (targetVol - audio.volume) / (duration / 50);
    const interval = setInterval(() => {
      let newVol = audio.volume + step;
      if ((step > 0 && newVol >= targetVol) || (step < 0 && newVol <= targetVol)) {
        newVol = targetVol;
        clearInterval(interval);
        if (newVol === 0 && !isPlaying) audio.pause();
      }
      audio.volume = Math.max(0, Math.min(1, newVol));
    }, 50);
  };

  const togglePlay = async () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (isPlaying) {
      fadeAudio(0);
      setIsPlaying(false);
    } else {
      try {
        audio.volume = 0;
        await audio.play();
        fadeAudio(0.3);
        setIsPlaying(true);
      } catch (e) {
        console.warn("Autoplay bloqué, clic requis :", e);
      }
    }
  };

  return (
    <div className="audio-container">
      <audio ref={audioRef} src={AUDIO_SRC} preload="auto" loop />
      <button
        onClick={togglePlay}
        className={`audio-btn ${isPlaying ? "playing" : "paused"}`}
      >
        {isPlaying ? "⏸︎" : "▶︎"}
      </button>
    </div>
  );
}