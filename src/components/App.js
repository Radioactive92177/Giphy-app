import React, { useState, useEffect } from "react";
import axios from "axios";
import Gifs from "./Gifs";

const App = () => {
  const [gifData, setGifData] = useState([]);
  const [term, setTerm] = useState("");

  const searchSubmit = async (term) => {
    const { data } = await axios.get("https://api.giphy.com/v1/gifs/search", {
      params: {
        api_key: "K2FCdWBxSOePBye1tBcbmNf3VidnkaZZ",
        q: term,
        limit: 500,
      },
    });
    setGifData(data.data);
  };

  console.log(gifData);
  useEffect(() => {
    searchSubmit("random");
  }, []);

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
          <i className="fa fa-search">Submit</i>
        </button>
      </form>
      <Gifs gifData={gifData} />
    </>
  );
};

export default App;
