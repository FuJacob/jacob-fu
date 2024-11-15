import React from "react";
import Questions from "./Questions";
import Resume from "./Resume";
import TypeWriterText from "./TypeWriterText";
const Hero = () => {
  return (
    <>
      <div className="hero bg-base-200 min-h-screen">
        <div className="grid hero-content text-center">
          <div className="flex justify-center avatar mb-12">
            <div className="mask mask-squircle w-96">
              <img src="avatar.jpg"></img>
            </div>
          </div>
          <h1 className="text-9xl font-black">Jacob Fu</h1>
          <TypeWriterText />
          <Resume />
          {/* <Questions /> */}
        </div>
      </div>
    </>
  );
};

export default Hero;
