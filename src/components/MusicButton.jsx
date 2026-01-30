import { useEffect, useRef, useState } from "react";
import { FaMusic, FaPause } from "react-icons/fa";
import music from "../assets/intro-music.mp3";

export default function MusicButton() {
  const audioRef = useRef(null);
  const [playing, setPlaying] = useState(false);
  const [initialized, setInitialized] = useState(false);

  // Start music after first user interaction
  useEffect(() => {
    const startMusic = () => {
      if (!initialized) {
        audioRef.current.play().catch(() => {});
        setPlaying(true);
        setInitialized(true);
      }
      document.removeEventListener("click", startMusic);
    };

    document.addEventListener("click", startMusic);

    return () => {
      document.removeEventListener("click", startMusic);
    };
  }, [initialized]);

  const toggleMusic = () => {
    if (!audioRef.current) return;

    if (playing) {
      audioRef.current.pause();
    } else {
      audioRef.current.play().catch(() => {});
    }
    setPlaying(!playing);
  };

  return (
    <>
      <audio ref={audioRef} src={music} loop preload="auto" />

      <button
        onClick={toggleMusic}
        className="fixed bottom-6 right-6 z-50 p-4 rounded-full bg-primary/90 text-white shadow-lg backdrop-blur-md hover:scale-105 transition-all duration-300"
        aria-label="Toggle music"
      >
        {playing ? <FaPause /> : <FaMusic />}
      </button>
    </>
  );
}
