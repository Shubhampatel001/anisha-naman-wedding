import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="py-20 bg-ivory text-center">
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ amount: 0.4 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="max-w-md mx-auto px-6"
      >
        {/* Divider */}
        <div className="flex items-center justify-center gap-4 mb-6">
          <span className="w-10 h-px bg-sage/30" />
          <span className="text-sage text-sm">✦</span>
          <span className="w-10 h-px bg-sage/30" />
        </div>

        {/* Names */}
        <h3 className="text-2xl font-serif text-primary mb-2 tracking-wide">
          Anisha & Naman
        </h3>

        {/* Hashtag */}
        <p className="text-xs tracking-[0.3em] text-sage mb-4">
          #AnishaWedsNaman
        </p>

        {/* Closing line */}
        <p className="text-xs text-gray-500 leading-relaxed">
          With love, family & friends
        </p>
      </motion.div>
    </footer>
  );
}
