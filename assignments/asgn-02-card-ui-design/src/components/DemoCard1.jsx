import React from "react";

const DemoCard1 = ({ topic, outline }) => {
  const bgImgName = topic
    .trim()
    .split(/\s+/)
    .map((sub) => sub.toLowerCase())
    .join("-");

  return (
    <div
      className="demoCard1"
      style={{
        backgroundImage: `url(/src/assets/images/card-bg-${bgImgName}.jpg)`,
      }}
    >
      <div className="card1-topic">{topic}</div>
      <div className="card1-outline">{outline}</div>
      <div className="card1-button-more">LEARN MORE</div>
    </div>
  );
};

export default DemoCard1;
