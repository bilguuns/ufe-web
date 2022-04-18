import styled from "styled-components";

const CustomDownloadStyle = styled.div`
    .card {
        padding: 15px;
        margin: 10px 0px 10px 0px;
        background: #ffffff;
        border: 1px solid rgba(0, 0, 0, 0.09);
        box-sizing: border-box;
        box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.15);
        border-radius: 4px;
    }

    .icon {
        float: left;
    }

    .text {
        float: left;
        margin-left: 15px;
    }

    .downloadBtn {
        float: right;
    }

    .container {
        display: flex;
    }
`;

export default CustomDownloadStyle;
