import React, { Fragment, useContext, useState, useEffect } from "react";
import "./imageslider.css";
import { allData } from "../../context/Context";

function ImageSlider() {
  const { imageSliderData } = useContext(allData);
  const dots = [1, 2, 3, 4];
  const [imgIndex, setImgIndex] = useState(0);
  const displayImages = imageSliderData.map((item) => {
    return (
      <Fragment key={item.id}>
        <div className="product-details">
          <div className="product-title">{item.title}</div>
          <div className="product-description">{item.description}</div>
        </div>
        <img src={item.image} alt="..." className="image-slider-img" />
      </Fragment>
    );
  });
  useEffect(() => {
    const slideInterval = setInterval(() => {
      setImgIndex((prevIndex) => (prevIndex + 1) % imageSliderData.length);
    }, 3000);
    return () => {
      clearInterval(slideInterval);
    };
  }, [imageSliderData.length]);
  const displayDots = dots.map((item, i) => {
    return (
      <div
        key={item}
        className={i === imgIndex ? "dot active" : "dot"}
        onClick={() => setImgIndex(i)}
      ></div>
    );
  });

  return (
    <div className="image-slider">
      {displayImages[imgIndex]}
      <div className="dots-container">{displayDots}</div>
    </div>
  );
}

export default ImageSlider;
