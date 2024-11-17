"use client";
import React from 'react';

const Resume = ({title='Read Resume'}) => {
    const resume = () => {
        window.open('JacobFu_Resume.pdf', '_blank'); // Opens the PDF in a new tab
    };

    return (
     <div className="flex justify-center w-auto">
        <button className="flex btn btn-primary" onClick={resume}>
    Resume
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-6 w-6"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
    </svg>
  </button>
     </div>
    );
};

export default Resume;
