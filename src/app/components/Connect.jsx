import React from "react";
import { FaInstagram, FaGithub, FaLinkedin } from "react-icons/fa";
const Connect = () => {
  return (
    <div className="flex flex-col items-center mb-36">
      <h1 className="title text-7xl font-black mb-12">Connect with Me!</h1>
      <div className="grid grid-flow-col gap-12 text-center">
        <div>
            <button className="btn rounded-full w-24 h-24" onClick={() => {window.open("https://github.com/fujacob/", "_blank")}}>
              <FaGithub size={45}/>
            </button>
        </div>
        <div>
            <button className="btn rounded-full w-24 h-24" onClick={() => {window.open("https://www.linkedin.com/in/fujacob/", "_blank")}}>
              <FaLinkedin size={45}/>
            </button>
        </div>
        <div>
            <button className="btn rounded-full w-24 h-24" onClick={() => {window.open("https://www.instagram.com/jjacobfu", "_blank")}}>
              <FaInstagram size={45}/>
            </button>
        </div>
      </div>
    </div>
  );
};

export default Connect;
