import { useEffect, useRef, useState } from "react";

export default function BackgroundMusic() {
  const audioRef = useRef(null);
  const [playing, setPlaying] = useState(true);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = 0.25;

      audioRef.current.play().catch(() => {
        // Browser may wait until first user interaction
      });
    }
  }, []);

  const toggleMusic = () => {
    if (!audioRef.current) return;

    if (playing) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }

    setPlaying(!playing);
  };

  return (
    <>
      <audio
        ref={audioRef}
        src="/music/love.mp3"
        loop
      />

      <button
        className="musicButton"
        onClick={toggleMusic}
      >
        {playing ? "🔊" : "🔇"}
      </button>
    </>
  );
}