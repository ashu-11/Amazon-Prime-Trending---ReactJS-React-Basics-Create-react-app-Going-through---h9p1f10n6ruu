import React, { Component, useState } from "react";
import Slide from "./Slide";
import "../styles/App.css";

const App = (props) => {
  const [cureentIndex, setCurrentIndex] = useState(0);

  return (
    <>
      <div>
        {props.slides.map((slide, i) => {
          console.log("value of i", i);
          return i === cureentIndex ? <Slide slide={slide} /> : null;
        })}
      </div>
      <div>
        <button data-testid="button-next"> next</button>
        <button data-testid="button-prev">prev</button>
        <button></button>
      </div>
    </>
  );
};

export default App;
