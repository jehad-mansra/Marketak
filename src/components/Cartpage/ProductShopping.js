import React, { useState } from "react";
import "./Product.css";

const Product = ({ product, onDelete }) => {
  const { id, price, image, description } = product;

  return (
    <div className="container">
      <img src={image} />
      <p className="description-cart">{description}</p>
      <h4 className="price">{price}$</h4>
    </div>
  );
};

export default Product;
