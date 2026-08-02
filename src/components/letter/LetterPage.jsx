import Letter from "./Letter";
import "./Letter.css";

export default function LetterPage({ onNext }) {
  return (
    <section className="letterPage">

      <Letter />

      <button
        className="continueBtn"
        onClick={onNext}
      >
        ✨ One Last Thing... ❤️
      </button>

    </section>
  );
}