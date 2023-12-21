import axios from "axios";

export const http = axios.create({
  baseURL: "http://192.168.1.219:8000/api/version_0/",
});
