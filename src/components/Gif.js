import React from "react";
import "../assets/main.css";

const Gif = ({ gif, title }) => {
  return (
    <div className="gif">
      <a href={`${gif}`}>
        <img src={`${gif}`} alt={`${title}`} height="auto" />
      </a>
    </div>
  );
};

export default Gif;
