import React, { useState, useRef, useEffect } from "react";
import slide1 from "../../uploads/slide1.jpg";
import slide2 from "../../uploads/slide2.jpg";
import slide3 from "../../uploads/slide3.jpg";

function Slider() {
  const valueImg = [slide1, slide2, slide3];
  const [index, setIndex] = useState(0);
  const timeoutRef = useRef(null);

  const resetTimeout = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  };

  useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(
      () =>
        setIndex((prevIndex) =>
          prevIndex === valueImg.length - 1 ? 0 : prevIndex + 1
        ),
      2500
    );
    return () => {
      resetTimeout();
    };
  }, [index, valueImg.length]);

  return (
    <div className="hidden_overflow">
      <div
        className="product1_main-fade"
        style={{
          transform: `translate3d(${-index * 100}%, 0, 0)`,
          transition: ".5s",
        }}
      >
        {valueImg.map((item, index) => {
          return (
            <img key={index} src={item} id="product1_main-img" alt="img" />
          );
        })}
      </div>
      <div className="slideshowDots">
        {valueImg.map((_, idx) => (
          <div
            key={idx}
            className={`slideshowDot${index === idx ? " active" : ""}`}
            onClick={() => {
              setIndex(idx);
            }}
          ></div>
        ))}
      </div>
    </div>
  );
}

export default Slider;
