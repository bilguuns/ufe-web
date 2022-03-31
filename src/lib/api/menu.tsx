import useSWR from "swr";
import axios from "config/axios";

const urlPrefix = "/menu";
export const listUrl = `${urlPrefix}`;

export const MenuSWR = () => {
    const fetcher = async (url: any) =>
        await axios.get(url).then((res: any) => {
            console.log(res);
            return res.data.menus;
        });
    return useSWR(listUrl, fetcher);
};

export const MenuAPI = {
    list: async (values: any) => {
        const { data, status } = await axios.post(
            listUrl,
            values
        );
        if (status != 200) {
            return [];
        }
        return JSON.parse(data.JsonData);
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
