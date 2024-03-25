import axios from "axios";

const URL_API = "https://courses-online-strapi.onrender.com/api/";
const API_TOKEN = process.env.NEXT_PUBLIC_STRAPI_API_TOKEN;

export default axios.create({
  baseURL: URL_API,
  headers: {
    Authorization: `Bearer ${API_TOKEN}`,
  },
});
