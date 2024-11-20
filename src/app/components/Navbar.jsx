import React from "react";
import Resume from "./Resume";
import ThemeController from "./ThemeController";
import { FaInstagram, FaGithub, FaLinkedin } from "react-icons/fa";
const Navbar = ({
  title = "Jacob Fu",
  button1 = "Resume",
  button2 = "About",
}) => {
  return (
    <div
      className="navbar fixed var(--background)/40 backdrop-blur-xl shadow-lg"
      style={{ zIndex: 5 }}
    >
      <div className="navbar-start">
        <ThemeController />
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 12 12"
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
      <div className="menu-horizontal navbar-end gap-2">
      <div>
            <button className="btn rounded-full w-12 h-12" onClick={() => {window.open("https://github.com/fujacob/", "_blank")}}>
              <FaGithub size={30}/>
            </button>
        </div>
        <div>
            <button className="btn rounded-full w-12 h-12" onClick={() => {window.open("https://www.linkedin.com/in/fujacob/", "_blank")}}>
              <FaLinkedin size={30}/>
            </button>
        </div>
        <div>
            <button className="btn rounded-full w-12 h-12" onClick={() => {window.open("https://www.instagram.com/jjacobfu", "_blank")}}>
              <FaInstagram size={30}/>
            </button>
        </div>
      <a className="btn" href="#projects">
      My Projects</a>
        <a className="btn" href="#about">
          {button2}
        </a>
       
        <Resume title="Resume" />
      </div>
    </div>
  );
};

export default Navbar;
