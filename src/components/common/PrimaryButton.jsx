import { motion } from "framer-motion";

export default function PrimaryButton({ text, onClick }) {
  return (
    <motion.button
      className="primary-button"
      onClick={onClick}
      whileHover={{
        scale: 1.05,
        y: -3,
      }}
      whileTap={{
        scale: 0.95,
      }}
    >
      {text}
    </motion.button>
  );
}