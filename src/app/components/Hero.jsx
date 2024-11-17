import React from "react";
import Questions from "./Questions";
import TypeWriterText from "./TypeWriterText";
const Hero = () => {
  return (
    <>
      <div className="hero min-h-screen">
        <div className="grid hero-content text-center">
          <div className="flex justify-center avatar mb-12">
            <div className="mask mask-squircle w-96">
              <img src="avatar.jpg"></img>
            </div>
          </div>

          <h1 className="text-9xl font-black">Jacob Fu</h1>
          <TypeWriterText />
           <div> <button className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg" onClick={() => {window.open("JacobFu_Resume.pdf", "_blank")}}> <p className="text-2xl">Resume</p> </button></div>
          {/* <Questions /> */}
        </div>
      </div>
    </>
  );
};

export default Hero;
