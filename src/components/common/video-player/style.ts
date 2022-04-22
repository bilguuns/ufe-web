import styled from "styled-components";

export const HeroStyle = styled.div`
  .hero-image {
    height: 50%;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    position: relative;
  }

  .hero-text {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  h1 {
    font-size: 60px;
  }
  p {
    font-size: 20px;
  }
  header {
    position: relative;
    height: 100vh;
    overflow: hidden;
    background-size: cover;
  }

  header .video {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    -o-object-fit: cover;
    object-fit: cover;
    -o-object-position: center;
    object-position: center;
  }

  header .container {
    position: relative;
    z-index: 2;
  }

  header .overlay {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    opacity: 0.5;
    z-index: 1;
  }
  .h2 {
    margin-top: 30vh;
    position: absolute;
    font-size: 6vh;
    color: white;
    margin: 15rem 3rem 0;
    padding: 5px 15px;
    text-align: center;
  }
`;
