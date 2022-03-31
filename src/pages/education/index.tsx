import { useState, useEffect } from "react";
import axios from "config/axios";

import educationService from "pages/api/education/service/education.service";

const Education = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);

    const fetchDatas = async () => {
      const response: any = await educationService.getAll();

      setData(response?.data?.menus);

      setLoading(false);
    };

    fetchDatas();
  }, []);

  console.log(data);
  return (
    <>
      {data?.map((element: any, index: any) => (
        <div key={index} className="asdasdasddasd">
          {element.id} {element.contentType}
        </div>
      ))}
    </>
  );
};

export default Education;
