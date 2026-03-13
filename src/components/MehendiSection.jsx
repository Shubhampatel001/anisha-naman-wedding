import { motion } from "framer-motion";
import { useParallax } from "../components/hooks/useParallax";
export default function MehendiSection() {
  const floralOffset = useParallax(0.25);
  return (
    <section
      id="mehendi"
      className="relative py-20 md:py-32 overflow-hidden bg-gradient-to-b from-[#F4F8F2] to-[#FFF6FB]"
    >
      {/* PREMIUM BACKGROUND SYSTEM */}
      <motion.img
        src="/paisley-green.png"
        animate={{ y: [0, -12, 0], rotate: [0, 6, 0] }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
        className="absolute left-[8%] top-[22%] w-10 opacity-25 pointer-events-none"
      />
      {/* /* 🌿 soft central aura */}
      <div className="absolute inset-0 pointer-events-none flex items-center justify-center">
        <div
          className="
    w-[280px] h-[280px]
    md:w-[700px] md:h-[700px]
    bg-green-200/30
    blur-[120px]
    rounded-full
  "
        />
      </div>

      {/* 🌿 subtle gradient wash */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="
    absolute left-0 top-0 h-full w-40
    bg-gradient-to-r from-green-100/40 to-transparent
  "
        />
        <div
          className="
    absolute right-0 top-0 h-full w-40
    bg-gradient-to-l from-green-100/40 to-transparent
  "
        />
      </div>
      {/* 🌿 left floating floral */}
      <motion.img
        src="/floral-green-left.png"
        style={{ transform: `translate3d(0, ${floralOffset * 0.5}px,0)` }}
        animate={{ y: [0, -18, 0], rotate: [0, 2, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        className="
    absolute
    left-[-30px] md:left-0
    top-[25%]
    w-28 sm:w-32 md:w-40
    opacity-30
    pointer-events-none
  "
      />
      {/* 🌿 right floating floral */}
      <motion.img
        src="/floral-green-right.png"
        animate={{ y: [0, -16, 0], rotate: [0, -2, 0] }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
        className="
    absolute
    right-[-25px] md:right-0
    bottom-[20%]
    w-28 sm:w-32 md:w-40
    opacity-30
    pointer-events-none
  "
      />
      {/* ✨ soft floating particles */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            animate={{
              y: [-20, 40],
              opacity: [0.2, 0.6, 0.2],
            }}
            transition={{
              duration: 6 + i,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute w-[3px] h-[3px] rounded-full bg-green-500/40 blur-[0.5px]"
            style={{
              left: `${20 + i * 18}%`,
              top: `${30 + i * 10}%`,
            }}
          />
        ))}
      </div>
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          animate={{ y: [0, -20, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-10 left-10 w-24 h-24 bg-green-200/20 rounded-full blur-2xl"
        />
      </div>
      <div className="relative z-10 max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-center">
          {/* LEFT visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ amount: 0.4 }}
            transition={{ duration: 0.6 }}
            whileHover={{ y: -4 }}
            className="flex justify-center"
          >
            {/* <img
              src="/mehendi-illustration.png"
              alt="Mehendi ceremony illustration"
              className="
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
            /> */}

            <video
              autoPlay
              loop
              muted
              playsInline
              preload="none"
              className="
              rounded-[80px] 
                transition-all duration-500
                w-[270px] 
                sm:w-[300px] 
                md:w-[320px] 
                lg:w-[360px]
                xl:w-[400px]
                h-auto
                drop-shadow-[0_25px_60px_rgba(0,0,0,0.15)]
                select-none
                pointer-events-none
              "
            >
              <source src="/mehendi.webm" type="video/webm" />
              Your browser does not support the video tag.
            </video>
          </motion.div>

          {/* 📝 RIGHT content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ amount: 0.35 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="text-center md:text-left"
          >
            {/* 📅 Day + Date */}
            <p className="uppercase tracking-[0.35em] text-[11px] text-green-700/80 mb-2">
              Day 1 · 18 April 2026 · 5:30 PM
            </p>

            {/* 🌿 Eyebrow */}
            {/* <p className="uppercase tracking-[0.35em] text-xs text-green-700 mb-3">
              Wedding Festivity
            </p> */}

            {/* 🎯 Title */}
            <h2 className="text-[clamp(1.9rem,6vw,3rem)] font-serif text-green-900 mb-4">
              Mehfil-e-Mehendi <br /> (Mehendi)
            </h2>

            {/* 📝 Description */}
            <p className="text-gray-600 max-w-md mx-auto md:mx-0">
              Intricate henna whisphering stories of love
            </p>

            {/* Time + Dress code */}
            <div className="flex flex-wrap items-center justify-center md:justify-start gap-3 mt-4">
              {/* Time */}
              {/* <span
                className="
                  px-3 py-1
                  rounded-full
                  bg-green-200/60
                  text-green-900
                  text-xs font-medium
                  shadow-sm
                  ring-1 ring-green-300/40
                "
              >
                5:30 PM
              </span> */}

              {/* Dress code */}
              <span
                className="
                  px-4 py-2
                  rounded-full
                  bg-green-100
                  text-green-800
                  text-sm font-medium
                  shadow-sm
                  ring-1 ring-green-200/50
                "
              >
                Attire: Shades of Emerald
              </span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
