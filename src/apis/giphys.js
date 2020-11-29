import axios from "axios";

export default axios.create({
  baseURL: "https://api.giphy.com/v1/gifs",
  params: {
    api_key: "K2FCdWBxSOePBye1tBcbmNf3VidnkaZZ",
    limit: 500,
    rating: "r",
  },
});
