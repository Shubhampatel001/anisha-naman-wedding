import { motion } from "framer-motion";
import { useParallax } from "../components/hooks/useParallax";

export default function HaldiSection() {
  const offset = useParallax(0.15);
  return (
    <section
      id="haldi"
      className="relative py-24 md:py-32 overflow-hidden bg-[#FFF7E6]"
    >
      {/* soft radial glow */}
      {/* ✨ glowing haldi particles */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {[...Array(16)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-yellow-400/60"
            style={{
              width: `${2 + Math.random() * 3}px`,
              height: `${2 + Math.random() * 3}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -40, 0],
              opacity: [0.2, 0.8, 0.2],
            }}
            transition={{
              duration: 3 + i,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          animate={{ y: [0, -20, 0], opacity: [0.2, 0.6, 0.2] }}
          transition={{ duration: 4 + i, repeat: Infinity }}
          className="absolute w-3 h-3 bg-yellow-400/30 rounded-full blur-md"
          style={{
            left: `${15 + i * 14}%`,
            top: `${20 + i * 8}%`,
          }}
        />
      ))}
      {/* 🌞 warm edge gradients */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute left-0 top-0 h-full w-32 bg-gradient-to-r from-yellow-100/40 to-transparent" />
        <div className="absolute right-0 top-0 h-full w-32 bg-gradient-to-l from-yellow-100/40 to-transparent" />
      </div>
      <motion.img
        loading="lazy"
        decoding="async"
        src="/marigold-left.png"
        style={{ transform: `translateY(${offset * 0.6}px,0)` }}
        // animate={{ y: [0, -18, 0] }}
        transition={{ duration: 11, repeat: Infinity, ease: "easeInOut" }}
        className="
    block
    absolute left-[-20px] md:left-0 top-24
    w-28 sm:w-32 md:w-40 lg:w-44
    opacity-20 md:opacity-30 lg:opacity-35
    scale-75 md:scale-90 lg:scale-100
    pointer-events-none
  "
      />
      <motion.img
        src="/marigold-right.png"
        // animate={{ y: [0, -22, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        className="
    hidden lg:block
    absolute right-0 top-36
    w-44 opacity-35
    pointer-events-none
  "
      />
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            animate={{
              y: [-40, 600],
              x: [0, i % 2 ? 12 : -12],
              rotate: [0, 120],
              opacity: [0, 0.6, 0],
            }}
            transition={{
              duration: 5 + i * 0.6,
              repeat: Infinity,
              ease: "linear",
              delay: i * 0.5,
            }}
            className={`
      absolute rounded-full
      ${i % 3 === 0 ? "w-2 h-2 blur-[0.6px]" : ""}
      ${i % 3 === 1 ? "w-1.5 h-1.5 blur-[0.4px]" : ""}
      ${i % 3 === 2 ? "w-1 h-1 blur-[0.2px]" : ""}
      bg-yellow-500/50
    `}
            style={{ left: `${8 + i * 9}%` }}
          />
        ))}
      </div>
      <div className="relative z-10 max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-center">
          {/* 🎬 LEFT — Illustration / Video */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ amount: 0.4 }}
            transition={{ duration: 0.55 }}
            animate={{ y: [0, -6, 0] }}
            className="flex justify-center"
          >
            {/* <img
              src="/haldi-illustration.png"
              alt="Haldi ceremony illustration"
              className="
                  w-[220px]
                  sm:w-[260px]
                  md:w-[300px]
                  lg:w-[320px]
                  xl:w-[340px]
                  h-auto
                  drop-shadow-[0_25px_60px_rgba(0,0,0,0.15)]
                  select-none
                  pointer-events-none
                "
            /> */}

            <video
              autoPlay
              loop
              muted
              playsInline
              preload="none"
              className="rounded-[80px] 
                transition-all duration-500
                w-[240px]
                sm:w-[280px]
                md:w-[320px]
                lg:w-[360px]
                xl:w-[400px]
                h-auto
                drop-shadow-[0_25px_60px_rgba(0,0,0,0.15)]
                select-none
                pointer-events-none
              "
            >
              <source src="/haldi.webm" type="video/webm" />
              Your browser does not support the video tag.
            </video>
          </motion.div>
          {/* 🌼 Floating marigold petals */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden">
            {[...Array(9)].map((_, i) => (
              <motion.img
                key={i}
                src="/marigold-left.png"
                className="absolute w-3 md:w-4 opacity-60"
                style={{
                  left: `${10 + i * 12}%`,
                  top: "-40px",
                }}
                animate={{
                  y: [0, 700],
                  x: [0, i % 2 ? 20 : -20],
                  rotate: [0, 180],
                  opacity: [0, 0.7, 0],
                }}
                transition={{
                  duration: 7 + i * 0.8,
                  repeat: Infinity,
                  ease: "linear",
                  delay: i * 0.8,
                }}
              />
            ))}
          </div>
          {/* 📝 RIGHT — Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ amount: 0.35 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="text-center md:text-left"
          >
            {/* 📅 Day + Date */}
            <p className="uppercase tracking-[0.35em] text-[11px] text-yellow-700/80 mb-2">
              Day 3 · 20 April 2026
            </p>

            {/* 🪔 Section eyebrow */}
            <p className="uppercase tracking-[0.35em] text-xs text-yellow-700 mb-3">
              Wedding Festivity
            </p>

            {/* 🎯 Main title */}
            <h2 className="text-[clamp(2.2rem,4vw,3.2rem)] font-serif text-yellow-900 mb-4">
              Rangpreet <br /> (Haldi)
            </h2>

            {/* ⏰ Time pill */}
            <div className="mb-4">
              <span className="inline-block px-3 py-1 rounded-full bg-yellow-200/60 text-yellow-900 text-xs font-medium">
                10:30 AM
              </span>
            </div>

            {/* 📝 Description */}
            <p className="text-gray-600 leading-relaxed max-w-md mx-auto md:mx-0">
              Rang haldi ke, jazbaat dil ke
            </p>

            {/* 👗 Dress code */}
            <div className="mt-6 inline-block px-4 py-2 rounded-full bg-yellow-100 text-yellow-800 text-sm">
              Yellow Attire
            </div>
          </motion.div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-40 pointer-events-none bg-gradient-to-b from-transparent to-[#FDF7F7]" />
    </section>
  );
}
