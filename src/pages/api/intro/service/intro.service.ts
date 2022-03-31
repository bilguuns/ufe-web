import http from "config/axios";

const IntroDataService = {
  getAll: () => http.get("/intro"),
};

export default IntroDataService;
