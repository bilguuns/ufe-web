import styled from "styled-components";

export const FooterStyle = styled.div`
  ul {
    list-style: none;
    padding-left: 0px;
    color: #c7c9d9;
    // margin-bottom: 0;
    // text-align:left;
  }
  .m {
    margin-top: 30px;
  }
  .m1 {
    margin-top: 60px;
  }
  .m2 {
    margin-top: 60px;
  }
  footer {
    position: relative;
    bottom: 0;
    left: 0;
    right: 0;
    background: #0132a6;
    height: auto;
    width: 100vw;
    padding-top: 40px;
    max-width: 100%;
    color: #fff;
  }
  .footer-content {
    display: flex;
    flex-wrap: wrap;
    // align-items: center;
    // justify-content: center;
    // flex-direction: column;
    // text-align: center;
  }
  .footer-content h3 {
    font-size: 2.1rem;
    font-weight: 500;
    text-transform: capitalize;
    line-height: 3rem;
  }
  .footer-content p {
    max-width: 500px;
    line-height: 28px;
    font-size: 14px;
    color: #cacdd2;
  }
  .footer-p {
    text-align: left;
  }
  .img {
  }

  .icon {
    display: inline-block;
    margin-right: 10px;
  }
`;
