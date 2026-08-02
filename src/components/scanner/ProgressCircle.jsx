const SIZE = 320;
const STROKE = 12;

const RADIUS = (SIZE - STROKE) / 2;
const CIRCUMFERENCE = 2 * Math.PI * RADIUS;

export default function ProgressCircle({ progress }) {
  const percent = Math.min(progress, 120) / 120;

  const offset = CIRCUMFERENCE * (1 - percent);

  return (
    <svg
      width={SIZE}
      height={SIZE}
      className="progressCircle"
    >
      <circle
        cx={SIZE / 2}
        cy={SIZE / 2}
        r={RADIUS}
        className="track"
      />

      <circle
        cx={SIZE / 2}
        cy={SIZE / 2}
        r={RADIUS}
        className="progress"
        strokeDasharray={CIRCUMFERENCE}
        strokeDashoffset={offset}
      />
    </svg>
  );
}