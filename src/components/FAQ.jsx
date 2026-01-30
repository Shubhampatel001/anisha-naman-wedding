import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { faqs } from "../data/faqs";
import { ChevronDown } from "lucide-react";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section className="py-24 bg-ivory">
      <div className="max-w-md mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-12">
          <div className="w-10 h-10 mx-auto mb-4 rounded-full bg-sage/20 flex items-center justify-center">
            <span className="text-sage font-medium">?</span>
          </div>
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ amount: 0.3 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="text-3xl md:text-4xl font-serif text-primary mb-12 text-center"
          >
            Frequently Asked Questions
          </motion.h2>
        </div>

        {/* Accordion */}
        <div className="space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;

            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ amount: 0.3 }}
                transition={{ duration: 1, ease: "easeOut" }}
                className="bg-white rounded-xl shadow-sm"
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : idx)}
                  className="w-full flex items-center justify-between px-5 py-4 text-left"
                >
                  <span className="text-gray-800 text-sm font-medium">
                    {faq.question}
                  </span>

                  <ChevronDown
                    size={18}
                    className={`transition-transform ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeOut" }}
                      className="overflow-hidden px-5 pb-4"
                    >
                      <p className="text-sm text-gray-500">{faq.answer}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
