import React from "react";
import Resume from "./Resume";

const Navbar = ({
  title = "Jacob Fu",
  button1 = "Resume",
  button2 = "About",
}) => {
  return (
    <div
      className="navbar fixed bg-white/40 backdrop-blur-xl shadow-lg"
      style={{ zIndex: 5 }}
    >
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
        </div>
        <a className="btn btn-ghost text-xl">{title}</a>
      </div>
      <div className="menu-horizontal navbar-end">
        <a className="btn" href="#about">
          {button2}
        </a>
        <Resume title="Resume" />
      </div>
    </div>
  );
};

export default Navbar;
