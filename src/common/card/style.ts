import styled from "styled-components";

export const CardStyle = styled.div`
/*--------------------------------------------------------------
# Sections General
--------------------------------------------------------------*/
section {
  padding: 60px 0;
  overflow: hidden;
}

.section-bg {
  background-color: #f9f9fa;
}

.section-title {
  text-align: center;
  padding: 30px 0;
  position: relative;
}
.section-title h2 {
  font-size: 32px;
  font-weight: 700;
  text-transform: uppercase;
  margin-bottom: 20px;
  padding-bottom: 0;
  color: #5f687b;
  position: relative;
  z-index: 2;
}
.section-title span {
  position: absolute;
  top: 30px;
  color: #f0f1f3;
  left: 0;
  right: 0;
  z-index: 1;
  font-weight: 700;
  font-size: 52px;
  text-transform: uppercase;
  line-height: 0;
}
.section-title p {
  margin-bottom: 0;
  position: relative;
  z-index: 2;
}
@media (max-width: 575px) {
  .section-title h2 {
    font-size: 28px;
    margin-bottom: 15px;
  }
  .section-title span {
    font-size: 38px;
  }
}

.team .member {
  text-align: center;
  margin-bottom: 20px;
  padding: 30px 20px;
  background: #F2F2F5;
}
.team .member .img {
  max-width: 100%;
  margin: 0 0 30px 0;
}
.team .member h4 {
  font-weight: 700;
  margin-bottom: 2px;
  font-size: 18px;
}
.team .member span {
  font-style: italic;
  display: block;
  font-size: 13px;
}
.team .member p {
  padding-top: 10px;
  font-size: 14px;
  font-style: italic;
  color: #aaaaaa;
}
.team .member .social {
  margin-top: 15px;
}
.team .member .social a {
  color: #919191;
  transition: 0.3s;
}
.team .member .social a:hover {
  color: #16df7e;
}
.team .member .social i {
  font-size: 18px;
  margin: 0 2px;
}
`;
