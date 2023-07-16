import { Fragment, useContext, useEffect } from "react";
import { allData } from "../../context/Context";
import axios from "axios";
import "./productsBoard.css";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";
import EditProcuts from "./EditProcuts";

function ProductsBoard() {
  const { products, fetchProducts } = useContext(allData);
  useEffect(() => {
    getAllProducts();
  }, []);

  const getAllProducts = () => {
    fetchProducts();
  };

  const deleteProduct = (product) => {
    Swal.fire({
      title: `Are You Sure To Delete ${product.title} ?`,
      showCancelButton: true,
    }).then((data) => {
      if (data.isConfirmed) {
        axios
          .delete(`http://localhost:5001/products/${product.id}`)
          .then(() => {
            getAllProducts();
          });
      }
    });
  };

  const editProduct = (product) => {};

  return (
    <>
      <h1>Products Page</h1>
      <Link to="/addproduct" className="dash-add-product">
        Add Product
      </Link>
      <div className="dash-rightside">
        <table className="product-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Title</th>
              <th>Price</th>
              <th>Operation</th>
            </tr>
          </thead>
          <tbody>
            <Fragment>
              {products.map((product) => {
                return (
                  <tr key={product.id}>
                    <td>{product.id}</td>
                    <td>{product.title}</td>
                    <td>{product.price}</td>
                    <td>
                      <button
                        className="del-btn"
                        onClick={() => deleteProduct(product)}
                      >
                        Delete
                      </button>
                      <button
                        className="edit-btn"
                        ocClick={() => editProduct(product)}
                      >
                        <Link
                          to={{
                            pathname: "/editproducts:productId",
                            state: { product: product },
                          }}
                        >
                          Edit
                        </Link>
                      </button>
                    </td>
                  </tr>
                );
              })}
            </Fragment>
          </tbody>
        </table>
      </div>
    </>
  );
}

export default ProductsBoard;
