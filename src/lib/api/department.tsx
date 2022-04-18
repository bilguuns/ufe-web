import useSWR from "swr";
import axios from "config/axios";

const urlPrefix = "/department";
export const listUrl = `${urlPrefix}`;

export const DepartmentSWR = () => {
  const fetcher = async (url: any) =>
    await axios.get(`${urlPrefix}`).then((res: any) => {
      console.log(res);
      return res.data.department;
    });
  return useSWR(listUrl, fetcher);
};
console.log(listUrl);
export const DepartmentAPI = {
  list: async () => {
    const { data, status } = await axios.get(`${urlPrefix}`);
    if (status != 200) {
      return [];
    }
    return data.department;
  },

  new: async (values: any) => {
    const { data, status } = await axios.post(`${urlPrefix}/New`, values);

    return {
      data,
      status,
    };
  },

  update: async (id: any, values: any) => {
    const { data, status } = await axios.put(`${urlPrefix}/${id}`, values);

    return {
      data,
      status,
    };
  },

  delete: async (id: any) => {
    const { data, status } = await axios.post(`${urlPrefix}/Delete`, {
      RoomTypeId: id,
    });

    return {
      data,
      status,
    };
  },
};
