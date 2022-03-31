// import Education from "../entity/education.model";
import http from "config/axios";

const EducationDataService = {
  getAll: () => http.get("/menu"),
};

export default EducationDataService;
