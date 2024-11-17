import React from "react";
const About = () => {
  return (
    <div className="text-center flex flex-col items-center justify-center space-y-10 p-16 max-w-2xl mx-auto">
      <div>
        <h1 className="text-7xl font-black">About Me</h1>
      </div>
      <div>
        <p className="text-2xl">
          I'm a
          <a
            className="text-bold"
            href="https://uwaterloo.ca/future-students/programs/computing-and-financial-management"
            target="_blank"
          >
            <b> Computing and Financial Management </b>
          </a>
          student at the University of Waterloo aiming to make a positive impact
          on people's lives through technology.
        </p>
      </div>
      <div>
        <p className="text-2xl">
          When I'm not doing homework or working on fun projects, you can find
          me playing volleyball, badminton, or listening to music.
        </p>
      </div>
    </div>
  );
};

export default About;
