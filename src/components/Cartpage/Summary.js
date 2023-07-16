import "./Summary.css";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { allData } from "../../context/Context";
function Summary({ products }) {
  const navigate = useNavigate();
  const { setCurrentCart } = useContext(allData);
  return (
    <div className="summary-card">
      <h2>Summary</h2>
      <span>Estimate Shipping and Tax</span>
      <p className="shippinp">
        Enter your destination to get a shipping estimate.
      </p>
      <p>
        <span className="shippinp">
          (Standard Rate - Price may vary depending on the item/destination.
          TECS Staff will contact you.)
        </span>
      </p>
      <button
      className="proceed-btn"
        href=""
        onClick={() => {
          Swal.fire({
            title: `Are You Sure You Want To Proceed?`,
            showCancelButton: true,
          }).then(() => {
            setCurrentCart([]);
            navigate("/");
          });
        }}
      >
        Proceed to Checkout
      </button>
    </div>
  );
}

export default Summary;
