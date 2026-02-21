import { useRef, useState } from "react";
import { motion } from "framer-motion";

export default function IntroOverlay({ onFinish, onStartMusic }) {
  const videoRef = useRef(null);
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    if (clicked) return;
    setClicked(true);

    const video = videoRef.current;
    const isMobile = window.innerWidth < 768;

    if (isMobile) {
      // slight delay prevents zoom-out jank on phones
      setTimeout(() => {
        video.load();
        video.play();
      }, 150);
    } else {
      video.load();
      video.play();
    }

    onStartMusic?.();

    setTimeout(onFinish, 3800);
  };

  return (
    <motion.div
      className="fixed inset-0 z-[100] bg-[#F5F0E8] cursor-pointer overflow-hidden"
      initial={{ opacity: 1 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      onClick={handleClick}
    >
      {/* Video wrapper */}
      <div
        className="
      absolute inset-0
      scale-[1.25]
      md:scale-100
      transform-gpu"
      >
        <video
          ref={videoRef}
          muted
          playsInline
          preload="none"
          poster="/intro-poster1.webp"
          className="
        absolute
        inset-0
        w-full h-full
        object-cover
      "
        >
          <source src="/intro-envelop1.webm" type="video/webm" />
          <source src="/intro-envelop1.mp4" type="video/mp4" />
        </video>
      </div>
    </motion.div>
  );
}
