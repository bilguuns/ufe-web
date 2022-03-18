import styled from "styled-components";

export const PodcastCardStyle = styled.div`
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

/////////////////////
.services .icon-box {
  text-align: center;
  border: 1px solid #fff;
  transition: all ease-in-out 0.3s;
  background: #fff;
}
.services .icon-box .icon {
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
  transition: ease-in-out 0.3s;
}
.services .icon-box .icon i {
  color: #16df7e;
  font-size: 36px;
  transition: 0.3s;
}
.services .icon-box h4 {
  font-weight: 700;
  margin-bottom: 15px;
  font-size: 24px;
}
.services .icon-box h4 a {
  color: #5f687b;
  transition: ease-in-out 0.3s;
}
.services .icon-box p {
  line-height: 24px;
  font-size: 14px;
  margin-bottom: 0;
}
.services .icon-box:hover {
  border-color: #eaecef;
}
.services .icon-box:hover h4 a {
  color: #16df7e;
}
/*--------------------------------------------------------------
# Featured Services
--------------------------------------------------------------*/
.featured-services {
  padding: 0;
}
.featured-services .icon-box {
  padding: 20px;
  color: #5f687b;
  background: #f9f9fa;
  border-radius: 4px;
  border: 1px solid #f9f9fa;
  transition: 0.3s;
  height: 100%;
}
.featured-services .icon {
  margin: 0 0 15px 0;
}
.featured-services .icon i {
  color: #16df7e;
  font-size: 36px;
}
.featured-services .title {
  font-weight: 600;
  margin-bottom: 15px;
  font-size: 18px;
}
.featured-services .title a {
  color: #5f687b;
  transition: 0.3s;
}
.featured-services .icon-box:hover {
  border-color: #eaecef;
}
.featured-services .icon-box:hover .title a {
  color: #16df7e;
}
.featured-services .description {
  line-height: 24px;
  font-size: 14px;
}

.more-button{
text-align:right;


}

  .header-container {
      margin-bottom:30px;
    }

`;