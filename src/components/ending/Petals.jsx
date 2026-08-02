import { motion } from "framer-motion";

const petals = Array.from({ length: 20 });

export default function Petals() {
  return (
    <>
      {petals.map((_, i) => (
        <motion.div
          key={i}
          className="petal"
          initial={{
            x: Math.random() * window.innerWidth,
            y: -100,
            rotate: 0,
            opacity: 0,
          }}
          animate={{
            y: window.innerHeight + 100,
            x: Math.random() * window.innerWidth,
            rotate: 360,
            opacity: [0, 1, 1, 0],
          }}
          transition={{
            duration: 10 + Math.random() * 5,
            repeat: Infinity,
            delay: Math.random() * 6,
            ease: "linear",
          }}
        >
          🌸
        </motion.div>
      ))}
    </>
  );
}