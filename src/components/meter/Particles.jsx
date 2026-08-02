import { motion } from "framer-motion";

const particles = Array.from({ length: 24 });

export default function Particles() {
  return (
    <>
      {particles.map((_, index) => {
        const angle = (360 / particles.length) * index;
        const distance = 145;

        return (
          <motion.div
            key={index}
            className="particle"
            style={{
              left: "50%",
              top: "50%",
            }}
            animate={{
              x: [
                0,
                Math.cos((angle * Math.PI) / 180) * distance,
                0,
              ],
              y: [
                0,
                Math.sin((angle * Math.PI) / 180) * distance,
                0,
              ],
              opacity: [0.2, 1, 0.2],
              scale: [0.5, 1.2, 0.5],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              delay: index * 0.08,
              ease: "easeInOut",
            }}
          />
        );
      })}
    </>
  );
}