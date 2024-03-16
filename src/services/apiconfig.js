import axios from "axios";

const apiToken = process.env.REACT_APP_CARDTRADER_API_TOKEN;

const axiosInstance = axios.create({
  baseURL: "https://api.cardtrader.com/api/v2",
  headers: {
    Authorization: `Bearer ${apiToken}`,
    "Content-type": "application/json",
  },
});

export default axiosInstance;
