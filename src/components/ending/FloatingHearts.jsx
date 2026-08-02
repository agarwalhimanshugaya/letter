import { motion } from "framer-motion";

const hearts = Array.from({ length: 35 });

export default function FloatingHearts() {
  return (
    <>
      {hearts.map((_, index) => (
        <motion.div
          key={index}
          className="floatingHeart"
          initial={{
            x: Math.random() * window.innerWidth,
            y: window.innerHeight + 80,
            opacity: 0,
          }}
          animate={{
            y: -200,
            opacity: [0, 1, 1, 0],
            x: Math.random() * window.innerWidth,
            rotate: Math.random() * 360,
          }}
          transition={{
            duration: 8 + Math.random() * 6,
            repeat: Infinity,
            delay: Math.random() * 10,
            ease: "linear",
          }}
        >
          ❤️
        </motion.div>
      ))}
    </>
  );
}