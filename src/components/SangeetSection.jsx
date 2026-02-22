import { motion } from "framer-motion";
import { useParallax } from "../components/hooks/useParallax";
import BackToTimeLine from "./BackToTimeLine";

export default function SangeetSection() {
  const lightOffset = useParallax(0.18);
  return (
    <section
      id="sangeet"
      className="relative py-24 md:py-32 overflow-hidden bg-[#0F0F14] text-white"
    >
      {/* ✨ parallax floating light */}
      <motion.span
        style={{ transform: `translateY(${lightOffset * 0.6}px)` }}
        className="
    absolute
    right-[12%] top-[18%]
    w-2 h-2
    bg-fuchsia-300
    rounded-full
    blur-[0.5px]
    opacity-70
    pointer-events-none
  "
      />
      {/* neon glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] bg-fuchsia-500/15 rounded-full blur-[160px]" />
      </div>
      {/* 💃 equalizer */}
      <div className="absolute bottom-0 left-0 right-0 h-24 pointer-events-none flex items-end justify-center gap-1 opacity-40">
        {[...Array(24)].map((_, i) => (
          <motion.span
            key={i}
            animate={{ height: [8, 28 + (i % 6) * 6, 10] }}
            transition={{
              duration: 1.2 + (i % 5) * 0.2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="w-[3px] bg-fuchsia-400/70 rounded-full"
          />
        ))}
      </div>
      {/* ✨ floating lights */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <motion.span
            key={i}
            animate={{ y: [0, -40, 0], opacity: [0.2, 0.7, 0.2] }}
            transition={{
              duration: 6 + i,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.5,
            }}
            className="absolute w-1 h-1 bg-fuchsia-300 rounded-full"
            style={{
              left: `${15 + i * 12}%`,
              top: `${25 + (i % 3) * 18}%`,
            }}
          />
        ))}
      </div>
      {/* ✨ particles */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(8)].map((_, i) => (
          <motion.span
            key={i}
            animate={{ y: [0, -30, 0], opacity: [0.15, 0.6, 0.15] }}
            transition={{
              duration: 6 + i,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.6,
            }}
            className="absolute w-1 h-1 bg-white/80 rounded-full"
            style={{
              left: `${12 + i * 9}%`,
              top: `${22 + (i % 4) * 14}%`,
            }}
          />
        ))}
      </div>
      {/* ✅ SAME CONTAINER AS OTHER SECTIONS */}
      <div className="relative z-10 max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-center">
          {/* LEFT — content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ amount: 0.35 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="text-center md:text-left order-2 md:order-1"
          >
            {/* 📅 Day + Date */}
            <p className="uppercase tracking-[0.35em] text-[11px] text-fuchsia-300/80 mb-2">
              Day 2 · 19 April 2026
            </p>

            {/* 🎶 Eyebrow */}
            <p className="uppercase tracking-[0.35em] text-xs text-fuchsia-300 mb-3">
              Festive Celebrations
            </p>

            {/* 🎯 Title */}
            <h2 className="text-[clamp(2.2rem,4vw,3.2rem)] font-serif mb-4">
              Sangeet Night
            </h2>

            {/* ⏰ Time pill */}
            <div className="mb-4">
              <span className="inline-block px-3 py-1 rounded-full bg-fuchsia-500/20 text-fuchsia-200 text-xs font-medium ring-1 ring-fuchsia-400/30">
                6:00 PM
              </span>
            </div>

            {/* 📝 Description */}
            <p className="text-white/70 max-w-md">
              An evening of music, dance, and unforgettable celebration.
            </p>

            {/* 👗 Attire */}
            <div className="mt-6 inline-block px-4 py-2 rounded-full bg-white/10 border border-white/20 text-sm">
              Indo-Western
            </div>
          </motion.div>

          {/* RIGHT — illustration */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ amount: 0.4 }}
            transition={{ duration: 0.6 }}
            animate={{ y: [0, -5, 0] }}
            className="flex justify-center order-1 md:order-2"
          >
            <img
              src="/sangeet-illustration.png"
              alt="Sangeet night illustration"
              className="
              w-[240px]
              sm:w-[270px]
              md:w-[300px]
              lg:w-[320px]
                xl:w-[340px]
                h-auto
                drop-shadow-[0_25px_60px_rgba(0,0,0,0.25)]
                select-none
                pointer-events-none
                "
            />
          </motion.div>
        </div>
      </div>
      <BackToTimeLine />
    </section>
  );
}
