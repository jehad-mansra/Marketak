import { useEffect, useState } from "react";
import "./AddProducts.css";
import axios from "axios";
import { useNavigate } from "react-router";

function AddProducts() {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState(0);
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [categories, setCategories] = useState([]);
  const navigate = useNavigate();

  const createProduct = async () =>
    await axios.post("http://localhost:5001/products", {
      title,
      price,
      description,
      category,
    });

  const handleSubmit = (event) => {
    event.preventDefault();
    if (title !== "" && price !== "" && description !== "" && category !== "") {
      createProduct();
      navigate("/");
    }
  };
  useEffect(() => {
    axios
      .get("http://localhost:5001/categories")
      .then((res) => setCategories(res.data));
  }, [categories]);

  return (
    <div>
      <form onSubmit={handleSubmit} className="form">
        <h5>Add Product</h5>
        <label htmlFor="productTitle">Title</label>
        <input
          type="text"
          id="productTitle"
          onChange={(e) => setTitle(e.target.value)}
        />

        <label htmlFor="productPrice">Price</label>
        <input
          type="number"
          id="productPrice"
          onChange={(e) => setPrice(e.target.value)}
        />
        <label htmlFor="productDescription">description</label>
        <input
          type="text"
          id="productDescription"
          onChange={(e) => setDescription(e.target.value)}
        />
        <label htmlFor="productCategory">category</label>
        <select
          className="add-product-select"
          onChange={(e) => setCategory(e.target.value)}
        >
          {categories.map((item) => {
            return (
              <option key={item} value={item}>
                {item}
              </option>
            );
          })}
        </select>

        <button className="add-product">Add Product</button>
      </form>
    </div>
  );
}

export default AddProducts;
