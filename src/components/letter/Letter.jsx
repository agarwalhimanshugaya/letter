import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";

export default function Letter() {
  return (
    <motion.div
      className="letterCard"
      initial={{ opacity: 0, y: 60 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      <div className="photoFrame">
        📸
        <span>Your Favorite Photo</span>
      </div>

      <h1>💌 To My Dearest Khusi</h1>

      <TypeAnimation
  sequence={[
`My Dearest Khusi ❤️,

You are my favorite hello,
my safest place,
and the most beautiful part of my life.

Every moment with you has become a memory
I will always treasure.

Thank you for loving me,
believing in me,
and making my world brighter every single day.

I know I'm not perfect,
but I promise to keep growing,
keep caring,
and keep choosing you—
today, tomorrow,
and every day after.

Because no matter where life takes us...

My heart will always find its way back to you.

❤️ Forever Yours,

Himanshu`,
    100000,
  ]}
  speed={45}
  wrapper="div"
  className="typedLetter"
  cursor={true}
/>
    </motion.div>
  );
}