import styled from "styled-components";

export const NewsCardStyle = styled.div`

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
  font-size: 60px;
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
.news .news-img {
  position: relative;
  margin: 60px 0 0 60px;
}
.news h3 {
  color: var(--color-secondary);
  font-family: var(--font-secondary);
  font-weight: 300;
  font-size: 32px;
  margin-bottom: 20px;
}
.news-description{
  padding-top:70px;
}
.news p{
  font-weight: 400;
  font-size: 16px;
  margin-top: 20px;
  font-style: Montserrat;

}
  .header-container {
      margin-bottom:30px;
    }

`;
