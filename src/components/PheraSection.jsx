import { motion } from "framer-motion";

export default function PheraSection() {
  return (
    <section className="relative py-24 md:py-32 overflow-hidden bg-[#FFF8F3]">
      {/* warm sacred aura */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] bg-orange-200/25 rounded-full blur-[140px]" />
      </div>
      {/* 🔥 warm havan particles */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {[...Array(12)].map((_, i) => (
          <motion.span
            key={i}
            animate={{
              y: [0, -120],
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
              left: `${40 + (i - 6) * 3}%`,
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
            <img
              src="/phera-illustration.png"
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
            />
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ amount: 0.35 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="text-center md:text-left order-2 md:order-1"
          >
            <h2 className="text-[clamp(2.2rem,4vw,3.2rem)] font-serif text-rose-900 mb-4">
              Phera Ceremony
            </h2>

            <p className="text-gray-600 max-w-md md:max-w-lg mx-auto md:mx-0">
              Seven sacred steps, one eternal promise — witness the moment our
              forever begins.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
