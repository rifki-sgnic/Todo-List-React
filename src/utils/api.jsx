import axios from "axios";

const baseURL =
  import.meta.env.MODE === "development"
    ? "http://localhost:9000"
    : import.meta.env.VITE_API_URL;

const api = axios.create({
  baseURL: baseURL,
});

export default api;
