import { motion } from "framer-motion";
import Sparkles from "./Sparkles";
export default function Envelope({ opened, onOpen }) {
  return (
    <div className="envelopeWrapper">
       <Sparkles active={opened} />
      <motion.div
        className="envelope"
        initial={{ scale: 0.85, opacity: 0 }}
        animate={{
          scale: 1,
          opacity: 1
        }}
        transition={{
          duration: 0.8
        }}
      >

        {/* Letter */}

        <motion.div
          className="letterPaper"
          animate={{
            y: opened ? -170 : 0,
            rotate: opened ? [0, -1, 1, 0] : 0,
           }}
          transition={{
  y: {
    duration: 1.2,
    ease: "easeInOut",
  },
  rotate: {
    duration: 4,
    repeat: Infinity,
    ease: "easeInOut",
  },
}}
        >

          <h2>💖</h2>

          <p>
            I have something
            beautiful to tell you...
          </p>

        </motion.div>

        {/* Envelope */}

        <div className="envelopeBody"/>

        <div className="envelopeLeft"/>

        <div className="envelopeRight"/>

        {/* Flap */}

        <motion.div
          className="envelopeFlap"
          animate={{
            rotateX: opened ? 180 : 0
          }}
          transition={{
            duration:1
          }}
        />

        {/* Heart */}

        {!opened && (

          <motion.div
            className="seal"
            whileHover={{
              scale:1.15
            }}
            whileTap={{
              scale:.9
            }}
            exit={{
            scale: 2,
             opacity: 0,
             }}
            onClick={() => {
  onOpen();
}}
          >

            ❤️

          </motion.div>

        )}

      </motion.div>

    </div>
  );
}