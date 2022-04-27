import styled from "styled-components";

export const VideoStyle = styled.div`
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
  .news-description {
    padding-top: 70px;
  }
  .small-news p {
    font-weight: 500;
    font-size: 20px;
    font-style: Montserrat;
  }
  .more-button {
    text-align: right;
  }
  .small-news-card {
    margin-bottom: 20px;
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

  .video-responsive {
    overflow: hidden;
    padding-bottom: 56.25%;
    position: relative;
    height: 0;
  }

  .video-responsive iframe {
    left: 0;
    top: 0;
    height: 100%;
    width: 100%;
    position: absolute;
  }
`;
