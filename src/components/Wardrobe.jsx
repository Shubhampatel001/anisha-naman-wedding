import { motion } from "framer-motion";

const dressThemes = [
  {
    event: "Mehendi",
    theme: "Green",
  },
  {
    event: "Haldi",
    theme: "Yellow",
  },
  {
    event: "Sangeet",
    theme: "Indo-Western",
  },
  {
    event: "Wedding",
    theme: "Traditional",
  },
];

export default function Wardrobe() {
  return (
    <section className="py-24 bg-ivory">
      <div className="max-w-4xl mx-auto px-6 text-center">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ amount: 0.3 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-3xl md:text-4xl font-serif text-primary mb-6"
        >
          Wardrobe
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ amount: 0.3 }}
          transition={{ delay: 0.1 }}
          className="text-gray-500 mb-12"
        >
          A gentle color theme for each celebration
        </motion.p>

        {/* Theme Cards */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-12">
          {dressThemes.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ amount: 0.3 }}
              transition={{ delay: i * 0.06 }}
              className="rounded-2xl bg-white/70 backdrop-blur-sm p-5 shadow-sm ring-1 ring-sage/15"
            >
              <p className="text-sm text-gray-500 mb-1">{item.event}</p>
              <p className="font-serif text-primary text-lg">{item.theme}</p>
            </motion.div>
          ))}
        </div>

        {/* Grace note */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ amount: 0.3 }}
          transition={{ delay: 0.2 }}
          className="text-sm text-gray-500 max-w-xl mx-auto leading-relaxed"
        >
          While we would love for you to embrace the theme, please don’t worry
          if you can’t — your presence and blessings mean the world to us.
        </motion.p>
      </div>
    </section>
  );
}
