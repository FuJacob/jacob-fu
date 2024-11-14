"use client";
import React from 'react';

const Resume = ({title='Read Resume'}) => {
    const resume = () => {
        window.open('JacobFu_Resume.pdf', '_blank'); // Opens the PDF in a new tab
    };

    return (
        <div className="justify-center">
        <button className="btn btn-primary rounded-full" onClick={resume}>
            {title}
        </button>
        </div>
    );
};

export default Resume;
