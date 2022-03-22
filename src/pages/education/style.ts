import styled from "styled-components";

export const EducationStyle = styled.div`
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
a{color:#212529;
text-decoration:none;
padding-right:10px;
}
.navbar-nav{
    flex-direction:initial;
}
a.ex1:hover, a.ex1:active { text-decoration: underline;
}
.hero-text {
  position: absolute;
  top: 30%;
  left: 25%;
  transform: translate(-50%, -50%);
  color: white;
}
h1{

  font-size:60px;
}
p{
  font-size:20px;
}


`;
