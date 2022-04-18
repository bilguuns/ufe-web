import { useState, useEffect } from "react";
import { Spin, Checkbox } from "antd";
import { mutate } from "swr";

const ToggleChecked = ({ id, checked, api, apiUrl, mutateUrl }: any) => {
    const [isChecked, setIsChecked] = useState(checked);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setIsChecked(checked);
    }, [checked]);

    const onToggleChecked = async () => {
        setLoading(true);

        try {
            await api.toggleChecked(id, apiUrl);
            mutateUrl && (await mutate(mutateUrl));

            setIsChecked(!isChecked);
        } finally {
            setLoading(false);
        }
    };

    return (
        <Spin spinning={loading}>
            <Checkbox checked={isChecked} onChange={onToggleChecked} />
        </Spin>
    );
};

export default ToggleChecked;
