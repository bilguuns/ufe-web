import Link from "next/link";
import { Button } from "antd";
import { EditOutlined } from "@ant-design/icons";

const EditButton = ({ editRoute }: any) => (
    <Link href={editRoute}>
        <a>
            <Button
                size="small"
                icon={<EditOutlined />}
                className="border-warning"
            >
                Засах
            </Button>
        </a>
    </Link>
);

export default EditButton;
