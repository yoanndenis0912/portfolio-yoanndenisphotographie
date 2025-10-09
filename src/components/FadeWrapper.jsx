import React from "react";
import { motion } from "framer-motion";

const fadeVariants = {
  initial: { opacity: 0, scale: 0.98, y: 40, filter: "blur(10px)" },
  animate: {
    opacity: 1,
    scale: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 1, // fluide mais pas trop lent
      ease: [0.45, 0, 0.55, 1],
      when: "beforeChildren",
      staggerChildren: 0.2,
    },
  },
  exit: { opacity: 0, scale: 0.98, y: -40, filter: "blur(10px)", transition: { duration: 0.8 } },
};

const childVariants = {
  initial: { opacity: 0, y: 20, filter: "blur(5px)" },
  animate: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.8,
      ease: [0.45, 0, 0.55, 1],
    },
  },
};

export default function FadeWrapper({ children }) {
  return (
    <motion.div
      className="fade-wrapper"
      variants={fadeVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      style={{
        willChange: "opacity, transform, filter",
        perspective: "1200px",
      }}
    >
      {React.Children.map(children, (child) => (
        <motion.div variants={childVariants}>{child}</motion.div>
      ))}
    </motion.div>
  );
}