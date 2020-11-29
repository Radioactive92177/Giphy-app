import React from "react";

const Gif = ({ gif, title }) => {
  return (
    <>
      <a href={`${gif}`}>
        <img src={`${gif}`} alt={`${title}`} height="auto" />
      </a>
    </>
  );
};

export default Gif;
