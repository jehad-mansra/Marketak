import { useContext } from "react";
import "./CardDetails.css";
import { allData } from "../../context/Context";
function CardDetails({
  title,
  description,
  price,
  image,
  category,
  rate,
  item,
}) {
  const { isSignedIn, setCurrentCart, currentCart } = useContext(allData);
  return (
    <>
      {rate ? (
        <div className="CardDetails-container">
          <div className="CardDetails-title-desc-image">
            <h3 className="CardDetails-title">{title}</h3>
            <div className="CardDetails-desc-image">
              <div className="CardDetails-image">
                <img src={image} alt={title} />
              </div>
              <div className="CardDetails-description">
                <div> {description}</div>
              </div>
            </div>
          </div>
          <div className="CardDetails-price-btn">
            <div className="CardDetails-rating">
              <div className="CardDetails-rate">
                Rating: {rate.rate}{" "}
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 256 256"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M234.5 114.38L189.4 153.74L202.91 212.34C203.625 215.403 203.421 218.61 202.323 221.558C201.226 224.506 199.284 227.065 196.74 228.915C194.196 230.766 191.163 231.825 188.02 231.961C184.877 232.097 181.764 231.304 179.07 229.68L127.96 198.68L76.9599 229.68C74.2656 231.304 71.1525 232.097 68.0097 231.961C64.8669 231.825 61.8339 230.766 59.2899 228.915C56.7459 227.065 54.8038 224.506 53.7064 221.558C52.609 218.61 52.405 215.403 53.1199 212.34L66.6099 153.8L21.4999 114.38C19.114 112.322 17.3888 109.606 16.5405 106.571C15.6922 103.537 15.7587 100.32 16.7316 97.323C17.7046 94.3263 19.5406 91.6835 22.0095 89.7261C24.4784 87.7687 27.4703 86.5838 30.6099 86.32L90.0699 81.17L113.28 25.81C114.492 22.9051 116.536 20.4238 119.156 18.6785C121.775 16.9332 124.852 16.002 128 16.002C131.147 16.002 134.225 16.9332 136.844 18.6785C139.463 20.4238 141.508 22.9051 142.72 25.81L166 81.17L225.44 86.32C228.58 86.5838 231.571 87.7687 234.04 89.7261C236.509 91.6835 238.345 94.3263 239.318 97.323C240.291 100.32 240.358 103.537 239.509 106.571C238.661 109.606 236.936 112.322 234.55 114.38H234.5Z"
                    fill="#FFC700"
                  />
                </svg>
              </div>
              <div className="CardDetails-reviewers">
                Reviewers: {rate.count}
              </div>
            </div>
            <div className="CardDetails-title-category-2">
              <div className="CardDetails-category">
                {category} {">"}
              </div>
              <div className="CardDetails-title-2">{title}</div>
            </div>
            <h3 className="CardDetails-price">Price: {price}$</h3>
            {isSignedIn ? (
              <button
                className="addtocardd-btn"
                onClick={() => setCurrentCart([...currentCart, item])}
              >
                Add Cart
              </button>
            ) : null}
          </div>
        </div>
      ) : null}
    </>
  );
}
export default CardDetails;
