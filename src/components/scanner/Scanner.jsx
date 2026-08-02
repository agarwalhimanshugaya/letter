import { motion } from "framer-motion";
import ProgressCircle from "./ProgressCircle";
import OrbitingHearts from "./OrbitingHearts";
import Particles from "./Particles";
export default function Scanner({ progress }) {
  return (
    <div className="scanner">
       <Particles />
      {/* Rotating Outer Ring */}
      <motion.div
        className="outerRing"
        animate={{ rotate: 360 }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "linear",
        }}
      />

      {/* Rotating Inner Ring */}
      <motion.div
        className="innerRing"
        animate={{ rotate: -360 }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "linear",
        }}
      />

      {/* Scanner Beam */}
      <motion.div
        className="scannerBeam"
        animate={{ rotate: 360 }}
        transition={{
          duration: 2.2,
          repeat: Infinity,
          ease: "linear",
        }}
      />
       <OrbitingHearts />
      {/* SVG Progress */}
      <ProgressCircle progress={progress} />

      {/* Center Heart */}
      <div
  className={`scannerCenter ${
    progress >= 120 ? "scannerComplete" : ""
  }`}
>

        <motion.div
          className="heart"
          animate={{
            scale: [1, 1.18, 1],
          }}
          transition={{
            duration: 1,
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