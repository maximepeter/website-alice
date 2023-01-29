import "./ImageSlider.css";
import React, { useState } from "react";
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from "react-icons/fa";
import { hideImageSlider } from "../../../utils";

function ImageSlider(props) {
  const slides = props.slides;
  const [current, setCurrent] = useState(0);
  const length = slides.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }

  return (
    <div className="slider" id="imageSlider">
      <div className="slides">
        <FaArrowAltCircleLeft className="left-arrow" onClick={prevSlide} />
        <FaArrowAltCircleRight className="right-arrow" onClick={nextSlide} />
        {slides.map((slide, index) => {
          return (
            <div
              className={index === current ? "slide active" : "slide"}
              key={index}
            >
              {index === current && (
                <img
                  src={slide.imageUrl}
                  alt={slide.imageAlt}
                  className="image"
                  loading="lazy"
                />
              )}
            </div>
          );
        })}
      </div>
      <div className="backButton" onClick={() => hideImageSlider()}>
        Retour
      </div>
    </div>
  );
}

export default ImageSlider;
