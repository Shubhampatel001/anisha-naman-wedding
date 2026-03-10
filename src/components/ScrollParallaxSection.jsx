import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function ScrollParallaxSection({ children }) {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [120, -120]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.9, 1, 0.9]);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);
  const rotateX = useTransform(scrollYProgress, [0, 1], [12, -12]);

  return (
    <motion.div
      ref={ref}
      style={{
        y,
        scale,
        opacity,
        rotateX,
        transformPerspective: 1200,
      }}
      className="will-change-transform"
    >
      {children}
    </motion.div>
  );
}
