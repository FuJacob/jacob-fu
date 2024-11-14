import React from "react";
import Questions from "./Questions";
import Resume from "./Resume";
import TypeWriterText from "./TypeWriterText";
const Hero = () => {
  return (
    <>
      <div className="hero bg-base-200 min-h-screen">
        <div className="grid hero-content text-center">
            <h1 className="text-5xl font-bold">Jacob Fu</h1>
            <TypeWriterText />
            <Resume/>
            {/* <Questions /> */}
          </div>
        </div>
    </>
  );
};

export default Hero;
