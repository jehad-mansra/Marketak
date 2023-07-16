import "./productsBoard.css";
import ProductsBoard from "./productsBoard";
import { useState } from "react";
import { UsersBoard } from "../Index";

function AdminDashboard() {
const [isSelected, setIsSelected] = useState("products");
const isSelectedHandler = (e) => {
  setIsSelected(e.target.id)
}
  return (
    <div className="dashboard-container">
      <div className="dashboard-leftside">
        <div className="dashboard-leftside-title">Dashboard</div>
        <div className="dashboard-leftside-links">
          <div to="/admindashboard" className={isSelected === "products" ? "dashboard-link active" : "dashboard-link" } id="products" onClick={(e) => isSelectedHandler(e)}>
            Products
          </div>
          <div className={isSelected === "users" ? "dashboard-link active" : "dashboard-link" } id="users" onClick={(e) => isSelectedHandler(e)}>
            Users
          </div>
        </div>
      </div>
      <div>
        {isSelected === "products" ? <ProductsBoard /> : <UsersBoard />}
      </div>
    </div>
  );
}

export default AdminDashboard;
