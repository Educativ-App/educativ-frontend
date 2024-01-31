import axios from "axios";

const axiosClient = axios.create({
  baseURL: "https://educativ.onrender.com/api/v1/",
});

export default axiosClient;
