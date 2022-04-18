import { BookOutlined, DownloadOutlined } from "@ant-design/icons";
import { Typography } from "antd";

import CustomDownloadStyle from "./custom-download";

const { Text } = Typography;

const CustomDownload = (props: any) => (
    <CustomDownloadStyle>
        <a href={props.url} target="_blank">
            <div className="card mb-3">
                <div className="icon">
                    <BookOutlined />
                </div>

                <div className="text">
                    <Text strong>{props.fileName}</Text>
                </div>

                <div className="downloadBtn">
                    <DownloadOutlined className="btn" />
                </div>
            </div>
        </a>
    </CustomDownloadStyle>
);

export default CustomDownload;
