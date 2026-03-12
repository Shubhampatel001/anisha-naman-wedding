import { motion } from "framer-motion";

const functions = [
  {
    label: "Mehendi",
    id: "mehendi",
    icon: "/icons/mehendiIcon.svg",
    color: "emerald",
  },
  { label: "Myra", id: "myra", icon: "/icons/myraIcon.svg", color: "rose" },
  {
    label: "Sangeet",
    id: "sangeet",
    icon: "/icons/sangeetIcon.svg",
    color: "fuchsia",
  },
  { label: "Haldi", id: "haldi", icon: "/icons/haldiIcon.svg", color: "amber" },
  {
    label: "Varmala",
    id: "varmala",
    icon: "/icons/varmalaIcon.svg",
    color: "pink",
  },
  {
    label: "Phera",
    id: "phera",
    icon: "/icons/pheraIcon.svg",
    color: "orange",
  },
];

const gradients = {
  emerald: "bg-gradient-to-br from-[#7FAF8E] to-[#5C8F71]", // Mehendi
  rose: "bg-gradient-to-br from-[#EFA7B4] to-[#D77B92]", // Myra
  fuchsia: "bg-gradient-to-br from-[#9C7BC6] to-[#7C5EA6]", // Sangeet
  amber: "bg-gradient-to-br from-[#F2C76E] to-[#E0A948]", // Haldi
  pink: "bg-gradient-to-br from-[#E58DA5] to-[#C96882]", // Varmala
  orange: "bg-gradient-to-br from-[#E49A6D] to-[#D06F47]", // Phera
};
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
    <section
      id="timeline"
      className="relative pt-24 pb-40 md:pb-24 bg-ivory overflow-hidden"
    >
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
            Wedding Festivities
          </motion.h2>

          <motion.p variants={fadeUp} className="text-gray-500 text-sm">
            Celebrating the love of Naman & Anisha
          </motion.p>
        </motion.div>

        {/* ================= MOBILE VERTICAL ================= */}
        <div className="md:hidden relative mt-10">
          {/* center line */}
          <div
            className="
              absolute left-1/2 top-0 bottom-0 -translate-x-1/2 w-px
              bg-gradient-to-b from-transparent via-[#C9D7E5]/50 to-transparent
            "
          />

          <ul className="space-y-10">
            {functions.map((fn, i) => {
              const isLeft = i % 2 === 0;

              return (
                <li
                  key={fn.id}
                  className="relative flex items-center cursor-pointer group active:scale-95"
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
                  {/* ICON CIRCLE */}
                  <motion.div
                    /* entry animation (runs once) */
                    initial={{ opacity: 0, scale: 0.85, y: 10 }}
                    /* all animations combined */
                    animate={{
                      opacity: 1,
                      scale: [1, 1.05, 1], // breathing
                      y: [0, -6, 0], // floating
                    }}
                    transition={{
                      opacity: { duration: 0.5 },
                      scale: {
                        duration: 2.8,
                        repeat: Infinity,
                        ease: "easeInOut",
                      },
                      y: {
                        duration: 3,
                        repeat: Infinity,
                        ease: "easeInOut",
                      },
                    }}
                    whileHover={{
                      scale: 1.12,
                      y: -5,
                    }}
                    whileTap={{
                      scale: 0.92,
                    }}
                    className={`
    relative
    w-16 h-16
    rounded-full
    flex items-center justify-center
    mx-auto
    shadow-[0_14px_28px_rgba(0,0,0,0.18)]
    border border-white/30
    ${gradients[fn.color]}
  `}
                  >
                    {/* soft breathing glow */}
                    <motion.span
                      className="absolute inset-0 rounded-full"
                      style={{
                        boxShadow: "0 0 0px rgba(255,255,255,0.6)",
                      }}
                      animate={{
                        boxShadow: [
                          "0 0 0px rgba(255,255,255,0.3)",
                          "0 0 18px rgba(255,255,255,0.8)",
                          "0 0 0px rgba(255,255,255,0.3)",
                        ],
                      }}
                      transition={{
                        duration: 2.5,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                    />

                    {/* icon centered and large */}
                    <motion.img
                      src={fn.icon}
                      alt={fn.label}
                      className="w-[48px] h-[48px] object-contain drop-shadow-lg"
                      animate={{
                        rotate: [0, 3, -3, 0],
                      }}
                      transition={{
                        duration: 5,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                    />
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
                bg-gradient-to-r from-transparent via-[#C9D7E5]/50 to-transparent
              "
            />

            <ul className="relative flex justify-between items-center">
              {functions.map((fn) => (
                <li key={fn.id} className="relative z-10">
                  <button
                    onClick={() => scrollToSection(fn.id)}
                    className="
                      group flex flex-col items-center gap-2
                      hover:scale-105 transition
                    "
                  >
                    <motion.div
                      /* entry animation (runs once) */
                      initial={{ opacity: 0, scale: 0.85, y: 10 }}
                      /* all animations combined */
                      animate={{
                        opacity: 1,
                        scale: [1, 1.05, 1], // breathing
                        y: [0, -6, 0], // floating
                      }}
                      transition={{
                        opacity: { duration: 0.5 },
                        scale: {
                          duration: 2.8,
                          repeat: Infinity,
                          ease: "easeInOut",
                        },
                        y: {
                          duration: 3,
                          repeat: Infinity,
                          ease: "easeInOut",
                        },
                      }}
                      whileHover={{
                        scale: 1.12,
                        y: -5,
                      }}
                      whileTap={{
                        scale: 0.92,
                      }}
                      className={`
    relative
    w-16 h-16
    rounded-full
    flex items-center justify-center
    mx-auto
    shadow-[0_14px_28px_rgba(0,0,0,0.18)]
    border border-white/30
    ${gradients[fn.color]}
  `}
                    >
                      {/* glow */}
                      <motion.span
                        className="absolute inset-0 rounded-full"
                        style={{
                          boxShadow: "0 0 0px rgba(255,255,255,0.6)",
                        }}
                        animate={{
                          boxShadow: [
                            "0 0 0px rgba(255,255,255,0.3)",
                            "0 0 18px rgba(255,255,255,0.8)",
                            "0 0 0px rgba(255,255,255,0.3)",
                          ],
                        }}
                        transition={{
                          duration: 2.5,
                          repeat: Infinity,
                          ease: "easeInOut",
                        }}
                      />

                      {/* icon */}
                      <motion.img
                        src={fn.icon}
                        alt={fn.label}
                        className="w-[48px] h-[48px] object-contain drop-shadow-lg"
                        animate={{
                          rotate: [0, 3, -3, 0],
                        }}
                        transition={{
                          duration: 5,
                          repeat: Infinity,
                          ease: "easeInOut",
                        }}
                      />
                    </motion.div>

                    {/* label */}
                    <span className="text-xs font-medium text-gray-700">
                      {fn.label}
                    </span>
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      {/* bottom blend */}
      <div className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none bg-gradient-to-b from-ivory via-[#F4F8F2]/70 to-[#F4F8F2]" />
    </section>
  );
}
