import { motion } from "framer-motion";

export default function VarmalaSection() {
  return (
    <section
      id="varmala"
      className="relative py-24 md:py-32 overflow-hidden bg-gradient-to-b from-[#FDF7F7] to-[#FFF8F3]"
    >
      {/* 🌸 soft romantic aura */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] md:w-[800px] md:h-[800px] bg-rose-200/25 rounded-full blur-[110px]" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-center">
          {/* 🌸 premium falling petals */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden">
            {[...Array(15)].map((_, i) => (
              <motion.div
                key={`petal-${i}`}
                initial={{ y: -60, opacity: 0 }}
                animate={{
                  y: [-40, 600],
                  x: [0, i % 2 ? 20 : -20],
                  rotate: [0, 140],
                  opacity: [0, 0.9, 0],
                }}
                transition={{
                  duration: 10 + i * 0.8, // ✅ slow elegant fall
                  repeat: Infinity,
                  ease: "linear",
                  delay: i * 1.1,
                }}
                className="absolute"
                style={{ left: `${10 + i * 18}%` }}
              >
                {/* petal shape */}
                <div
                  className="
          w-[10px] h-[14px]
          bg-rose-300/80
          rounded-[60%_40%_60%_40%]
          blur-[0.2px]
        "
                />
              </motion.div>
            ))}
          </div>
          {/* 🌺 subtle garland swing */}
          {/* <motion.img
            // src="/garland.png"
            animate={{ rotate: [-2, 2, -2] }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="
    hidden md:block
    absolute
    left-1/2 -translate-x-1/2
    top-10
    w-40
    opacity-70
    pointer-events-none
  "
          /> */}
          {/* Illustration (LEFT) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ amount: 0.35 }}
            transition={{ duration: 0.6 }}
            animate={{ y: [0, -4, 0] }} // very subtle
            className="flex justify-center order-1"
          >
            {/* <img
              loading="lazy"
              decoding="async"
              src="/varmalaF.webp"
              alt="Varmala ceremony illustration"
              className="
                w-[260px]
                sm:w-[300px]
                md:w-[340px]
                lg:w-[380px]
                xl:w-[420px]
                h-auto
                drop-shadow-[0_25px_60px_rgba(0,0,0,0.18)]
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
              <source src="/varmala.webm" type="video/webm" />
            </video>
          </motion.div>

          {/* Content (RIGHT) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ amount: 0.35 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="text-center 
            md:text-left 
            order-2"
          >
            {/* 📅 Day + Date */}
            <p className="uppercase tracking-[0.35em] text-[11px] text-rose-600/80 mb-2">
              Day 3 · 20 April 2026
            </p>

            {/* 💍 Eyebrow */}
            {/* <p className="uppercase tracking-[0.35em] text-xs text-rose-700 mb-3">
              The Sacred Union
            </p> */}

            {/* 🎯 Title */}
            <h2 className="text-[clamp(2.2rem,4vw,3.2rem)] font-serif text-rose-900 mb-3">
              Shub-Aarambh <br />
              (Varmala)
            </h2>

            {/* ⏰ Time pill */}
            <div className="mb-4">
              <span className="inline-block px-3 py-1 rounded-full bg-rose-100 text-rose-700 text-xs font-medium ring-1 ring-rose-200">
                7:00 PM
              </span>
            </div>

            {/* 📝 Description */}
            <p className="text-gray-600 max-w-md mx-auto md:mx-0">
              Two souls choosing each other forever
            </p>

            {/* 👗 Attire */}
            <div className="mt-6 inline-block px-4 py-2 rounded-full bg-rose-100 text-rose-800 text-sm">
              Traditional Attire
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
