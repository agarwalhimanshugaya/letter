import { motion } from "framer-motion";

const hearts = [
  { angle: 0 },
  { angle: 60 },
  { angle: 120 },
  { angle: 180 },
  { angle: 240 },
  { angle: 300 },
];

export default function OrbitingHearts() {
  return (
    <motion.div
      className="orbitContainer"
      animate={{ rotate: 360 }}
      transition={{
        duration: 10,
        repeat: Infinity,
        ease: "linear",
      }}
    >
      {hearts.map((heart, index) => (
        <div
          key={index}
          className="orbitHeart"
          style={{
            transform: `rotate(${heart.angle}deg) translateY(-170px) rotate(-${heart.angle}deg)`,
          }}
        >
          ❤️
        </div>
      ))}
    </motion.div>
  );
}