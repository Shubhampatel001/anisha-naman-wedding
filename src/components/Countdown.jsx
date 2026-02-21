import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const WEDDING_DATE = new Date("2026-04-20T00:00:00");

function getTimeLeft() {
  const now = new Date();
  const diff = WEDDING_DATE - now;

  if (diff <= 0) {
    return { days: 0, hours: 0, mins: 0, secs: 0 };
  }

  return {
    days: Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
    mins: Math.floor((diff / (1000 * 60)) % 60),
    secs: Math.floor((diff / 1000) % 60),
  };
}

/* ---------- Animation presets ---------- */

const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const card = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};
function FlipDigit({ value }) {
  return (
    <div className="relative">
      <AnimatePresence mode="popLayout">
        <motion.span
          key={value}
          initial={{ opacity: 0, y: 12, scale: 0.92 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: -12, scale: 0.92 }}
          transition={{ duration: 0.45, ease: "easeOut" }}
          className="
            block
            text-4xl sm:text-5xl md:text-6xl
            font-serif font-semibold
            text-white
            tracking-tight
          "
        >
          {String(value).padStart(2, "0")}
        </motion.span>
      </AnimatePresence>
    </div>
  );
}
export default function Countdown() {
  const [timeLeft, setTimeLeft] = useState(getTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(getTimeLeft());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section
      id="countdown"
      className="py-28 bg-sage text-white text-center overflow-x-hidden"
    >
      {/* Heading */}
      <motion.h2
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ amount: 0.3 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="text-3xl md:text-4xl font-serif text-primary mb-12 text-center"
      >
        Counting down to forever
      </motion.h2>

      {/* Countdown */}
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ amount: 0.3 }}
        className="flex justify-center gap-3 sm:gap-8 md:gap-10 px-4 max-w-full overflow-hidden"
      >
        {Object.entries(timeLeft).map(([label, value]) => (
          <motion.div
            key={label}
            variants={card}
            className="relative flex-1 basis-0 min-w-0 bg-white/10 backdrop-blur-xl border border-white/20 px-4 sm:px-8 py-6 sm:py-7 rounded-2xl"
          >
            {/* Animated number */}
            <div className="flex justify-center">
              <FlipDigit value={value} />
            </div>
            {/* Label */}
            <div className="uppercase text-[11px] tracking-[0.25em] mt-2 text-white/80">
              {label}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
