import Link from "next/link";
import { Button } from "antd";
import { BookOutlined } from "@ant-design/icons";

const MoreButton = ({ editRoute }: any) => (
    <Link href={editRoute}>
        <a>
            <Button
                size="small"
                icon={<BookOutlined />}
                className="border-warning"
            >
                дэлгэрэнгүй
            </Button>
        </a>
    </Link>
);

export default MoreButton;
