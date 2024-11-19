import React from "react";

const Card = ({ image = "carouselpics/1.jpg", title = "Project", subtitle="Subtitle", descr = "Hello", getBadge = false, badge="Winner", tag1, tag2 }) => {
  return (
    <div className="card bg-base-100 w-96 shadow-xl">
      <figure>
        <img src={image} className="h-[32rem] object-cover"/>
      </figure>
      <div className="card-body">
        <h2 className="card-title">
          {title}
            {getBadge ? <div className="badge badge-secondary">{badge}</div> : null}
        </h2>
        <h3 className="card-subtitle font-bold italic text-primary"> {subtitle} </h3>
        <p>{descr}</p>
        <div className="card-actions justify-end">
          <div className="badge badge-outline">{tag1}</div>
          <div className="badge badge-outline">{tag2}</div>
        </div>
      </div>
    </div>
  );
};

export default Card;
