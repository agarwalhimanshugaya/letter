import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Scanner from "./Scanner";
import "./Meter.css";

const scanSteps = [
  "Initializing Love Scanner...",
  "Scanning Smile 😊",
  "Checking Eyes 👀",
  "Analyzing Kindness 💖",
  "Calculating Sweetness 🍫",
  "Looking For Imperfections...",
  "Still Searching...",
  "Impossible...",
  "Beauty Limit Exceeded ❤️"
];

export default function Meter({ next }) {

  const [progress, setProgress] = useState(0);

  const [step, setStep] = useState(0);

  const [finished, setFinished] = useState(false);

  useEffect(() => {

    let value = 0;

    const timer = setInterval(() => {

      value++;

      setProgress(value);

      if (value === 15) setStep(1);

      if (value === 35) setStep(2);

      if (value === 55) setStep(3);

      if (value === 75) setStep(4);

      if (value === 90) setStep(5);

      if (value === 100) setStep(6);

      if (value === 110) setStep(7);

      if (value === 120) {

        setStep(8);

        setFinished(true);

        clearInterval(timer);

      }

    }, 35);

    return () => clearInterval(timer);

  }, []);

  return (

    <section className="meterPage">

      <motion.div

      initial={{opacity:0,y:40}}

      animate={{opacity:1,y:0}}

      transition={{duration:.8}}

      className="meterCard"

      >

      <p className="meterSmall">

      AI LOVE SCANNER

      </p>

      <h1 className="meterTitle">

      Khusi Scanner ❤️

      </h1>

       <Scanner
        progress={progress}
       />

      <div className="progress">

      <motion.div

      className="progressFill"

      animate={{

      width:`${progress/1.2}%`

      }}

      transition={{

      duration:.2

      }}

      />

      </div>

      <p className="status">

      {scanSteps[step]}

      </p>

      {finished && (

      <motion.div

      initial={{opacity:0,y:20}}

      animate={{opacity:1,y:0}}

      >

      <div className="resultBox">

      <h2>

      ❤️ WARNING ❤️

      </h2>

      <p>

      Beauty Limit Exceeded.

      </p>

      <p>

      Official Result:

      </p>

      <h3>

      World's Cutest Girl

      </h3>

      <small>

      Verified by My Heart ❤️

      </small>

      </div>

      <button

      className="mainButton"

      onClick={next}

      >

      Open My Letter 💌

      </button>

      </motion.div>

      )}

      </motion.div>

    </section>

  );

}