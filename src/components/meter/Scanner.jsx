import { motion } from "framer-motion";
import ProgressRing from "./ProgressRing";
import Particles from "./Particles";
export default function Scanner({ progress }) {
  return (
    <div className="scanner">
       <Particles />
      {/* Outer Ring */}
      <motion.div
        className="outerRing"
        animate={{ rotate: 360 }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
        }}
      />

      {/* Middle Ring */}
      <motion.div
        className="middleRing"
        animate={{ rotate: -360 }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "linear",
        }}
      />

      {/* Scanner Sweep */}
      <motion.div
        className="scannerSweep"
        animate={{ rotate: 360 }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "linear",
        }}
      />

      <ProgressRing progress={progress} />

      <div
        className={`scannerCenter ${
          progress >= 120 ? "scannerComplete" : ""
        }`}
      >
        <motion.div
          className="heartIcon"
          animate={{
            scale:
              progress >= 120
                ? [1, 1.25, 1]
                : [1, 1.08, 1],
          }}
          transition={{
            duration: progress >= 120 ? 0.5 : 1,
            repeat: Infinity,
          }}
        >
          ❤️
        </motion.div>

        <h2>{progress}%</h2>
      </div>

    </div>
  );
}