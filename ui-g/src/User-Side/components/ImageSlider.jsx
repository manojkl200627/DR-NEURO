import React, { useState, useEffect } from "react";
import "./ImageSlider.css";
import d1 from "../../assets/DDR1.png"
import d2 from "../../assets/DDDR2.png"
import d3 from "../../assets/DDR3.png"
const ImageSlider = () => {
  const images = [
    d1,d2,d3
  ];
  

  const interval = 4000; 

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, interval);

    return () => clearInterval(timer);
  }, [images.length, interval]);

  const goToNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const goToPrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="slider-container">
      <button className="arrow left" onClick={goToPrev}>❮</button>

      <img src={images[currentIndex]} alt="slide" className="slide-image" />

      <button className="arrow right" onClick={goToNext}>❯</button>

      <div className="dots">
        {images.map((_, index) => (
          <span
            key={index}
            className={`dot ${index === currentIndex ? "active" : ""}`}
            onClick={() => setCurrentIndex(index)}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default ImageSlider;
