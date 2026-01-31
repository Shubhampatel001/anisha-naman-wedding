import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-ivory">
      {/* ===== Background Video Wrapper ===== */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 scale-[1.15] md:scale-100 transform-gpu">
          <video
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            className="absolute inset-0 w-full h-full object-cover"
          >
            <source src="/Hero-bg-hug.webm" type="video/webm" />
            <source src="/Hero-bg-hug.mp4" type="video/mp4" />
          </video>
        </div>

        {/* Dark overlay for text contrast */}
        <div className="absolute inset-0 bg-black/30" />
      </div>

      {/* ===== Content ===== */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="relative z-10 text-center px-6 text-white"
      >
        <p className="uppercase tracking-[0.3em] text-sm mb-6 text-white/80">
          We are getting married
        </p>

        <h1 className="text-5xl md:text-7xl font-serif mb-6">
          Anisha <span className="text-sage">&</span> Naman
        </h1>

        <p className="text-lg md:text-xl italic max-w-xl mx-auto mb-10 text-white/90">
          Two hearts. One promise. A lifetime together.
        </p>

        <div className="w-20 h-px bg-white/60 mx-auto mb-10" />

        <p className="tracking-widest text-sm text-white/70">20 • 04 • 2026</p>
      </motion.div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/70 text-xs animate-bounce">
        Scroll
      </div>
    </section>
  );
}
