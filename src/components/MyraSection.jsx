import { motion } from "framer-motion";

export default function MyraSection() {
  return (
    <section className="relative py-24 md:py-32 bg-[#FFF6FB] overflow-hidden">
      {/* soft pink aura */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] bg-pink-200/25 rounded-full blur-[140px]" />
      </div>
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
            <img
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
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ amount: 0.35 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="text-center md:text-left order-2 md:order-1"
          >
            <h2 className="text-[clamp(2.2rem,4vw,3.2rem)] font-serif text-rose-900 mb-4">
              Myra Ceremony
            </h2>
            <p className="text-gray-600 max-w-md md:max-w-lg mx-auto md:mx-0">
              A beautiful family tradition filled with love, blessings, and
              heartfelt moments.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
