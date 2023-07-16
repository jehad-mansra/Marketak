import React, { useContext, useEffect } from "react";
import "./Cart.css";
import Product from "./ProductShopping";
import Summary from "./Summary";
import { useState } from "react";
import { allData } from "../../context/Context";
import axios from "axios";

const Cartpage = () => {
  const [pro, setpro] = useState([]);
  const { currentUser, setCurrentCart, currentCart, setCurrentUser } =
    useContext(allData);
  useEffect(() => {
    axios.get(`http://localhost:5001/users/${currentUser.id}`).then((res) => {
      const initialData = res.data.currentcard || [];
      setpro(initialData);
    });
  }, [currentCart, pro]);


  const HandelDelete = (e) => {
    const filteredProducts = pro.filter((item) => item.id !== e.target.id);
    setpro(filteredProducts);
    setCurrentCart(filteredProducts);
    setCurrentUser({ ...currentUser, currentcard: filteredProducts });
    axios.put(`http://localhost:5001/users/${currentUser.id}`, currentUser);
  };
  return (
    <div className="container-shoping">
      <h1 className="title">Shopping Cart</h1>
      <div className="cart">
        <div className="cart-1">
          {pro.map((product) => (
            <Product
              key={product.id}
              product={product}
              onDelete={HandelDelete}
            />
          ))}
        </div>
        <div className="summery">
          <Summary products={pro} />
        </div>
      </div>
    </div>
  );
};

export default Cartpage;
