import { Alert } from "antd";

const EmptyAlert = (props: any) => (
    <Alert
        message={
            props.message ? props.message : `Уучлаарай, жагсаалт хоосон байна.`
        }
        type="warning"
        showIcon
    />
);

export default EmptyAlert;
