import { motion } from "framer-motion";

export default function MyraSection() {
  return (
    <section
      id="myra"
      className="relative py-24 md:py-32 bg-[#FFF6FB] overflow-hidden"
    >
      {/* soft pink aura */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] md:w-[800px] md:h-[800px] bg-pink-200/25 rounded-full blur-[110px]" />
      </div>
      {[...Array(10)].map((_, i) => (
        <motion.span
          key={i}
          animate={{ y: [0, -25, 0], rotate: [0, 180] }}
          transition={{ duration: 6 + i, repeat: Infinity }}
          className="absolute w-[4px] h-[4px] bg-pink-300 rounded-full"
          style={{
            left: `${15 + i * 18}%`,
            top: `${25 + (i % 2) * 25}%`,
          }}
        />
      ))}
      {/* ✨ premium sparkle */}
      <motion.span
        animate={{
          opacity: [0.25, 1, 0.25],
          scale: [0.7, 1.25, 0.7],
          rotate: [0, 90, 180],
        }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        className="
    absolute right-[18%] top-[30%]
    w-2.5 h-2.5 bg-pink-300 rounded-full
    blur-[0.3px]
  "
      />
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ amount: 0.4 }}
            transition={{ duration: 0.6 }}
            animate={{ y: [0, -5, 0] }}
            className="flex justify-center order-1 md:order-2"
          >
            {/* <img
              src="/myra-illustration.png"
              alt="Myra ceremony illustration"
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
              <source src="/myra.webm" type="video/webm" />
            </video>
          </motion.div>

          {/* 📝 RIGHT content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ amount: 0.35 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="text-center md:text-left order-2 md:order-1"
          >
            {/* 📅 Day + Date */}
            <p className="uppercase tracking-[0.35em] text-[11px] text-pink-700/80 mb-2">
              Day 2 · 19 April 2026
            </p>

            {/* 🎁 Eyebrow */}
            <p className="uppercase tracking-[0.35em] text-xs text-pink-700 mb-3">
              Festive Celebration
            </p>

            {/* 🎯 Title */}
            <h2 className="text-[clamp(2.2rem,4vw,3.2rem)] font-serif text-rose-900 mb-4">
              Rishto ka Rangmanch <br /> (Myra)
            </h2>

            {/* ⏰ Time pill */}
            <div className="mb-4">
              <span className="inline-block px-3 py-1 rounded-full bg-pink-200/60 text-pink-900 text-xs font-medium shadow-sm ring-1 ring-pink-300/40">
                10:00 AM
              </span>
            </div>

            {/* 📝 Description */}
            <p className="text-gray-600 max-w-md md:max-w-lg mx-auto md:mx-0">
              Maternal blessings wrapped in warmth and traditions
            </p>

            {/* 👗 Optional attire pill (recommended for consistency) */}
            <div className="mt-6 inline-block px-4 py-2 rounded-full bg-pink-100 text-pink-800 text-sm">
              Traditional Attire
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
