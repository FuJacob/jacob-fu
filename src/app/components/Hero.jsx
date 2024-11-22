import React from "react";
import Questions from "./Questions";
import TypeWriterText from "./TypeWriterText";
import { motion } from "motion/react";  // Correct import here

const Hero = () => {
  return (
    <>
      <div className="hero min-h-screen">
        <div className="grid hero-content text-center">
          <div className="flex justify-center avatar mb-12">
            <div className="mask mask-squircle w-96">
              <img src="avatar.jpg" alt="avatar" />
            </div>
          </div>
          <motion.div
  whileHover={{
    scale: 1.1,
    transition: { duration: 0.2 }
  }}>
          <h1 className="text-9xl font-black">Jacob Fu</h1></motion.div>
          <TypeWriterText />
          <div>
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onHoverStart={() => console.log('hover started!')}
          >
            <button
              className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg"
              onClick={() => { window.open("JacobFu_Resume.pdf", "_blank"); }}
            >
              <p className="text-2xl">Resume</p>
            </button>
            </motion.button>

          </div>
          {/* <Questions /> */}
        </div>
      </div>
    </>
  );
};

export default Hero;
