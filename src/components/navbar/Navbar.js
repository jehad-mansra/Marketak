import React, { Fragment, useContext, useState } from "react";
import logo from "./marketak-high-resolution-logo-black-on-transparent-background.png";
import "./navbar.css";
import { Route, Routes, Link } from "react-router-dom";
import {
  Products,
  Home,
  Profile,
  Weather,
  AddProducts,
  AdminDashboard,
  EditProcuts,
  Register,
  Login,
  Cartpage,
  AboutUS,
} from "../Index";
import { allData } from "../../context/Context";

import ProductDetails from "../products/ProductDetails";

function Navbar() {
  const {
    isSignedIn,
    setIsSignedIn,
    isSelectedHandler,
    isSelected,
    setCurrentUser,
    currentUser,
    setCurrentCart
  } = useContext(allData);
  const [isNavOpened, setIsNavOpened] = useState(false);
  const signOutHandling = () => {
    setCurrentUser({});
    setCurrentCart([])
    setIsSignedIn(false);
  };
  return (
    <Fragment>
      <header>
        {isNavOpened ? (
          <div className="side-bar-container">
            <div
              className="side-bar-x"
              onClick={() => setIsNavOpened(!isNavOpened)}
            >
              <svg
                width="40"
                height="40"
                viewBox="0 0 12 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M2.22 2.22C2.28956 2.15033 2.37218 2.09507 2.46312 2.05736C2.55406 2.01965 2.65155 2.00024 2.75 2.00024C2.84845 2.00024 2.94593 2.01965 3.03687 2.05736C3.12782 2.09507 3.21043 2.15033 3.28 2.22L6 4.939L8.72 2.22C8.7896 2.1504 8.87223 2.09519 8.96316 2.05752C9.0541 2.01985 9.15157 2.00047 9.25 2.00047C9.34843 2.00047 9.44589 2.01985 9.53683 2.05752C9.62777 2.09519 9.7104 2.1504 9.78 2.22C9.8496 2.2896 9.90481 2.37223 9.94248 2.46316C9.98014 2.5541 9.99953 2.65157 9.99953 2.75C9.99953 2.84843 9.98014 2.9459 9.94248 3.03683C9.90481 3.12777 9.8496 3.2104 9.78 3.28L7.061 6L9.78 8.72C9.92056 8.86056 9.99953 9.05121 9.99953 9.25C9.99953 9.44879 9.92056 9.63943 9.78 9.78C9.63943 9.92056 9.44879 9.99953 9.25 9.99953C9.05121 9.99953 8.86056 9.92056 8.72 9.78L6 7.061L3.28 9.78C3.13943 9.92056 2.94879 9.99953 2.75 9.99953C2.55121 9.99953 2.36056 9.92056 2.22 9.78C2.07943 9.63943 2.00047 9.44879 2.00047 9.25C2.00047 9.05121 2.07943 8.86056 2.22 8.72L4.939 6L2.22 3.28C2.15033 3.21043 2.09507 3.12782 2.05736 3.03687C2.01965 2.94593 2.00024 2.84845 2.00024 2.75C2.00024 2.65155 2.01965 2.55406 2.05736 2.46312C2.09507 2.37218 2.15033 2.28956 2.22 2.22Z"
                  fill="black"
                />
              </svg>
            </div>
            <div className="side-bar">
              <img src={logo} alt="..." />
              <Link
                className={isSelected === "home" ? "link-active link" : "link"}
                to="/"
                id="home"
                onClick={(e) => isSelectedHandler(e)}
              >
                Home
              </Link>
              <Link
                className={
                  isSelected === "products" ? "link-active link" : "link"
                }
                to="/products"
                id="products"
                onClick={(id) => isSelectedHandler(id)}
              >
                Products
              </Link>
              <Link
                className={
                  isSelected === "aboutus" ? "link-active link" : "link"
                }
                to="/aboutus"
                id="aboutus"
                onClick={(id) => isSelectedHandler(id)}
              >
                About us
              </Link>
            </div>
            <Weather />
          </div>
        ) : null}
        <div className="header-leftside">
          <div
            className="burger-menu"
            onClick={() => setIsNavOpened(!isNavOpened)}
          >
            <svg
              width="40"
              height="40"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M4 12H20M4 6H20M4 18H20"
                stroke="black"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <img src={logo} alt="..." />
        </div>
        <div className="header-middleside">
          <Link
            className={isSelected === "home" ? "link-active link" : "link"}
            to="/"
            id="home"
            onClick={(e) => isSelectedHandler(e)}
          >
            Home
          </Link>
          <Link
            className={isSelected === "products" ? "link-active link" : "link"}
            to="/products"
            id="products"
            onClick={(id) => isSelectedHandler(id)}
          >
            Products
          </Link>
          <Link
            className={isSelected === "aboutus" ? "link-active link" : "link"}
            to="/aboutus"
            id="aboutus"
            onClick={(id) => isSelectedHandler(id)}
          >
            About us
          </Link>
        </div>
        <div className="header-rightside">
          {isSignedIn ? (
            <Fragment>
              <Link
                className="cart-container"
                to="/cartpage"
                onClick={(e) => isSelectedHandler(e)}
              >
                <svg
                  width="17"
                  height="17"
                  viewBox="0 0 23 22"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M22.7354 2.8877C22.6101 2.73116 22.4205 2.64005 22.22 2.64005H4.65429L4.16309 0.511582C4.09395 0.212131 3.8273 0 3.51999 0H0.659989C0.295518 0 0 0.295518 0 0.660034C0 1.02455 0.295518 1.32002 0.659989 1.32002H2.99495L6.32918 15.7684C6.39826 16.0679 6.66496 16.28 6.97227 16.28H20.196C20.5605 16.28 20.856 15.9845 20.856 15.62C20.856 15.2555 20.5604 14.96 20.196 14.96H7.49735L6.9897 12.76H20.24C20.5487 12.76 20.8162 12.5461 20.8839 12.2449L22.8639 3.44491C22.9079 3.24927 22.8606 3.04429 22.7354 2.8877ZM19.712 11.44H6.68507L4.95892 3.96002H21.395L19.712 11.44Z"
                    fill="#232323"
                  />
                  <path
                    d="M9.68002 17.1599C8.34565 17.1599 7.26001 18.2455 7.26001 19.5799C7.26001 20.9143 8.3456 21.9999 9.68002 21.9999C11.0144 21.9999 12.1 20.9143 12.1 19.5799C12.1 18.2455 11.0144 17.1599 9.68002 17.1599ZM9.68002 20.6799C9.07347 20.6799 8.58003 20.1865 8.58003 19.5799C8.58003 18.9734 9.07347 18.4799 9.68002 18.4799C10.2866 18.4799 10.78 18.9734 10.78 19.5799C10.78 20.1865 10.2866 20.6799 9.68002 20.6799Z"
                    fill="#232323"
                  />
                  <path
                    d="M17.5999 17.1599C16.2656 17.1599 15.1799 18.2455 15.1799 19.5799C15.1799 20.9143 16.2655 21.9999 17.5999 21.9999C18.9343 21.9999 20.0199 20.9143 20.0199 19.5799C20.0199 18.2455 18.9344 17.1599 17.5999 17.1599ZM17.5999 20.6799C16.9934 20.6799 16.5 20.1865 16.5 19.58C16.5 18.9734 16.9934 18.48 17.5999 18.48C18.2065 18.48 18.6999 18.9734 18.6999 19.58C18.6999 20.1865 18.2065 20.6799 17.5999 20.6799Z"
                    fill="#232323"
                  />
                </svg>
              </Link>
              <Link to="/profile" onClick={(id) => isSelectedHandler(id)}>
                <div className="header-img-container">
                  <img src={currentUser.image} alt="profile" id="profile" />
                </div>
              </Link>
              <button className="signin-btn" onClick={() => signOutHandling()}>
                Sign Out
              </button>{" "}
            </Fragment>
          ) : (
            <Link to={"Login"}>
              <button className="signin-btn">Sign In</button>
            </Link>
          )}
        </div>
      </header>
      <Routes>
        <Route path="/products" element={<Products />}></Route>
        <Route path="/" element={<Home />}></Route>
        <Route path="/profile" element={<Profile />}></Route>
        <Route path="/products/:productId" element={<ProductDetails />}></Route>
        <Route path="/addProduct" element={<AddProducts />}></Route>
        <Route path="/admindashboard" element={<AdminDashboard />}></Route>
        <Route path="/editproducts:productId" element={<EditProcuts />}></Route>
        <Route path="/Login" element={<Login />} />
        <Route path="/Register" element={<Register />} />
        <Route path="/cartpage" element={<Cartpage />} />
        <Route path="/aboutus" element={<AboutUS />} />
      </Routes>
    </Fragment>
  );
}

export default Navbar;
