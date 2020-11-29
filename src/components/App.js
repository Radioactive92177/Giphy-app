import React, { useState, useEffect } from "react";
import Gifs from "./Gifs";
import Loading from "./Loading";
import "../assets/main.css";
import giphys from "../apis/giphys";

const App = () => {
  const [gifData, setGifData] = useState([]); //* to store GIFs
  const [term, setTerm] = useState(""); //* to store the search term
  const INITIAL_RENDER_TERM = "random"; //* to show at initial screen

  //? Fetching GIFs
  const searchSubmit = async (term) => {
    if (term === "") {
      term = INITIAL_RENDER_TERM;
    }
    const { data } = await giphys.get("/search", {
      params: {
        q: term,
      },
    });
    setGifData(data.data);
  };

  //? For GIFs at initial render
  useEffect(() => {
    searchSubmit(INITIAL_RENDER_TERM);
  }, []);

  //? For rendering GIFs with loading condition
  const renderGiphys = () => {
    return <Gifs gifData={gifData} />;
  };

  return (
    <>
      <form
        className="form"
        onSubmit={(e) => {
          e.preventDefault();
          searchSubmit(term);
        }}
      >
        <input
          type="search"
          placeholder="Search for any GIF"
          value={term}
          onChange={(e) => setTerm(e.target.value)}
        />
        <button type="submit">
          <i className="fa fa-search"></i>
        </button>
      </form>
      <div className="heading">
        <p>
          Giphys <i className="fa fa-bolt" aria-hidden="true"></i>{" "}
        </p>
      </div>

      <div className="gifs">
        {gifData === [] ? <Loading /> : renderGiphys()}
      </div>
    </>
  );
};

export default App;
