import React from "react";

const Card = ({ image = "carouselpics/1.jpg", title = "Project", subtitle="Subtitle", descr = "Hello", getTag = false, tag="Winner"}) => {
  return (
    <div className="card bg-base-100 w-96 shadow-xl">
      <figure>
        <img src={image} />
      </figure>
      <div className="card-body">
        <h2 className="card-title">
          {title}
            {getTag ? <div className="badge badge-secondary">{tag}</div> : null}
        </h2>
        <h3 className="card-subtitle font-bold italic text-primary"> {subtitle} </h3>
        <p>{descr}</p>
        <div className="card-actions justify-end">
          <div className="badge badge-outline">Fashion</div>
          <div className="badge badge-outline">Products</div>
        </div>
      </div>
    </div>
  );
};

export default Card;
