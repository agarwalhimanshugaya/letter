import { motion } from "framer-motion";

export default function ProgressRing({ progress }) {
  const radius = 115;

  const circumference = 2 * Math.PI * radius;

  const percentage = Math.min(progress, 120);

  const offset =
    circumference -
    (percentage / 120) * circumference;

  return (
    <svg
      width="280"
      height="280"
      className="progressSvg"
    >
      <defs>

        <linearGradient
          id="ringGradient"
          x1="0%"
          y1="0%"
          x2="100%"
          y2="100%"
        >

          <stop offset="0%" stopColor="#ff4da6" />

          <stop offset="100%" stopColor="#9333ea" />

        </linearGradient>

      </defs>

      <circle
        cx="140"
        cy="140"
        r={radius}
        stroke="#ffffff18"
        strokeWidth="10"
        fill="transparent"
      />

      <motion.circle
  cx="140"
  cy="140"
  r={radius}
  stroke="url(#ringGradient)"
  strokeWidth="10"
  fill="transparent"
  strokeLinecap="round"
  strokeDasharray={circumference}
  animate={{
    strokeDashoffset: offset,
    filter:
      progress >= 120
        ? "drop-shadow(0 0 22px #ff4da6)"
        : "drop-shadow(0 0 10px #ff4da6)",
  }}
  transition={{
    duration: 0.25,
  }}
  style={{
    transform: "rotate(-90deg)",
    transformOrigin: "140px 140px",
  }}
   />
    </svg>
  );
}