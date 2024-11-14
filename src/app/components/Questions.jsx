import React from "react";

const Questions = () => {
  return (
      <div className="text-center py-16 w-auto">
        <div className="justify-center collapse bg-base-300">
          <input type="radio" name="my-accordion-1" defaultChecked/>
          <div className="collapse-title text-2xl font-bold">
            Who am I?
          </div>
          <div className="collapse-content">
            <p>I'm a student at the <b>University of Waterloo</b>,
            studying <b>Computer Science and Finance</b></p>
          </div>
        </div>
        <div className="collapse bg-base-300 p-6">
          <input type="radio" name="my-accordion-1" />
          <div className="collapse-title text-2xl font-bold">
            <p>What am I seeking?</p>
          </div>
          <div className="collapse-content">
            <p>I'm looking for front-end or back-end positions at tech companies that drive towards innovation</p>
          </div>
        </div>
      </div>
  );
};

export default Questions;
