import { Space } from "antd";

import EditButton from "./edit-button";
import DeleteButton from "./delete-button";

const EditDeleteAction = ({ editRoute, api, id, apiUrl }: any) => (
    <Space size="middle">
        {editRoute && <EditButton editRoute={editRoute} />}
        {api && <DeleteButton api={api} id={id} apiUrl={apiUrl} />}
    </Space>
);

export default EditDeleteAction;
