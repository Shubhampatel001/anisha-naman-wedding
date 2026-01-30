import { motion } from "framer-motion";

export default function Hero({ animate }) {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-ivory">
      {/* Background overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.9),transparent_70%)]" />

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={animate ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 1, ease: "easeOut" }}
        className="relative z-10 text-center px-6"
      >
        <p className="uppercase tracking-[0.3em] text-sm text-sage mb-6">
          We are getting married
        </p>

        <h1 className="text-5xl md:text-7xl font-serif text-primary mb-6">
          Anisha <span className="text-sage">&</span> Naman
        </h1>

        <p className="text-lg md:text-xl italic text-gray-600 max-w-xl mx-auto mb-10">
          Two hearts. One promise. A lifetime together.
        </p>

        <div className="w-20 h-px bg-sage mx-auto mb-10" />

        <p className="tracking-widest text-sm text-gray-500">20 • 04 • 2026</p>
      </motion.div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 -translate-x-1/2 text-gray-400 text-sm animate-bounce">
        Scroll
      </div>
    </section>
  );
}
