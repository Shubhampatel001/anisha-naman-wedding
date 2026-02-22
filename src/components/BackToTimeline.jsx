import { motion, AnimatePresence } from "framer-motion";
import { useTimelineBackButton } from "../components/hooks/useTimelineBackButton";

export default function BackToTimeline() {
  const show = useTimelineBackButton();

  return (
    <AnimatePresence>
      {show && (
        <motion.button
          onClick={() => {
            const el = document.getElementById("timeline");
            if (!el) return;

            const y = el.getBoundingClientRect().top + window.scrollY - 80; // offset for header
            window.scrollTo({ top: y, behavior: "smooth" });
          }}
          initial={{ opacity: 0, scale: 0.8, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: 20 }}
          transition={{ duration: 0.25 }}
          className="
              fixed
              bottom-[max(1.5rem,env(safe-area-inset-bottom))]
              left-[max(1rem,env(safe-area-inset-left))]
              md:left-6
              z-40
              w-11 h-11
              rounded-full
              bg-white/90 backdrop-blur
              shadow-lg
              border border-black/10
              flex items-center justify-center
              hover:scale-105
              transition
            "
        >
          ↑
        </motion.button>
      )}
    </AnimatePresence>
  );
}
