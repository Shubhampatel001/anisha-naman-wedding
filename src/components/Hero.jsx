import { motion } from "framer-motion";

export default function Hero({ data }) {
  return (
    <section className="relative min-h-[100svh] flex items-center justify-center overflow-hidden bg-ivory">
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
            <source src="/Hero-bg-video.webm" type="video/webm" />
            <source src="/Hero-bg-video.mp4" type="video/mp4" />
          </video>
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/25 to-black/40" />
      </div>
      {/* ===== Content ===== */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="
          relative z-10 text-center px-6
          bg-black/25 backdrop-blur-sm
          rounded-2xl
          py-8 md:py-12
          max-w-2xl mx-auto
          text-white
        "
      >
        <p className="uppercase tracking-[0.3em] text-sm mb-6 text-white/80">
          We are getting married
        </p>

        <h1 className="text-4xl md:text-7xl font-serif mb-6">
          {data?.primary} <span className="text-sage/70">&</span>{" "}
          {data?.secondary}
        </h1>

        <div className="max-w-xl mx-auto mb-10 text-center">
          <p className="mt-4 text-2xl md:text-3xl font-serif tracking-[0.06em] text-white/95">
            एकत्वं अनन्तत्वम्
          </p>

          <p className="mt-3 text-sm md:text-base italic text-white/90">
            Two hearts. One promise. A lifetime together.
          </p>
        </div>

        <div className="w-20 h-px bg-white/60 mx-auto mb-10" />

        <p className="tracking-widest text-sm text-white/70">20 • 04 • 2026</p>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.button
        onClick={() =>
          document.getElementById("countdown")?.scrollIntoView({
            behavior: "smooth",
          })
        }
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.4, duration: 0.9 }}
        className="
          absolute bottom-12 md:bottom-14
          inset-x-0
          mx-auto
          w-max
          z-20
          flex flex-col items-center gap-2
          text-white/85 cursor-pointer group
        "
      >
        {/* Text */}
        {/* <span className="text-[10px] tracking-[0.38em] uppercase text-white/75">
          Scroll
        </span> */}
        {/* Arrow circle */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="
            w-10 h-10
            rounded-full
            border border-white/30
            bg-white/10
            backdrop-blur-md
            flex items-center justify-center
            shadow-[0_8px_30px_rgba(0,0,0,0.25)]
            group-hover:bg-white/15
            transition
          "
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
            <path
              d="M6 9l6 6 6-6"
              stroke="currentColor"
              strokeWidth="1.7"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </motion.div>
      </motion.button>
    </section>
  );
}
