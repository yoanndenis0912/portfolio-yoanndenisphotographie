import { useEffect, useRef, useState } from "react";

/**
 * Lecteur audio discret (autoplay 30%, loop)
 * Remplace la source par ton propre fichier si besoin
 */
export default function AudioPlayer() {
  const audioRef = useRef(null);
  const [muted, setMuted] = useState(false);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;
    audio.volume = 0.3;
    const play = async () => {
      try {
        await audio.play();
        setReady(true);
      } catch (e) {
        // Certains navigateurs bloquent l'autoplay : le bouton permettra de lancer
        setReady(false);
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
      {/* URL publique d'un sample libre. Remplace par ton propre fichier si tu veux */}
      <audio ref={audioRef} src="/src/assets/audio/relaxing-piano-310597.mp3" loop />
      <button className="audio-btn" onClick={toggle}>
        {muted || !ready ? "▶ Musique" : "⏸ Musique"}
      </button>
    </>
  );
}
