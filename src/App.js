import "./App.css";
import { useContext, useEffect } from "react";
import { Login, Register } from "./components/Index";
import { Navbar, Home, Footer } from "./components/Index";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { allData } from "./context/Context";

function App() {
  const { products, fetchImageSliderData, fetchProducts, fetchUsers, users } =
    useContext(allData);
  useEffect(() => {
    fetchImageSliderData();
  }, []);
  useEffect(() => {
    fetchProducts();
  }, []);
  useEffect(() => {
    fetchUsers();
  }, []);
  return (
    <>
      <div className="big-container">
        <Navbar />
      </div>
      <Footer />
    </>
  );
}

export default App;
