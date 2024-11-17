import React from "react";
const About = () => {
  return (
    <>
      <div className="grid place-items-center text-center">
        <h1 className="text-7xl font-black" id="about">About Me</h1>
        <div className="py-14 text-2xl max-w-screen-sm">
          <p>
              I'm a
              <a
                className="text-bold"
                href="https://uwaterloo.ca/future-students/programs/computing-and-financial-management"
                target="_blank"
              >
                <b> Computing and Financial Management </b>
              </a>{" "}
              student at the University of Waterloo aiming to make a positive impact
              on people's lives through technology.
          </p>
        <p><br/>
            When I'm not doing homework or working on fun projects, you can find me playing volleyball, badminton, or
            listening to music.
        </p>
        </div>
      </div>
    </>
  );
};

export default About;
