import React, { Fragment, useContext } from "react";
import { allData } from "../../context/Context";
import Card from "../card/Card";
import "./featuredproducts.css";
import image from "./onlineshop.jpg";
import { Link } from "react-router-dom";

function Featuredproducts() {
  const { imageSliderData, isSelectedHandler } = useContext(allData);

  return (
    <Fragment>
      <div className="featured-products-big-container">
        <h1 className="featured-products-title">Featured Products</h1>
        <div className="featured-products-info">
          <div className="featured-products-img">
            <img src={image} alt="online shopping" />
            <div className="featured-products-img-info">
              <Link
                className="link-products"
                to="/products"
                id="products"
                onClick={(e) => isSelectedHandler(e)}
              >
                Explore More Products
              </Link>
            </div>
          </div>
          <div className="all-cards-container">
            {imageSliderData.map((item) => {
              return (
                <Card
                key={item.id}
                  title={item.title}
                  price={item.price}
                  description={item.description}
                  image={item.image}
                />
              );
            })}
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default Featuredproducts;
