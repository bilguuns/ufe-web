import useSWR from "swr";
import axios from "config/axios";

const urlPrefix = "/employee";
export const listUrl = `${urlPrefix}`;

export const EmployeeSWR = (employeeType: string) => {
  const fetcher = async (url: any) =>
    await axios.get(`${urlPrefix}/${employeeType}`).then((res: any) => {
      console.log(res);
      return res.data.employee;
    });
  return useSWR(listUrl, fetcher);
};
console.log(listUrl);
export const EmployeeAPI = {
  all: async (employeeType: string, id: any) => {
    const { data, status } = await axios.get(
      `${urlPrefix}/${employeeType}/${id}`
    );
    if (status != 200) {
      return [];
    }
    return data.employee;
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
