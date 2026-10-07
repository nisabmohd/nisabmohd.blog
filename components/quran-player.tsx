"use client";

import { useEffect, useState } from "react";

/* Visual only, no audio */
export default function QuranPlayer() {
  const [playing, setPlaying] = useState(false);
  const [progress, setProgress] = useState(35);

  useEffect(() => {
    if (!playing) return;
    const t = setInterval(() => setProgress((p) => (p >= 100 ? 0 : p + 1.5)), 120);
    return () => clearInterval(t);
  }, [playing]);

  return (
    <div className="q-player">
      <button
        className="q-play"
        type="button"
        onClick={() => setPlaying((p) => !p)}
        aria-label={playing ? "Pause recitation" : "Play recitation"}
      >
        {playing ? "❚❚" : "▶"}
      </button>
      <span className="q-track">
        <span style={{ width: `${progress}%` }} />
      </span>
    </div>
  );
}
