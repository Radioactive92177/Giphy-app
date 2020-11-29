import React from "react";
import Gif from "./Gif";

const Gifs = ({ gifData }) => {
  const renderedGifs = gifData.map((gif) => {
    return (
      <Gif key={gif.id} title={gif.title} gif={gif.images.fixed_height.url} />
    );
  });
  return <>{renderedGifs}</>;
};

export default Gifs;
