import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Stars from "./Stars";
import FloatingHearts from "./FloatingHearts";
import HeartExplosion from "./HeartExplosion";
import "./Ending.css";
import Petals from "./Petals";
import TwinHearts from "./TwinHearts";
export default function EndingPage() {
  const [stage, setStage] = useState(0);
  const [clicked, setClicked] = useState(false);

  useEffect(() => {
    const t1 = setTimeout(() => setStage(1), 2000);
    const t2 = setTimeout(() => setStage(2), 4500);
    const t3 = setTimeout(() => setStage(3), 7000);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
    };
  }, []);

  return (
    <section className={`endingPage ${clicked ? "loveSky" : ""}`}>

      <Stars />
     <Petals />
      <FloatingHearts />

      <AnimatePresence mode="wait">

        {stage === 1 && (
          <motion.div
            key="one"
            className="endingText"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            Before this journey ends...
          </motion.div>
        )}

        {stage === 2 && (
          <motion.div
            key="two"
            className="endingText"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            I have one last question...
          </motion.div>
        )}

        {stage === 3 && !clicked && (
          <motion.div
            key="proposal"
            className="proposalBox"
            initial={{ opacity: 0, scale: .8 }}
            animate={{ opacity: 1, scale: 1 }}
          >
            <h1>
              ❤️
            </h1>

            <h2>
              Will you keep choosing me
            </h2>

            <h3>
              every single day,
            </h3>

            <p>
              just like
              <br />
              I'll always choose you?
            </p>

            <button
              className="yesBtn"
              onClick={() => setClicked(true)}
            >
              ❤️ YES, ALWAYS ❤️
            </button>

          </motion.div>
        )}

      </AnimatePresence>

      {clicked && (
        <>
          <HeartExplosion />
          <TwinHearts />
          <motion.div
            className="finalMessage"
            initial={{
              opacity: 0,
              scale: .8,
            }}
            animate={{
              opacity: 1,
              scale: 1,
            }}
            transition={{
              duration: 1,
            }}
          >
            <h1>❤️</h1>

            <h2>
              Thank you
            </h2>

            <h3>
              for being
              <br />
              the most beautiful chapter
              <br />
              of my life.
            </h3>

            <p>
              I love you
              <br />
              more than words
              <br />
              will ever be able to say.
            </p>

            <span>
              — Himanshu ❤️
            </span>

            <div className="forever">
              Forever & Always
            </div>
            <div className="signature">

Made with every beat of my heart ❤️

</div>
          </motion.div>
        </>
      )}

    </section>
  );
}