import { useRef, useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
export default function IntroOverlay({ onFinish, onStartMusic }) {
  const videoRef = useRef(null);
  const [started, setStarted] = useState(false);
  const [introDone, setIntroDone] = useState(false);
  //Scroll lock
  useEffect(() => {
    window.scrollTo(0, 0);
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

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

    const handleEnded = () => {
      setTimeout(() => {
        document.body.style.overflow = "auto";

        document.getElementById("hero")?.scrollIntoView({
          behavior: "smooth",
        });

        onFinish?.();
      }, 500); //  gives hero time to breathe
    };
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
      className="fixed inset-0 z-[100] overflow-hidden bg-[#F5F0E8]"
      initial={{ opacity: 1 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{
        duration: 1.1,
        ease: [0.22, 1, 0.36, 1],
      }}
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
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            exit={{ opacity: 0 }}
            className="absolute inset-0"
          >
            <div className="absolute inset-0 flex items-center justify-center bg-[#F5F0E8]">
              <video
                ref={videoRef}
                muted
                playsInline
                preload="auto"
                // poster="/intro-logo-r.png"
                className="
                    w-full
                    h-full
                    object-cover
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

              {/* Ganesh Wrapper */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1.2, ease: "easeOut" }}
                className="relative"
              >
                {/* Gold shimmer */}
                <motion.div
                  animate={{ x: ["-120%", "120%"] }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  className="
                    absolute inset-0
                    bg-gradient-to-r
                    from-transparent
                    via-white/40
                    to-transparent
                    opacity-30
                    blur-sm
                  "
                />

                {/* Floating Ganesh */}
                <motion.img
                  src="/lordGaneshJiIntro.webp"
                  alt="Ganesh"
                  animate={{
                    y: [0, -12, 0],
                    scale: [1, 1.03, 1],
                  }}
                  transition={{
                    duration: 3.8,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="
                    relative z-10
                    w-[340px]
                    sm:w-[380px]
                    md:w-[400px]
                    lg:w-[420px]
                    xl:w-[440px]
                    h-auto
                    drop-shadow-[0_30px_70px_rgba(0,0,0,0.18)]
                    select-none pointer-events-none
                  "
                />
              </motion.div>

              {/* Sparkle */}
              {/* <motion.div
                animate={{
                  opacity: [0.3, 1, 0.3],
                  scale: [1, 1.6, 1],
                  y: [-10, 10, -10],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                }}
                className="
                  absolute
                  top-10
                  right-20
                  w-2
                  h-2
                  bg-yellow-300
                  rounded-full
                  blur-[1px]
                "
              /> */}

              {/* Tap hint */}
              <motion.p
                animate={{
                  opacity: [0.4, 1, 0.4],
                  scale: [1, 1.08, 1],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                }}
                className="mt-6 text-[12px] tracking-[0.35em] text-amber-700"
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
