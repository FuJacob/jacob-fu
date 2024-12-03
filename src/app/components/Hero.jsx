import React from "react";
import Questions from "./Questions";
import TypeWriterText from "./TypeWriterText";
import { motion } from "motion/react"; // Correct import here

const Hero = () => {
  return (
    <>
      <div className="hero min-h-screen">
        <div className="grid hero-content text-center">
          <div className="flex justify-center avatar mb-12">
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 0.5,
                delay: 0.5,
                ease: "easeOut",
              }}
            >
              <div className="mask mask-squircle w-96 h-96">
                <img src="avatar1.png" alt="avatar" />
              </div>
            </motion.div>
          </div>
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.5,
              delay: 1,
              ease: "easeOut",
            }}
          >
            <h1 className="text-9xl font-black">Jacob Fu</h1>
          </motion.div>
          <TypeWriterText />
          <div>
            <button
              className="btn btn-primary btn-xs sm:btn-sm md:btn-md lg:btn-lg"
              onClick={() => {
                window.open("JacobFu_Resume.pdf", "_blank");
              }}
            >
              <p className="text-2xl">Resume</p>
            </button>
          </div>
          {/* <Questions /> */}
        </div>
      </div>
    </>
  );
};

export default Hero;
