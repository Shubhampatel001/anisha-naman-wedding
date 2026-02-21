import { useRef, useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function IntroOverlay({ onFinish, onStartMusic }) {
  const videoRef = useRef(null);
  const [started, setStarted] = useState(false);
  useEffect(() => {
    if (!started) return;

    const video = videoRef.current;
    if (!video) return;

    const playVideo = async () => {
      try {
        await video.play();
      } catch (err) {
        console.log("Autoplay prevented:", err);
      }
    };

    const timer = setTimeout(playVideo, 120);

    const handleEnded = () => onFinish?.();
    video.addEventListener("ended", handleEnded);

    return () => {
      clearTimeout(timer);
      video.removeEventListener("ended", handleEnded);
    };
  }, [started, onFinish]);
  const handleStart = () => {
    if (started) return;
    setStarted(true);

    onStartMusic?.();
  };

  return (
    <motion.div
      className="fixed inset-0 z-[100] overflow-hidden"
      animate={{ backgroundColor: started ? "#ffffff" : "#F5F0E8" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      {/* ================= VIDEO ================= */}

      {!started && (
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_55%,#F5F0E8_85%)]" />
        </div>
      )}
      <AnimatePresence>
        {started && (
          <motion.div
            key="video"
            initial={{ opacity: 0, scale: 1.08 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="absolute inset-0"
          >
            <div className="absolute inset-0 flex items-center justify-center bg-white">
              <video
                ref={videoRef}
                muted
                playsInline
                preload="auto"
                // poster="/intro-logo-r.png"
                className="
                    w-full
                    h-full
                    object-contain
                    md:object-cover
                  "
              >
                <source src="/intro-logo.webm" type="video/webm" />
                <source src="/intro-logo.mp4" type="video/mp4" />
              </video>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ================= GANESH IDLE ================= */}
      <AnimatePresence>
        {!started && (
          <motion.div
            key="ganesh"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="absolute inset-0 grid place-items-center cursor-pointer px-6"
            onClick={handleStart}
            role="button"
            aria-label="Start wedding invitation"
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") handleStart();
            }}
          >
            <div className="relative flex flex-col items-center justify-center">
              {/* Glow aura */}
              <motion.div
                animate={{
                  opacity: [0.35, 0.75, 0.35],
                  scale: [1, 1.18, 1],
                }}
                transition={{
                  duration: 2.6,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="
                  absolute
                  w-[420px] h-[420px]
                  sm:w-[480px] sm:h-[480px]
                  md:w-[560px] md:h-[560px]
                  rounded-full
                  bg-amber-300/28
                  blur-[100px]
                "
              />

              {/* Floating Ganesh */}
              <motion.img
                src="/ganesh1.png"
                alt="Ganesh"
                animate={{ y: [0, -12, 0], scale: [1, 1.03, 1] }}
                transition={{
                  duration: 3.8,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="
                  relative z-10
                  w-[260px]
                  sm:w-[300px]
                  md:w-[320px]
                  lg:w-[360px]
                  xl:w-[380px]
                  h-auto
                  drop-shadow-[0_30px_70px_rgba(0,0,0,0.18)]
                  select-none pointer-events-none
                "
              />

              {/* Tap hint */}
              <motion.p
                animate={{ opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="mt-6 text-[11px] tracking-[0.35em] text-amber-700/80"
              >
                TAP TO BEGIN
              </motion.p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
