import { motion } from "framer-motion";
import {
  Sparkles,
  Gift,
  Music2,
  Flower2,
  HeartHandshake,
  Flame,
} from "lucide-react";

// ✅ quick navigation functions
const functions = [
  { label: "Mehendi", id: "mehendi", Icon: Sparkles },
  { label: "Myra", id: "myra", Icon: Gift },
  { label: "Sangeet", id: "sangeet", Icon: Music2 },
  { label: "Haldi", id: "haldi", Icon: Flower2 },
  { label: "Varmala", id: "varmala", Icon: HeartHandshake },
  { label: "Phera", id: "phera", Icon: Flame },
];

/* ---------- animations ---------- */

const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 18 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.55,
      ease: "easeOut",
    },
  },
};

export default function FunctionHeading() {
  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };
  return (
    <section id="timeline" className="relative py-24 bg-ivory overflow-hidden">
      {/* ✨ soft luxury aura */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[140px]" />
      </div>
      <div className="max-w-4xl mx-auto px-6">
        {/* ---------- Heading ---------- */}
        <motion.div
          initial={{ opacity: 0, y: 12, scale: 0.96 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ amount: 0.4 }}
          transition={{ duration: 0.8 }}
          className="flex justify-center mb-10 md:mb-14"
        >
          <img
            src="/wedding-illustration.png"
            alt="Wedding illustration"
            className="w-40 sm:w-48 md:w-56 lg:w-64 opacity-90 select-none pointer-events-none"
          />
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ amount: 0.3 }}
          variants={container}
          className="text-center mb-16"
        >
          <motion.h2
            variants={fadeUp}
            className="text-3xl md:text-4xl font-serif text-primary mb-4"
          >
            Program of the Day
          </motion.h2>

          <motion.p variants={fadeUp} className="text-gray-500 text-sm">
            What we have planned for you
          </motion.p>
        </motion.div>

        {/* ================= MOBILE VERTICAL ================= */}
        <div className="md:hidden relative mt-10">
          {/* center line */}
          <div
            className="
    absolute left-1/2 top-0 bottom-0 -translate-x-1/2 w-px
    bg-gradient-to-b from-transparent via-sage/40 to-transparent
  "
          />

          <ul className="space-y-10">
            {functions.map((fn, i) => {
              const Icon = fn.Icon;
              const isLeft = i % 2 === 0;

              return (
                <li
                  key={fn.id}
                  className="relative flex items-center cursor-pointer group"
                  onClick={() => scrollToSection(fn.id)}
                >
                  {/* LEFT label */}
                  {isLeft && (
                    <div className="w-1/2 pr-6 text-right">
                      <span className="text-sm font-medium text-gray-700 group-hover:text-primary transition">
                        {fn.label}
                      </span>
                    </div>
                  )}

                  {/* ICON */}
                  <motion.div
                    initial={{ scale: 0.92, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ amount: 0.4 }}
                    animate={{ y: [0, -2, 0] }}
                    transition={{
                      y: {
                        duration: 6,
                        repeat: Infinity,
                        ease: "easeInOut",
                      },
                      scale: { duration: 0.5 },
                      opacity: { duration: 0.5 },
                    }}
                    whileHover={{ scale: 1.12 }}
                    className="
    relative z-10
    w-11 h-11 rounded-full
    bg-white border border-sage/30
    flex items-center justify-center
    text-sage mx-auto
    shadow-sm
    group-hover:border-primary/40
    transition
  "
                  >
                    {/* ✨ glow ring */}
                    <span className="absolute inset-0 rounded-full bg-primary/10 blur-md opacity-0 group-hover:opacity-100 transition" />

                    <Icon size={16} className="relative z-10" />
                  </motion.div>

                  {/* RIGHT label */}
                  {!isLeft && (
                    <div className="w-1/2 pl-6 text-left">
                      <span className="text-sm font-medium text-gray-700 group-hover:text-primary transition">
                        {fn.label}
                      </span>
                    </div>
                  )}
                </li>
              );
            })}
          </ul>
        </div>

        {/* ================= DESKTOP HORIZONTAL ================= */}
        <div className="hidden md:block">
          <div className="relative max-w-5xl mx-auto">
            {/* center line */}
            <div
              className="
    absolute left-0 right-0 top-1/2 -translate-y-1/2 h-px
    bg-gradient-to-r from-transparent via-sage/40 to-transparent
  "
            />

            <ul className="relative flex justify-between items-center">
              {functions.map((fn) => {
                const Icon = fn.Icon;

                return (
                  <li key={fn.id} className="relative z-10">
                    <button
                      onClick={() => scrollToSection(fn.id)}
                      className="
                group flex flex-col items-center gap-2
                hover:scale-105 transition
              "
                    >
                      {/* icon circle */}
                      <motion.div
                        initial={{ scale: 0.92, opacity: 0 }}
                        whileInView={{ scale: 1, opacity: 1 }}
                        viewport={{ amount: 0.4 }}
                        animate={{ y: [0, -2, 0] }}
                        transition={{
                          y: {
                            duration: 6,
                            repeat: Infinity,
                            ease: "easeInOut",
                          },
                          scale: { duration: 0.5 },
                          opacity: { duration: 0.5 },
                        }}
                        whileHover={{ scale: 1.12 }}
                        className="
    relative z-10
    w-11 h-11 rounded-full
    bg-white border border-sage/30
    flex items-center justify-center
    text-sage mx-auto
    shadow-sm
    group-hover:border-primary/40
    transition
  "
                      >
                        {/* ✨ glow ring */}
                        <span className="absolute inset-0 rounded-full bg-primary/10 blur-md opacity-0 group-hover:opacity-100 transition" />

                        <Icon size={16} className="relative z-10" />
                      </motion.div>

                      {/* label */}
                      <span className="text-xs font-medium text-gray-700">
                        {fn.label}
                      </span>
                    </button>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
