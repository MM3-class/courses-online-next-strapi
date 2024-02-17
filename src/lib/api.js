import axios from "axios";

const URL_API = "http://localhost:1337/api/";
const API_TOKEN = process.env.NEXT_PUBLIC_STRAPI_API_TOKEN;

export default axios.create({
  baseURL: URL_API,
  headers: {
    Authorization: `Bearer ${API_TOKEN}`,
  },
});
