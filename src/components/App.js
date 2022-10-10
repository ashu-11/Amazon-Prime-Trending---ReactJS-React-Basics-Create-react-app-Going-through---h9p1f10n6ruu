import React, { Component, useState } from "react";
import Slide from "./Slide";
import "../styles/App.css";

const App = (props) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isLastIndex, setisLastIndex] = useState(false);

  const showNextSlide = () => {
    if (currentIndex === props.slides.length - 2) {
      setisLastIndex(true);
    }
    setCurrentIndex(currentIndex + 1);
  };

  return (
    <>
      <div>
        {props.slides.map((slide, i) => {
          console.log("value of i", i);
          return i === currentIndex ? <Slide slide={slide} /> : null;
        })}
      </div>
      <div>
        <button
          data-testid="button-next"
          onClick={showNextSlide}
          disabled={isLastIndex}
        >
          {" "}
          Next
        </button>
        <button data-testid="button-prev">Prev</button>
        <button data-testid="button-restart">Restart</button>
      </div>
    </>
  );
};

export default App;
