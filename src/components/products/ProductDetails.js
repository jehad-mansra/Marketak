import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import CardDetails from "../CardDetails/CardDetails";

function ProductDetails() {
  const [details, setDetails] = useState({});
  const params = useParams();
  useEffect(() => {
    axios
      .get(`http://localhost:5001/products/${params.productId}`)
      .then((res) => setDetails(res.data));
  }, []);

  return (
    <>
      <CardDetails
        title={details.title}
        description={details.description}
        price={details.price}
        image={details.image}
        id={details.id}
        category={details.category}
        rate={details.rating}
        item={details}
      />
    </>
  );
}
export default ProductDetails;
