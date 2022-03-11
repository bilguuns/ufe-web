import styled from "styled-components";

export const FooterStyle = styled.div`
ul {
    list-style: none;
    padding-left: 0px;
    margin-bottom: 0;
    text-align:left;
}
footer{
    position: relative;
    bottom: 0;
    left: 0;
    right: 0;
    background: #0132A6;
    height: auto;
    width: 100vw;
    padding-top: 40px;
    color: #fff;
}
.footer-content{
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    text-align: center;
}
.footer-content h3{
    font-size: 2.1rem;
    font-weight: 500;
    text-transform: capitalize;
    line-height: 3rem;
}
.footer-content p{
    max-width: 500px;
    margin: 10px auto;
    line-height: 28px;
    font-size: 14px;
    color: #cacdd2;
}
.footer-p{


    text-align:left;
}
.img{
    float:left;
}


`;