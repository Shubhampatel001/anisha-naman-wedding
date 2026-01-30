import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

export default function Gifts() {
  const [open, setOpen] = useState(false);

  return (
    <section className="py-24 bg-ivory">
      <div className="max-w-md mx-auto px-6 text-center">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ amount: 0.3 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="text-3xl md:text-4xl font-serif text-primary mb-12 text-center"
        >
          Gifts
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ amount: 0.3 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="text-sm text-gray-500 mb-10"
        >
          Your presence is the greatest gift for us. If you wish to give
          something, please choose what feels right for you.
        </motion.p>

        {/* Rings Illustration */}
        <img
          src="/rings.png"
          alt="Wedding rings"
          className="mx-auto mt-16 w-28 opacity-90"
        />
      </div>
    </section>
  );
}
