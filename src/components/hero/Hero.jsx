import { motion } from "framer-motion";
import PrimaryButton from "../common/PrimaryButton";
import Aurora from "./Aurora";
import "./Hero.css";
import FloatingHearts from "./FloatingHearts";
export default function Hero({ onNext }) {
  return (
    <section className="hero">
       <Aurora />
       <FloatingHearts />
      <div className="backgroundGlow glow1"></div>
      <div className="backgroundGlow glow2"></div>

      <motion.div
        className="heroCard"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <motion.h1
  className="heroTitle"
  initial={{ scale: 0.8 }}
  animate={{
    scale: [1, 1.05, 1],
  }}
  transition={{
    duration: 2,
    repeat: Infinity,
    ease: "easeInOut",
  }}
>
          I'm Sorry ❤️
        </motion.h1>

        <p className="heroSubtitle">
          Every heartbeat,
          <br />
          every smile,
          <br />
          every memory...
          <br />
          deserves another chance.
        </p>

        <PrimaryButton
          text="Begin Our Journey ❤️"
          onClick={onNext}
        />
      </motion.div>

    </section>
  );
}