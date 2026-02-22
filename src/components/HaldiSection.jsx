import { motion } from "framer-motion";

export default function HaldiSection() {
  return (
    <section className="relative py-24 md:py-32 overflow-hidden bg-[#FFF7E6]">
      {/* soft radial glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] bg-yellow-200/25 rounded-full blur-[140px]" />
      </div>
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {[...Array(7)].map((_, i) => (
          <motion.div
            key={i}
            animate={{ y: [-50, 600], rotate: [0, 180] }}
            transition={{
              duration: 6 + i,
              repeat: Infinity,
              ease: "linear",
              delay: i * 0.8,
            }}
            className="absolute w-1.5 h-1.5 bg-yellow-500/40 rounded-full blur-[0.5px]"
            style={{ left: `${10 + i * 8}%` }}
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
            <img
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
            />
          </motion.div>

          {/* 📝 RIGHT — Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ amount: 0.35 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="text-center md:text-left"
          >
            <p className="uppercase tracking-[0.35em] text-xs text-yellow-700 mb-3">
              Wedding Festivity
            </p>

            <h2 className="text-[clamp(2.2rem,4vw,3.2rem)] font-serif text-yellow-900 mb-4">
              Haldi Ceremony
            </h2>

            <p className="text-gray-600 leading-relaxed max-w-md mx-auto md:mx-0">
              Rang haldi ka, jazbaat dil ke — join us as we begin the wedding
              celebrations with love, laughter, and turmeric hues.
            </p>

            <div className="mt-6 inline-block px-4 py-2 rounded-full bg-yellow-100 text-yellow-800 text-sm">
              Yellow Attire
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
