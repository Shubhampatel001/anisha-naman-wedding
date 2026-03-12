import { motion } from "framer-motion";
import { useParallax } from "../components/hooks/useParallax";

export default function SangeetSection() {
  const lightOffset = useParallax(0.18);
  return (
    <section
      id="sangeet"
      className="relative py-24 md:py-32 overflow-hidden text-white
  bg-gradient-to-b from-[#FFF6FB] via-[#5B1A6E] via-[#3B124C] to-[#FFF7E6]"
    >
      <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-[#FFF6FB] to-transparent pointer-events-none" />
      {/* ✨ parallax floating light */}
      <motion.span
        style={{ transform: `translateY(${lightOffset * 0.6}px,0)` }}
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
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] md:w-[800px] md:h-[800px] bg-fuchsia-500/15 rounded-full blur-[120px]" />
      </div>
      {/* 💃 equalizer */}
      <div className="absolute bottom-0 left-0 right-0 h-24 pointer-events-none flex items-end justify-center gap-1 opacity-40">
        {[...Array(30)].map((_, i) => (
          <motion.span
            key={i}
            animate={{ height: [8, 24 + (i % 4) * 6, 10] }}
            transition={{
              duration: 1.4 + (i % 3) * 0.2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="w-[5px] bg-gradient-to-t from-fuchsia-500 to-purple-300 rounded-full"
          />
        ))}
      </div>
      <motion.div
        animate={{ rotate: [-10, -6, -10] }}
        transition={{ duration: 12, repeat: Infinity }}
        className="absolute left-[20%] top-0 w-[2px] h-[400px] bg-gradient-to-b from-transparent via-fuchsia-300 to-transparent opacity-30"
      />
      {/* 🌟 subtle shimmer */}

      <motion.div
        animate={{ opacity: [0.4, 0.8, 0.4] }}
        transition={{ duration: 6, repeat: Infinity }}
        className="
  absolute
  left-1/2
  top-[35%]
  -translate-x-1/2
  w-[260px]
  h-[260px]
  bg-fuchsia-400/25
  blur-[120px]
  rounded-full
  pointer-events-none
"
      />
      {/* 🎇 moving stage lights */}

      <motion.div
        animate={{ rotate: [0, 6, -6, 0] }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
        className="
  absolute
  left-[10%]
  top-[10%]
  w-[420px]
  h-[420px]
  bg-fuchsia-500/20
  blur-[140px]
  rounded-full
  pointer-events-none
"
      />

      <motion.div
        animate={{ rotate: [0, -8, 8, 0] }}
        transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
        className="
  absolute
  right-[8%]
  bottom-[12%]
  w-[420px]
  h-[420px]
  bg-purple-500/20
  blur-[140px]
  rounded-full
  pointer-events-none
"
      />
      {/* ✨ floating bokeh lights */}

      <div className="absolute inset-0 pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <motion.span
            key={i}
            animate={{
              y: [0, -40, 0],
              scale: [1, 1.2, 1],
              opacity: [0.25, 0.8, 0.25],
            }}
            transition={{
              duration: 8 + i,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute rounded-full bg-fuchsia-300"
            style={{
              width: `${6 + i * 2}px`,
              height: `${6 + i * 2}px`,
              left: `${10 + i * 15}%`,
              top: `${20 + (i % 3) * 20}%`,
              filter: "blur(1px)",
            }}
          />
        ))}
      </div>
      {/* ✨ floating lights */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(9)].map((_, i) => (
          <motion.span
            key={i}
            animate={{ y: [0, -30, 0], opacity: [0.3, 0.8, 0.3] }}
            transition={{
              duration: 7 + i,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.6,
            }}
            className="absolute w-1 h-1 bg-fuchsia-300 rounded-full"
            style={{
              left: `${20 + i * 25}%`,
              top: `${30 + (i % 2) * 20}%`,
            }}
          />
        ))}
      </div>
      {/* ✨ particles */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(12)].map((_, i) => (
          <motion.span
            key={i}
            animate={{ y: [0, -25, 0], opacity: [0.2, 0.6, 0.2] }}
            transition={{
              duration: 7 + i,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.8,
            }}
            className="absolute w-1 h-1 bg-white/80 rounded-full"
            style={{
              left: `${18 + i * 18}%`,
              top: `${28 + (i % 2) * 18}%`,
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
            {/* <p className="uppercase tracking-[0.35em] text-xs text-fuchsia-300 mb-3">
              Festive Celebrations
            </p> */}

            {/* 🎯 Title */}
            <h2 className="text-[clamp(2.2rem,4vw,3.2rem)] font-serif mb-4">
              Nach Baliye Nights <br /> (Sangeet)
            </h2>

            {/* ⏰ Time pill */}
            <div className="mb-4">
              <span className="inline-block px-3 py-1 rounded-full bg-fuchsia-500/20 text-fuchsia-200 text-xs font-medium ring-1 ring-fuchsia-400/30">
                6:00 PM
              </span>
            </div>

            {/* 📝 Description */}
            <p className="text-white/70 max-w-md">Its the time to Disco</p>

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
            {/* <img
              loading="lazy"
              decoding="async"
              src="/sangeetF.webp"
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
            /> */}
            <video
              autoPlay
              loop
              muted
              playsInline
              preload="none"
              // poster="/myra-poster.webp"
              className="
                rounded-[80px]
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
              <source src="/sangeet.webm" type="video/webm" />
            </video>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
