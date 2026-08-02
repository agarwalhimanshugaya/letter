// BackgroundMusic.jsx

import { useEffect, useRef, useImperativeHandle, forwardRef, useState } from "react";

const BackgroundMusic = forwardRef((props, ref) => {
  const audioRef = useRef(null);
  const [playing, setPlaying] = useState(false);

  useImperativeHandle(ref, () => ({
    playMusic() {
      if (audioRef.current) {
        audioRef.current.volume = 0.2;
        audioRef.current.play();
        setPlaying(true);
      }
    }
  }));

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
      <audio ref={audioRef} src="/music/love.mp3" loop />
      <button className="musicButton" onClick={toggleMusic}>
        {playing ? "🔊" : "🔇"}
      </button>
    </>
  );
});

export default BackgroundMusic;