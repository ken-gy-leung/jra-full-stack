import React from "react";
import "../styles/DemoCard1.css";

const DemoCard1 = ({ topic, outline }) => {
  return (
    <div>
      <div>{topic}</div>
      <div>{outline}</div>
      <div>LEARN MORE</div>
    </div>
  );
};

export default DemoCard1;
