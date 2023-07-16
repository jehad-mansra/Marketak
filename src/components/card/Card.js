import React, { Fragment, useContext } from "react";
import "./card.css";
import { Link } from "react-router-dom";
import { allData } from "../../context/Context";

function Card({ title, description, price, image, id }) {
  const { setIsSelected } = useContext(allData);
  return (
    <Fragment>
      <Link
        to="/products"
        className="card-container"
        onClick={() => setIsSelected("products")}
      >
        <div className="card-image">
          <img src={image} alt={title} />
        </div>
        <div className="card-description">{description}</div>
        <div className="card-info">
          <div className="card-price">{price}$</div>
        </div>
      </Link>
    </Fragment>
  );
}

export default Card;
