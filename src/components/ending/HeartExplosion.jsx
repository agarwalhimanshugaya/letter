import { motion } from "framer-motion";

const hearts = Array.from({ length: 90 });

export default function HeartExplosion() {
  return (
    <>
      {hearts.map((_, index) => {
        const angle = (360 / hearts.length) * index;
        const distance = 420;

        return (
          <motion.div
            key={index}
            className="explosionHeart"
            initial={{
              x: 0,
              y: 0,
              scale: 0,
              opacity: 1,
            }}
            animate={{
              x: Math.cos(angle * Math.PI / 180) * distance,
              y: Math.sin(angle * Math.PI / 180) * distance,
              scale: [0, 1.4, 1],
              opacity: [1, 1, 0],
              rotate: 720,
            }}
            transition={{
              duration: 2,
              ease: "easeOut",
            }}
          >
            ❤️
          </motion.div>
        );
      })}
    </>
  );
}