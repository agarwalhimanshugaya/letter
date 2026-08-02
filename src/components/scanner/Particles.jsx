import { motion } from "framer-motion";

const particles = Array.from({ length: 40 });

export default function Particles() {
  return (
    <>
      {particles.map((_, index) => {
        const angle = (360 / particles.length) * index;
        const distance = 185;

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
              opacity: [0, 1, 0],
              scale: [0.2, 1.2, 0.2],
            }}
            transition={{
              duration: 3.5,
              repeat: Infinity,
              delay: index * 0.06,
              ease: "easeInOut",
            }}
          />
        );
      })}
    </>
  );
}