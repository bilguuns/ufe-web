import { useState } from "react";
import { mutate } from "swr";
import { Button, message, Popconfirm } from "antd";
import {
    CloseOutlined,
    DeleteOutlined,
    QuestionCircleOutlined,
} from "@ant-design/icons";

const DeleteButton = ({ api, id, apiUrl, onlyIcon }: any) => {
    const [loading, setLoading] = useState(false);

    const handleDelete = async () => {
        setLoading(true);

        try {
            await api.delete(id);
            await mutate(apiUrl);

            message.success("Амжилттай.");
            setLoading(false);
        } catch (error) {
            setLoading(false);
        }
    };

    return (
        <Popconfirm
            title="Та устгахдаа итгэлтэй байна уу?"
            onConfirm={handleDelete}
            okText="Тийм"
            cancelText="Үгүй"
            icon={<QuestionCircleOutlined />}
        >
            {onlyIcon ? (
                <Button
                    style={{
                        position: "absolute",
                        top: "0px",
                        right: "0px",
                        color: "#fff",
                    }}
                    type="link"
                    size="small"
                    icon={<CloseOutlined />}
                    loading={loading}
                ></Button>
            ) : (
                <Button
                    size="small"
                    danger
                    icon={<DeleteOutlined />}
                    loading={loading}
                >
                    Устгах
                </Button>
            )}
        </Popconfirm>
    );
};

export default DeleteButton;
