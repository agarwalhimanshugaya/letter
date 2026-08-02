import { motion } from "framer-motion";

const sparkles = Array.from({ length: 24 });

export default function Sparkles({ active }) {
  if (!active) return null;

  return (
    <>
      {sparkles.map((_, index) => {
        const angle = (360 / sparkles.length) * index;
        const distance = 170;

        return (
          <motion.div
            key={index}
            className="sparkle"
            style={{
              left: "50%",
              top: "50%",
            }}
            initial={{
              x: 0,
              y: 0,
              opacity: 1,
              scale: 0.2,
            }}
            animate={{
              x: Math.cos((angle * Math.PI) / 180) * distance,
              y: Math.sin((angle * Math.PI) / 180) * distance,
              opacity: 0,
              scale: 1.2,
            }}
            transition={{
              duration: 1.2,
              delay: index * 0.02,
            }}
          >
            ✨
          </motion.div>
        );
      })}
    </>
  );
}