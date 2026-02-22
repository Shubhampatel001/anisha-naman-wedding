import { motion } from "framer-motion";

export default function VarmalaSection() {
  return (
    <section className="relative py-24 md:py-32 bg-[#FDF7F7] overflow-hidden">
      {/* 🌸 soft romantic aura */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] bg-rose-200/25 rounded-full blur-[140px]" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-center">
          {/* 🌼 gentle falling petals */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden">
            {[...Array(10)].map((_, i) => (
              <motion.div
                key={`fall-${i}`}
                animate={{
                  y: [-40, 700],
                  x: [0, i % 2 ? 20 : -20, 0],
                  rotate: [0, 180],
                }}
                transition={{
                  duration: 1 + i * 1.5,
                  repeat: Infinity,
                  ease: "linear",
                  delay: i * 1.1,
                }}
                className="absolute w-2 h-3 bg-rose-300/70 rounded-full blur-[0.3px]"
                style={{ left: `${8 + i * 9}%` }}
              />
            ))}
          </div>
          {/* Illustration (LEFT) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ amount: 0.35 }}
            transition={{ duration: 0.6 }}
            animate={{ y: [0, -4, 0] }} // very subtle
            className="flex justify-center order-1"
          >
            <img
              src="/varmala-illustration.png"
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
            />
          </motion.div>

          {/* Content (RIGHT) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ amount: 0.35 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="text-center md:text-left order-2"
          >
            <p className="uppercase tracking-[0.35em] text-xs text-rose-700 mb-3">
              Wedding Moment
            </p>

            <h2 className="text-[clamp(2.2rem,4vw,3.2rem)] font-serif text-rose-900 mb-4">
              Varmala
            </h2>

            <p className="text-gray-600 max-w-md mx-auto md:mx-0">
              The moment we choose each other — surrounded by love, laughter,
              and petals.
            </p>

            <div className="mt-6 inline-block px-4 py-2 rounded-full bg-rose-100 text-rose-800 text-sm">
              Traditional Attire
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
