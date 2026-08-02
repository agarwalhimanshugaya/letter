import { motion } from "framer-motion";

export default function Aurora() {
  return (
    <>
      <motion.div
        className="aurora aurora1"
        animate={{
          x: [-80, 80, -80],
          y: [-50, 40, -50],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 16,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <motion.div
        className="aurora aurora2"
        animate={{
          x: [60, -60, 60],
          y: [30, -40, 30],
          scale: [1.2, 1, 1.2],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <motion.div
        className="aurora aurora3"
        animate={{
          x: [-40, 50, -40],
          y: [60, -60, 60],
          scale: [1, 1.15, 1],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    </>
  );
}