import React from "react";
import Carousel from "./Carousel";
const About = () => {
  return (
    <>
      <div className="text-center flex flex-col items-center justify-center" >
        <div className="max-w-3xl">
          <h1 className="text-7xl font-black leading-relaxed" id="about">About Me</h1>
          <p className="text-2xl mb-5">
            I'm a
            <a
              className="text-bold"
              href="https://uwaterloo.ca/future-students/programs/computing-and-financial-management"
              target="_blank"
            >
              <b> Computing and Financial Management </b>
            </a>
            student at the University of Waterloo aiming to make a positive
            impact on people's lives through technology.
          </p>
          <p className="text-2xl">
            When I'm not doing homework or working on fun projects, you can find
            me playing volleyball, badminton, or listening to music.
          </p>
<div className="mt-12">
            <Carousel/>
  
</div>        </div>
      </div>
    </>
  );
};

export default About;
