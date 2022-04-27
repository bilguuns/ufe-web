import styled from "styled-components";

export const VideoStyle = styled.div`
  .more-button {
    text-align: right;
  }

  .hover-zoomin a {
    display: block;
    position: relative;
    overflow: hidden;
  }
  .hover-zoomin img {
    width: 100%;
    height: auto;
    -webkit-transition: all 0.5s ease-in-out;
    -moz-transition: all 0.5s ease-in-out;
    -o-transition: all 0.5s ease-in-out;
    -ms-transition: all 0.5s ease-in-out;
    transition: all 0.5s ease-in-out;
  }
  .hover-zoomin:hover img {
    -webkit-transform: scale(1.2);
    -moz-transform: scale(1.2);
    -o-transform: scale(1.2);
    -ms-transform: scale(1.2);
    transform: scale(1.2);
  }
  .small-image {
    float: right;
    width: 100px;
    height: 100px;
  }
  .header-container {
    margin-bottom: 30px;
  }
  .vertical-center {
    margin: 0;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`;
