import React from "react";

function Slide(props) {
  console.log("props", props);
  return (
    <>
      <div>
        <h1 data-testid="title">{props.slide.title}</h1>
        <p data-testid="text">{props.slide.text}</p>
      </div>
    </>
  );
}

export default Slide;
