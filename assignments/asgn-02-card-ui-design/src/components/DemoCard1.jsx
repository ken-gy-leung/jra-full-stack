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
      <div>{topic}</div>
      <div>{outline}</div>
      <div>LEARN MORE</div>
    </div>
  );
};

export default DemoCard1;
