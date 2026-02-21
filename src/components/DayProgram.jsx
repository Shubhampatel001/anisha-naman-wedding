import { Flower2, Music, Flame, HeartHandshake } from "lucide-react";

import { events } from "../data/events";
import { motion } from "framer-motion";

const dressThemes = {
  mehendi: { label: "Green Attire", color: "#9CAF88" },
  haldi: { label: "Yellow Attire", color: "#E7C75F" },
  music: { label: "Indo-Western", color: "#8B5E3C" },
  garland: { label: "Traditional Attire", color: "#B76E79" },
  fire: { label: "Traditional Attire", color: "#B76E79" },
};

/* ---------- Animation presets (premium & subtle) ---------- */

const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

const lineGrow = {
  hidden: { scaleY: 0 },
  visible: {
    scaleY: 1,
    transition: {
      duration: 0.8,
      ease: "easeOut",
    },
  },
};
const iconMap = {
  mehendi: Flower2,
  haldi: Flower2,
  music: Music,
  garland: HeartHandshake,
  fire: Flame,
};

export default function DayProgram() {
  return (
    <section className="py-24 bg-ivory">
      <div className="max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 12, scale: 0.96 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ amount: 0.4 }}
          transition={{
            duration: 0.8,
            ease: "easeOut",
          }}
          className="flex justify-center mb-10 md:mb-14"
        >
          <img
            src="/wedding-illustration.png"
            alt="Wedding illustration"
            className="
      w-40
      sm:w-48
      md:w-56
      lg:w-64
      opacity-90
      select-none
      pointer-events-none
    "
          />
        </motion.div>

        {/* ---------- Section Heading ---------- */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ amount: 0.3 }}
          variants={container}
          className="text-center mb-16"
        >
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ amount: 0.3 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="text-3xl md:text-4xl font-serif text-primary mb-12 text-center"
          >
            Program of the Day
          </motion.h2>

          <motion.p variants={fadeUp} className="text-gray-500 text-sm">
            What we have planned for you
          </motion.p>
        </motion.div>

        {/* ---------- Day Cards ---------- */}
        <div className="space-y-16">
          {events.map((day, idx) => (
            <motion.div
              key={idx}
              initial="hidden"
              whileInView="visible"
              viewport={{ amount: 0.3 }}
              variants={fadeUp}
              className={`
  rounded-2xl p-8 transition
  ${
    day.isMain
      ? "bg-[#FFFDF8] shadow-lg ring-1 ring-sage/20"
      : "bg-white shadow-sm"
  }
`}
            >
              {/* Day Header */}
              <div className="text-center mb-10">
                <p className="uppercase tracking-widest text-xs text-sage">
                  {day.day} · {day.date}
                </p>

                <h3 className="text-2xl font-serif text-primary mt-2">
                  {day.title}
                </h3>
              </div>

              {/* Timeline */}
              {/* ===== MOBILE ELEGANT TIMELINE ===== */}
              <div className="md:hidden relative">
                {/* Center vertical line */}
                <div className="absolute top-0 bottom-0 left-6 w-px bg-sage/25" />

                <motion.ul
                  variants={container}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ amount: 0.3 }}
                  className="space-y-10"
                >
                  {day.schedule.map((item, i) => {
                    const Icon = iconMap[item.icon];

                    return (
                      <motion.li
                        key={i}
                        variants={fadeUp}
                        className="relative pl-16"
                      >
                        {/* Icon circle */}
                        <div className="absolute left-0 top-1 z-10 w-12 h-12 rounded-full bg-ivory border border-sage/40 flex items-center justify-center text-sage">
                          <Icon size={18} />
                        </div>

                        {/* Time */}
                        <span className="block text-xs tracking-wide text-sage mb-1">
                          {item.time}
                        </span>

                        {/* Title */}
                        <h4 className="font-medium text-gray-800">
                          {item.title}
                        </h4>
                        {/* Theme pill per function */}
                        {dressThemes[item.icon] && (
                          <span
                            className="inline-block mt-1 px-3 py-1 rounded-full text-[10px] font-medium"
                            style={{
                              backgroundColor: `${dressThemes[item.icon].color}18`,
                              color: dressThemes[item.icon].color,
                              border: `1px solid ${dressThemes[item.icon].color}40`,
                            }}
                          >
                            ✦ {dressThemes[item.icon].label}
                          </span>
                        )}
                        {/* Description */}
                        <p className="text-sm text-gray-500 mt-1 max-w-[260px]">
                          {item.desc}
                        </p>
                      </motion.li>
                    );
                  })}
                </motion.ul>
              </div>

              {/* ===== DESKTOP CENTERED EVENTS ===== */}
              <div className="hidden md:flex justify-center">
                {/* Vertical line */}
                <div className="absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-px bg-sage/15" />
                <motion.div
                  variants={container}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ amount: 0.3 }}
                  className="flex flex-wrap justify-center gap-20 max-w-4xl relative z-10"
                >
                  {day.schedule.map((item, i) => {
                    const Icon = iconMap[item.icon];
                    return (
                      <motion.div
                        key={i}
                        variants={fadeUp}
                        className="flex flex-col items-center text-center w-[220px]"
                      >
                        {/* Icon */}
                        <motion.div
                          initial={{ scale: 0.9, opacity: 0 }}
                          whileInView={{ scale: 1, opacity: 1 }}
                          viewport={{ once: true, margin: "-80px" }}
                          transition={{ duration: 0.4, ease: "easeOut" }}
                          className="w-14 h-14 rounded-full bg-ivory border border-sage/40 flex items-center justify-center text-sage"
                        >
                          <Icon size={20} />
                        </motion.div>
                        {/* Time */}
                        <span className="text-xs px-3 py-1 rounded-full bg-sage/15 text-sage mb-2">
                          {item.time}
                        </span>
                        {/* Title */}
                        <h4 className="font-medium text-gray-800">
                          {item.title}
                        </h4>
                        {dressThemes[item.icon] && (
                          <span
                            className="inline-block mt-2 px-3 py-1 rounded-full text-[10px] font-medium"
                            style={{
                              backgroundColor: `${dressThemes[item.icon].color}18`,
                              color: dressThemes[item.icon].color,
                              border: `1px solid ${dressThemes[item.icon].color}40`,
                            }}
                          >
                            ✦ {dressThemes[item.icon].label}
                          </span>
                        )}
                        {/* Description */}
                        <p className="text-sm text-gray-500 mt-1 leading-relaxed">
                          {item.desc}
                        </p>
                      </motion.div>
                    );
                  })}
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
