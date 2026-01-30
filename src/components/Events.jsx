import { events } from "../data/events";
import { motion } from "framer-motion";

export default function Events() {
  return (
    <section className="py-24 bg-ivory">
      <div className="max-w-5xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ amount: 0.3 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="text-3xl md:text-4xl font-serif text-primary mb-12 text-center"
        >
          {" "}
          Wedding Celebrations
        </motion.h2>

        <div className="space-y-12">
          {events.map((day, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-white rounded-2xl shadow-sm p-8"
            >
              <div className="text-center mb-6">
                <p className="uppercase tracking-widest text-sm text-sage">
                  {day.day}
                </p>
                <h3 className="text-2xl font-serif text-primary mt-2">
                  {day.title}
                </h3>
              </div>

              <ul className="space-y-3 text-center text-gray-600">
                {day.items.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
