import { Card } from "antd";

import { CardStyled } from "./card";

const CustomCard = ({ title, children }: any) => (
    <CardStyled>
        <Card title={title} className="card mb-3">
            {children}
        </Card>
    </CardStyled>
);

export default CustomCard;
