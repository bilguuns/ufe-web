import axios from "axios";

import catchAxiosError from "./catch-axios-error";

const fetcher = axios.create({
  baseURL: "https://api.ufe.edu.mn/_api",
  headers: {
    Accept: "application/json",
    "Content-type": "application/json",
  },
});

fetcher.interceptors.response.use(
  (response) => response,
  (error) => catchAxiosError(error)
);

export default fetcher;
