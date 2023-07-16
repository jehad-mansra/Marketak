import React, { Fragment, useContext, useEffect, useState } from "react";
import "./productscard.css";
import { Link } from "react-router-dom";
import { allData } from "../../context/Context";
import axios from "axios";

function ProductsCard({ title, description, price, image, id, item }) {
  const [isClicked, setIsClicked] = useState(false);
  const {
    currentCart,
    setCurrentCart,
    isSignedIn,
    currentUser,
    setCurrentUser,
  } = useContext(allData);
  return (
    <Fragment>
      <div className="products-card-container">
        <div className="products-card-image">
          <img src={image} alt={title} />
        </div>
        <Link to={`/products/${id}`}>
          <div className="products-card-title">{title}</div>
        </Link>
        <div className="products-card-description">{description}</div>
        <div className="products-card-info">
          <div className="products-card-price">{price}$</div>
          {isSignedIn ? (
            !isClicked ? (
              <button
                className="addtocardd-btn"
                onClick={() => {
                  if (currentCart.includes(item)) {
                  } else {
                    const currentCartToBeAdded = [...currentCart, item]
                    setCurrentCart(currentCartToBeAdded);
                    setCurrentUser({
                      ...currentUser,
                      currentcard: currentCartToBeAdded,
                    });
                    axios.put(
                      `http://localhost:5001/users/${currentUser.id}`,
                      currentUser
                    );
                    setIsClicked(true);
                  }
                }}
              >
                Add Cart
              </button>
            ) : (
              <button className="addtocardd-btn">Added</button>
            )
          ) : null}
        </div>
      </div>
    </Fragment>
  );
}

export default ProductsCard;
