import axios from "axios";

const api = axios.create({
  baseURL: "https://api.themoviedb.org/3/",
  params: {
    api_key: "65c052a9c310a9984a5d50f543775b90",
    language: "en-US"
  }
});

api.get("tv/popular");

export default api;
