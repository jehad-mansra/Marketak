import React, { useContext, useEffect, useState } from "react";
import { allData } from "../../context/Context";
import "./product.css";
import axios from "axios";
import { ProductsCard } from "../Index";

function Products() {
  const [categories, setCategories] = useState([]);
  const { products } = useContext(allData);
  const [currentPage, setCurrentPage] = useState(1);
  const [currentCategory, setCurrentCategory] = useState("");
  const recordsPage = 6;
  const lastIndex = recordsPage * currentPage;
  const firstIndex = lastIndex - recordsPage;
  const [searchedProduct, setSearchedProduct] = useState("");
  const filteredProducts = products
    .filter((item) => item.category.includes(currentCategory))
    .filter((item) =>
      item.title.toLowerCase().includes(searchedProduct.toLowerCase())
    );
  const records = filteredProducts.slice(firstIndex, lastIndex);
  const npage = Math.ceil(filteredProducts.length / recordsPage);
  const numbers = [...Array(npage + 1).keys()].slice(1);
  console.log(records);
  useEffect(() => {
    axios
      .get(`http://localhost:5001/categories`)
      .then((res) => setCategories(res.data));
  }, []);

  function nextPage() {
    if (currentPage !== npage) setCurrentPage(currentPage + 1);
  }
  function prePage() {
    if (currentPage !== 1) setCurrentPage(currentPage - 1);
  }
  function changPage(id) {
    setCurrentPage(id);
  }

  return (
    <div className="products-container">
      <div className="products-main">
        <div className="product-right">
          <input
            type="search"
            id="product-search"
            placeholder="Search for a product"
            value={searchedProduct}
            onChange={(e) => setSearchedProduct(e.target.value)}
          />
          <button
            className="products-btn"
            onClick={(e) => {
              setCurrentCategory("");
              setCurrentPage(1);
            }}
          >
            {" "}
            All Products
          </button>
          {categories.map((cat) => {
            return (
              <button
                key={cat}
                id={cat}
                className="products-btn"
                onClick={(e) => {
                  setCurrentCategory(e.target.id);
                  setCurrentPage(1);
                }}
              >
                {cat}
              </button>
            );
          })}
        </div>
        <div className="product-leftside">
          <div className="product-items">
            {records.map((item) => {
              return (
                <>
                  <div className="product-card">
                    <ProductsCard
                      item={item}
                      key={item.id}
                      id={item.id}
                      title={item.title}
                      description={item.description}
                      price={item.price}
                      image={item.image}
                    />
                  </div>
                </>
              );
            })}
          </div>
          <ul className="product-pagination">
            <li className="page-item prev-btn">
              {
                <a className="page-link" onClick={prePage}>
                  Prev
                </a>
              }
            </li>
            {numbers.map((n, i) => {
              return (
                <li className="page-item" key={i}>
                  <a
                    className={`page-item ${currentPage === n ? "active" : ""}`}
                    onClick={() => changPage(n)}
                  >
                    {n}
                  </a>
                </li>
              );
            })}
            <li className="page-item next-btn">
              {
                <a className="page-link" onClick={nextPage}>
                  Next
                </a>
              }
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Products;
