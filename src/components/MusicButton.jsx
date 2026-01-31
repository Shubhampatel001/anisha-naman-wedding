import { useEffect, useRef, useState } from "react";
import { FaMusic, FaPause } from "react-icons/fa";
import music from "../assets/intro-music.mp3";

export default function MusicButton({ audioRef }) {
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const onPlay = () => setPlaying(true);
    const onPause = () => setPlaying(false);

    audio.addEventListener("play", onPlay);
    audio.addEventListener("pause", onPause);

    return () => {
      audio.removeEventListener("play", onPlay);
      audio.removeEventListener("pause", onPause);
    };
  }, [audioRef]);

  useEffect(() => {
    const stopMusic = () => {
      audioRef.current?.pause();
      audioRef.current.currentTime = 0;
    };

    window.addEventListener("beforeunload", stopMusic);
    return () => window.removeEventListener("beforeunload", stopMusic);
  }, [audioRef]);

  const toggleMusic = () => {
    if (!audioRef.current) return;

    if (audioRef.current.paused) {
      audioRef.current.play().catch(() => {});
    } else {
      audioRef.current.pause();
    }
  };

  return (
    <>
      <audio ref={audioRef} src={music} loop preload="auto" />

      <button
        onClick={toggleMusic}
        className="
          fixed bottom-6 right-6 z-50
          p-4 rounded-full
          bg-primary/90 text-white
          shadow-lg backdrop-blur-md
          hover:scale-105 transition-all duration-300
        "
        aria-label="Toggle music"
      >
        {playing ? <FaPause /> : <FaMusic />}
      </button>
    </>
  );
}
