import axios from "axios";

const axiosUrlBase = axios.create({
  baseURL: process.env.URL_BASE_AXIOS,
});
export default axiosUrlBase;
