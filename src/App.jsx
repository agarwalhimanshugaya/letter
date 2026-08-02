import { useState, useRef } from "react";

import Hero from "./components/hero/Hero";
import ScannerPage from "./components/scanner/ScannerPage";
import EnvelopePage from "./components/envelope/EnvelopePage";
import LetterPage from "./components/letter/LetterPage";
import EndingPage from "./components/ending/EndingPage";
import BackgroundMusic from "./components/common/BackgroundMusic";
function App() {
  const [page, setPage] = useState(1);
  const musicRef = useRef(null);
  const startJourney = () => {
    musicRef.current?.playMusic();
    setPage(2);
  };
  return (
    <>
      <BackgroundMusic ref={musicRef} />
      {page === 1 && (
        <Hero onNext={startJourney} />
      )}

      {page === 2 && (
        <ScannerPage onNext={() => setPage(3)} />
      )}

      {page === 3 && (
  <EnvelopePage
    onNext={() => setPage(4)}
  />
)}
{page === 4 && (
  <LetterPage
    onNext={() => setPage(5)}
  />
)}
{page === 5 && (
        <EndingPage />
      )}
    </>
  );
}

export default App;