import { useState } from "react";

import Hero from "./components/hero/Hero";
import ScannerPage from "./components/scanner/ScannerPage";
import EnvelopePage from "./components/envelope/EnvelopePage";
import LetterPage from "./components/letter/LetterPage";
import EndingPage from "./components/ending/EndingPage";
function App() {
  const [page, setPage] = useState(1);

  return (
    <>
      {page === 1 && (
        <Hero onNext={() => setPage(2)} />
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