import "./ImageSlider.css";
import React, { useEffect, useState } from "react";
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from "react-icons/fa";
import { hideImageSlider } from "../../../utils/utils";

function ImageSlider(props) {
  const slides = props.slides;
  const [current, setCurrent] = useState(0);
  const length = slides.length;

  function isClickedOutsideSlider(e) {
    const target = e.target;
    const clickedOnSlide =
      target.matches(".image") ||
      target.matches(".right-arrow") ||
      target.matches(".left-arrow") ||
      target.matches("path");
    return !clickedOnSlide;
  }

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  useEffect(() => {
    document
      .getElementById("imageSlider")
      .addEventListener("click", (event) => {
        if (isClickedOutsideSlider(event)) {
          hideImageSlider();
          setCurrent(0);
        }
      });
  }, []);

  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }

  return (
    <div className="slider" id="imageSlider">
      <div className="slides">
        <FaArrowAltCircleLeft className="left-arrow" onClick={prevSlide} />
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
              <div className="sliderOverlayBlock" key={slide.imageAlt}>
                {slide.imageAlt}
              </div>
              ;
            </div>
          );
        })}
        <FaArrowAltCircleRight className="right-arrow" onClick={nextSlide} />
      </div>
      {/* <div className="backButton">Retour</div> */}
    </div>
  );
}

export default ImageSlider;
