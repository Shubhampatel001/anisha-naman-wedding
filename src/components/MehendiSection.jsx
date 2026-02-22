import { motion } from "framer-motion";
import { useParallax } from "../components/hooks/useParallax";
export default function MehendiSection() {
  const floralOffset = useParallax(0.25);
  return (
    <section
      id="mehendi"
      className="relative py-24 md:py-32 overflow-hidden bg-[#F4F8F2]"
    >
      {/* soft green aura */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] bg-green-200/25 rounded-full blur-[140px]" />
      </div>
      {/* 🌿 side florals */}
      <motion.img
        src="/floral-green-left.png"
        style={{ transform: `translateY(${floralOffset * 0.6}px)` }}
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        className="
    block
    absolute left-[-20px] md:left-0 top-24
    w-28 sm:w-32 md:w-40
    opacity-25 md:opacity-30
    pointer-events-none
  "
      />
      <motion.img
        src="/floral-green-right.png"
        animate={{ y: [0, -18, 0] }}
        transition={{ duration: 13, repeat: Infinity, ease: "easeInOut" }}
        className="
    block lg:block
    scale-75 md:scale-90
    lg:scale-100
    absolute right-0 top-40
    w-40 opacity-30
    pointer-events-none
  "
      />
      {/* ✨ floating paisley */}
      <motion.img
        src="/paisley-green.png"
        animate={{ y: [0, -12, 0], rotate: [0, 6, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="
    absolute
    left-[8%] top-[22%]
    w-10 opacity-25
    pointer-events-none
  "
      />
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
            animate={{ y: [0, -6, 0] }}
            className="flex justify-center"
          >
            <img
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
            />
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
              Day 1 · 18 April 2026
            </p>

            {/* 🌿 Eyebrow */}
            <p className="uppercase tracking-[0.35em] text-xs text-green-700 mb-3">
              Wedding Festivity
            </p>

            {/* 🎯 Title */}
            <h2 className="text-[clamp(2.2rem,4vw,3.2rem)] font-serif text-green-900 mb-4">
              Mehendi Ceremony
            </h2>

            {/* ⏰ Time pill */}
            <div className="mb-4">
              <span className="inline-block px-3 py-1 rounded-full bg-green-200/60 text-green-900 text-xs font-medium shadow-sm ring-1 ring-green-300/40">
                4:00 PM
              </span>
            </div>

            {/* 📝 Description */}
            <p className="text-gray-600 max-w-md mx-auto md:mx-0">
              An afternoon of henna, laughter, and joyful beginnings.
            </p>

            {/* 👗 Dress code */}
            <div className="mt-6 inline-block px-4 py-2 rounded-full bg-green-100 text-green-800 text-sm">
              Green Attire
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
