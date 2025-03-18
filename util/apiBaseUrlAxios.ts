import axios from "axios";

const apiBaseUrl = axios.create({
  baseURL: "http://localhost:3000",
});
export default apiBaseUrl;
