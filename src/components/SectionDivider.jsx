import { motion } from "framer-motion";

export default function SectionDivider() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ amount: 0.3 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="flex items-center justify-center gap-4 "
    >
      <span className="w-32 h-px bg-gradient-to-r from-transparent via-sage/50 to-transparent" />
      <span className="text-sage text-sm">✦</span>
      <span className="w-32 h-px bg-gradient-to-l from-transparent via-sage/50 to-transparent" />
    </motion.div>
  );
}
