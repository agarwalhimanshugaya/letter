import { useEffect, useState } from "react";
import Scanner from "./Scanner";
import scanSteps from "./scanSteps";
import "./Scanner.css";

export default function ScannerPage({ onNext }) {
  const [progress, setProgress] = useState(0);
  const [message, setMessage] = useState(scanSteps[0].text);

  // Animate progress from 0 → 120
  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 120) {
          clearInterval(interval);


          return 120;
        }

        return prev + 1;
      });
    }, 70);

    return () => clearInterval(interval);
  }, [onNext]);

  // Update message based on progress
  useEffect(() => {
    const currentStep =
      [...scanSteps]
        .reverse()
        .find((step) => progress >= step.progress);

    if (currentStep) {
      setMessage(currentStep.text);
    }
  }, [progress]);

  return (
    <section className="scannerPage">
      <Scanner progress={progress} />

      <h1 className="scanTitle">
        ❤️ AI LOVE ANALYZER ❤️
      </h1>

      <p className="scanMessage">
        {message}
      </p>

      {progress >= 120 && (
  <div className="completeCard">
    <h2>✨ Analysis Complete ✨</h2>

    <p>No flaws detected ❤️</p>

    <h1>120%</h1>

    <span>Beauty Beyond Infinity 💖</span>

    <button
      className="openLetterButton"
      onClick={onNext}
    >
      💌 Open My Letter
    </button>
  </div>
)}
    </section>
  );
}