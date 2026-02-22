import { motion } from "framer-motion";

export default function SectionDivider() {
  return (
    <div className="relative py-12 md:py-16 flex justify-center">
      <motion.div
        initial={{ opacity: 0, y: 6 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="flex items-center gap-4"
      >
        {/* left line */}
        <div className="h-px w-16 sm:w-24 md:w-32 bg-gradient-to-r from-transparent via-amber-400/70 to-amber-300/40" />

        {/* center motif */}
        <motion.div
          animate={{
            scale: [1, 1.08, 1],
          }}
          transition={{
            duration: 3.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="relative text-amber-500 text-lg leading-none"
        >
          ❋
        </motion.div>

        {/* right line */}
        <div className="h-px w-16 sm:w-24 md:w-32 bg-gradient-to-l from-transparent via-amber-400/70 to-amber-300/40" />
      </motion.div>
    </div>
  );
}
