import axios from "axios";

const axiosInstance = axios.create({  baseURL: "http://taskdutyserver.netlify.app" });

export default axiosInstance;