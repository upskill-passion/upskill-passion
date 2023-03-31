import axios from "axios";
const BASE_URL = "http://localhost:3000/api/v1";

export default axios.create({
  baseURL: BASE_URL,
});

export const axiosPrivate = axios.create({
  baseURL: BASE_URL,
  //interceptors in axios
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true,
});
