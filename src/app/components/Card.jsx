import React from "react";

const Card = ({ image = "carouselpics/1.jpg", desrc = "Hello", isNew = "false" }) => {
  return (
    <div className="card bg-base-100 w-96 shadow-xl">
      <figure>
        <img src={image} />
      </figure>
      <div className="card-body">
        <h2 className="card-title">
          Shoes!
            {isNew ? <div className="badge badge-secondary">NEW</div> : null}
        </h2>
        <p>{desrc}</p>
        <div className="card-actions justify-end">
          <div className="badge badge-outline">Fashion</div>
          <div className="badge badge-outline">Products</div>
        </div>
      </div>
    </div>
  );
};

export default Card;
