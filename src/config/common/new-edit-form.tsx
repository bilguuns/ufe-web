import Router from "next/router";
import { useState, useContext } from "react";
import { Form, Button, message } from "antd";
import { mutate } from "swr";

import { ModalContext } from "lib/context/modal";

const NewEditForm = ({
    children,
    api,
    entity,
    backRoute,
    apiUrl,
    additionalValues,
}: any) => {
    const { handleModal }: any = useContext(ModalContext);
    const [loading, setLoading] = useState(false);
    const [form] = Form.useForm();

    const onFinish = async (values: any) => {
        setLoading(true);

        try {
            if (additionalValues) {
                values = Object.assign(values, additionalValues);
            }

            if (entity) {
                await api?.update(entity.id, values);
            } else {
                await api?.new(values);
            }

            apiUrl && (await mutate(apiUrl));
            backRoute && (await Router.push(backRoute));

            handleModal();
            message.success("Амжилттай.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <Form
            initialValues={entity}
            layout="vertical"
            form={form}
            onFinish={onFinish}
        >
            {children}

            <Button
                type="primary"
                htmlType="submit"
                block
                className="mb-3"
                loading={loading}
            >
                Хадгалах
            </Button>
        </Form>
    );
};

export default NewEditForm;
