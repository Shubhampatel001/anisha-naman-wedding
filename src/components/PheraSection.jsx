import { motion } from "framer-motion";

export default function PheraSection() {
  return (
    <section
      id="phera"
      className="relative py-24 md:py-32 overflow-hidden bg-[#FFF8F3]"
    >
      {/* warm sacred aura */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] md:w-[800px] md:h-[800px] bg-orange-200/25 rounded-full blur-[110px]" />
      </div>
      <motion.div
        animate={{ y: [0, -40], opacity: [0.2, 0] }}
        transition={{ duration: 6, repeat: Infinity }}
        className="absolute left-1/2 bottom-32 w-24 h-16 bg-orange-200/20 blur-2xl rounded-full"
      />
      {/* 🔥 fire glow flicker */}
      <motion.div
        animate={{ opacity: [0.4, 0.7, 0.4], scale: [1, 1.05, 1] }}
        transition={{ duration: 2.2, repeat: Infinity }}
        className="
    absolute bottom-16 left-1/2 -translate-x-1/2
    w-64 h-40 bg-orange-300/30 rounded-full blur-3xl
    pointer-events-none
  "
      />
      {/* ✨ embers */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <motion.span
            key={i}
            animate={{ y: [0, -60], opacity: [0.6, 0] }}
            transition={{
              duration: 3 + i,
              repeat: Infinity,
              ease: "linear",
              delay: i * 0.6,
            }}
            className="absolute w-1 h-1 bg-orange-400 rounded-full"
            style={{ left: `${46 + i * 4}%`, bottom: "80px" }}
          />
        ))}
      </div>
      {/* 🔥 warm havan particles */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {[...Array(10)].map((_, i) => (
          <motion.span
            key={i}
            animate={{
              y: [0, -100],
              opacity: [0, 0.8, 0],
            }}
            transition={{
              duration: 3 + i * 0.4,
              repeat: Infinity,
              ease: "easeOut",
              delay: i * 0.3,
            }}
            className="absolute w-1 h-1 bg-orange-300 rounded-full"
            style={{
              left: `${40 + (i - 2) * 6}%`,
              bottom: "20%",
            }}
          />
        ))}
      </div>
      {/* 🔥 sacred fire glow */}
      <motion.div
        animate={{
          opacity: [0.35, 0.6, 0.4],
          scale: [1, 1.08, 1],
        }}
        transition={{
          duration: 1.6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute bottom-16 left-1/2 -translate-x-1/2 w-40 h-24 bg-orange-400/30 rounded-full blur-2xl"
      />
      <div className="relative z-10 max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-center">
          {/* Illustration (RIGHT on desktop) */}
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
              src="/pheraF.webp"
              alt="Phera ceremony illustration"
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
              <source src="/phera.webm" type="video/webm" />
              Your browser does not support the video tag.
            </video>
          </motion.div>

          {/* 📝 Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ amount: 0.35 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="text-center md:text-left order-2 md:order-1"
          >
            {/* 📅 Day + Date */}
            <p className="uppercase tracking-[0.35em] text-[11px] text-orange-700/80 mb-2">
              Day 3 · 20 April 2026
            </p>

            {/* 🔥 Eyebrow */}
            <p className="uppercase tracking-[0.35em] text-xs text-orange-700 mb-3">
              The Sacred Union
            </p>

            {/* 🎯 Title */}
            <h2 className="text-[clamp(2.2rem,4vw,3.2rem)] font-serif text-rose-900 mb-4">
              Saath vachan,
              <br />
              Saath janam <br /> (Phera)
            </h2>

            {/* ⏰ Time pill */}
            <div className="mb-4">
              <span className="inline-block px-3 py-1 rounded-full bg-orange-200/60 text-orange-900 text-xs font-medium shadow-sm ring-1 ring-orange-300/40">
                11:30 PM
              </span>
            </div>

            {/* 📝 Description */}
            <p className="text-gray-600 max-w-md md:max-w-lg mx-auto md:mx-0">
              Sacred vows around the eternal fire
            </p>

            {/* 👗 Attire pill (recommended for visual rhythm) */}
            <div className="mt-6 inline-block px-4 py-2 rounded-full bg-orange-100 text-orange-800 text-sm">
              Traditional Attire
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
