import { Space } from "antd";

import MoreButton from "./more-button";

const MoreAction = ({ editRoute, api, id, apiUrl }: any) => (
    <Space size="middle">
        {editRoute && <MoreButton editRoute={editRoute} />}
    </Space>
);

export default MoreAction;
