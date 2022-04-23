import useSWR from "swr";
import axios from "config/axios";

const urlPrefix = "/post/widget/list";
export const listUrl = `${urlPrefix}`;

export const WidgetSWR = () => {
  const fetcher = async (url: any) =>
    await axios.get(`${urlPrefix}`).then((res: any) => {
      console.log(res);
      return res.data.posts;
    });
  return useSWR(listUrl, fetcher);
};
console.log(listUrl);
export const WidgetAPI = {
  all: async () => {
    const { data, status } = await axios.get(listUrl);
    if (status != 200) {
      return [];
    }

    return data.posts;
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
