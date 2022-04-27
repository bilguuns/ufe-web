import useSWR from "swr";
import axios from "config/axios";

const urlPrefix = "/post/widget/list";
export const listUrl = `${urlPrefix}`;

export const EventSWR = () => {
  const fetcher = async (url: any) =>
    await axios.get(`${urlPrefix}`).then((res: any) => {
      console.log(res);
      return res.data.posts;
    });
  return useSWR(listUrl, fetcher);
};
console.log(listUrl);
export const EventAPI = {
  all: async () => {
    const { data, status } = await axios.get(listUrl);
    if (status != 200) {
      return [];
    }

    return data.posts;
  },
};
