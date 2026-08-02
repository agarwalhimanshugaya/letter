import { motion } from "framer-motion";

export default function TwinHearts(){

return(

<div className="heartMerge">

<motion.div

className="mergeHeart"

initial={{x:-250}}

animate={{x:0}}

transition={{duration:1}}

>

❤️

</motion.div>

<motion.div

className="mergeHeart"

initial={{x:250}}

animate={{x:0}}

transition={{duration:1}}

>

❤️

</motion.div>

</div>

);

}