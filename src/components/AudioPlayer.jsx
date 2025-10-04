import { useEffect, useRef, useState } from "react";

/**
 * 🎵 Lecteur audio discret avec volume progressif (fade-in)
 * - Autoplay au clic
 * - Boucle en continu
 */

export default function AudioPlayer() {
  const audioRef = useRef(null);
  const [muted, setMuted] = useState(false);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    audio.volume = 0; // Démarre silencieux pour le fade-in
    audio.loop = true;

    const fadeIn = () => {
      let volume = 0;
      const fade = setInterval(() => {
        if (volume < 0.3) {
          volume += 0.02;
          audio.volume = volume;
        } else {
          clearInterval(fade);
        }
      }, 150);
    };

    const play = async () => {
      try {
        await audio.play();
        fadeIn();
        setReady(true);
      } catch {
        setReady(false); // Autoplay bloqué : bouton servira à activer le son
      }
    };

    play();
  }, []);

  const toggle = async () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (audio.paused) {
      await audio.play();
      setMuted(false);
    } else {
      audio.pause();
      setMuted(true);
    }
  };

  return (
    <>
      {/* ✅ Remplace ici par ton propre fichier mp3 */}
      <audio
        ref={audioRef}
        src="/audio/relaxing-piano-310597.mp3"
        loop
      />
      <button className="audio-btn" onClick={toggle}>
        {muted || !ready ? "▶ Musique" : "⏸ Musique"}
      </button>
    </>
  );
}