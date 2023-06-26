import React, { useState } from "react";
import "./Slide.css";

function Slide({ pictures, title }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPreviousSlide = () => {
    setCurrentIndex(currentIndex === 0 ? pictures.length - 1 : currentIndex - 1);
  };

  const goToNextSlide = () => {
    setCurrentIndex(currentIndex === pictures.length - 1 ? 0 : currentIndex + 1);
  };

  return (
    <div className="carrousselSlide">
      {pictures.length > 0 && (
        <>
          <button
            aria-label="Image précédente"
            className="buttonSlide arrowLeft"
            onClick={goToPreviousSlide}
          >
            <i className="arrowSlide fa-solid fa-chevron-left"></i>
          </button>
          <img
            className="slideImg"
            src={pictures[currentIndex]}
            alt={title}
            title={title}
          />
          <span className="counterSlide">
            {currentIndex + 1}/{pictures.length}
          </span>
          <button
            aria-label="Image suivante"
            className="buttonSlide arrowRight"
            onClick={goToNextSlide}
          >
            <i className="arrowSlide fa-solid fa-chevron-right"></i>
          </button>
        </>
      )}
    </div>
  );
}

export default Slide

