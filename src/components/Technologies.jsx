import { animate, motion } from "framer-motion";
import { FaReact, FaGitAlt } from "react-icons/fa";
import {
  SiRedux,
  SiTypescript,
  SiTailwindcss,
  SiNextdotjs,
} from "react-icons/si";

const iconVariants = (duration) => ({
  initial: { y: -10 },
  animate: {
    y: [10, -10],
    transition: { duration: duration },
    ease: "linear",
    repeat: Infinity,
    repeatType: "reverse",
  },
});

const Technologies = () => {
  return (
    <div className="pb-24">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1.5 }}
        className="my-20 text-center text-4xl text-red-500"
      >
        My Technologies
      </motion.h2>

      <motion.div
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -100 }}
        transition={{ duration: 1.5 }}
        className="flex flex-wrap items-center justify-center gap-4"
      >
        <div className="flex flex-wrap items-center justify-center">
          <motion.div
            initial="initial"
            animate="animate"
            variants={iconVariants(2.5)}
            className="p-4"
          >
            <SiNextdotjs className="text-7xl text-white cursor-pointer" />
          </motion.div>

          <motion.div
            initial="initial"
            animate="animate"
            variants={iconVariants(3)}
            className="p-4"
          >
            <FaReact className="text-7xl text-cyan-400 cursor-pointer" />
          </motion.div>

          <motion.div
            initial="initial"
            animate="animate"
            variants={iconVariants(5)}
            className="p-4"
          >
            <SiTypescript className="text-7xl text-cyan-400 cursor-pointer" />
          </motion.div>

          <motion.div
            initial="initial"
            animate="animate"
            variants={iconVariants(4)}
            className="p-4"
          >
            <SiRedux className="text-7xl text-red-700 cursor-pointer" />
          </motion.div>

          <motion.div
            initial="initial"
            animate="animate"
            variants={iconVariants(1)}
            className="p-4"
          >
            <SiTailwindcss className="text-7xl text-cyan-400 cursor-pointer" />
          </motion.div>

          <motion.div
            initial="initial"
            animate="animate"
            variants={iconVariants(2.5)}
            className="p-4"
          >
            <FaGitAlt className="text-7xl text-orange-700 cursor-pointer" />
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default Technologies;

// className="flex justify-center items-center gap-4"
