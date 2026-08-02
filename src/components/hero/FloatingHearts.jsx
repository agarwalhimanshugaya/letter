import { motion } from "framer-motion";

const hearts = [
  { left: "10%", delay: 0, size: 22 },
  { left: "20%", delay: 2, size: 18 },
  { left: "35%", delay: 4, size: 30 },
  { left: "50%", delay: 1, size: 24 },
  { left: "65%", delay: 3, size: 20 },
  { left: "80%", delay: 5, size: 26 },
  { left: "90%", delay: 2.5, size: 18 },
];

export default function FloatingHearts() {
  return (
    <>
      {hearts.map((heart, index) => (
        <motion.div
          key={index}
          className="floatingHeart"
          style={{
            left: heart.left,
            fontSize: `${heart.size}px`,
          }}
          animate={{
            y: [100, -900],
            x: [0, 30, -20, 20, 0],
            opacity: [0, 1, 1, 0],
            rotate: [0, 20, -20, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            delay: heart.delay,
            ease: "linear",
          }}
        >
          ❤️
        </motion.div>
      ))}
    </>
  );
}