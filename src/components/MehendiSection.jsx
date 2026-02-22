import { motion } from "framer-motion";

export default function MehendiSection() {
  return (
    <section className="relative py-24 md:py-32 overflow-hidden bg-[#F4F8F2]">
      {/* soft green aura */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] bg-green-200/25 rounded-full blur-[140px]" />
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

          {/* RIGHT content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ amount: 0.35 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="text-center md:text-left"
          >
            <p className="uppercase tracking-[0.35em] text-xs text-green-700 mb-3">
              Wedding Festivity
            </p>

            <h2 className="text-[clamp(2.2rem,4vw,3.2rem)] font-serif text-green-900 mb-4">
              Mehendi Ceremony
            </h2>

            <p className="text-gray-600 max-w-md">
              With henna in our hands and love in our hearts, join us for a
              vibrant Mehendi celebration.
            </p>

            <div className="mt-6 inline-block px-4 py-2 rounded-full bg-green-100 text-green-800 text-sm">
              Green Attire
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
