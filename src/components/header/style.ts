import styled from "styled-components";

export const HeaderStyle = styled.div`

  /*=============================================>>>>> = Nav Menu styles = ===============================================>>>>>*/
  .navigation-menu {
    top: 0;
    left: 0;
    position: fixed;
    width: 100vw;
    height: 100vh;
    background-color: #000;
    transform: translateY(-100vh);
    transition: transform 0.33s ease-out;
    z-index: 5;
    overflow: hidden;
  }
  .navigation-menu.active {
    transform: translateY(0);
  }
  .navigation-menu.active:not(.is-animating) .wrap .cols .col.col-links {
    transform: translateY(0%);
    opacity: 1;
  }
  .navigation-menu.is-animating:not(.active) {
    transform: translateY(0);
  }
  .navigation-menu.is-animating.active .wrap .cols .col.col-links {
    transform: translateY(10%);
    opacity: 0;
  }
  .navigation-menu .wrap {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  @media (max-width: 799px) {
    .navigation-menu .wrap {
      position: relative;
      padding-bottom: 40vw;
    }
  }
  .navigation-menu .wrap .cols {
    width: 100%;
    display: flex;
    flex-direction: row;
  }
  @media (max-width: 799px) {
    .navigation-menu .wrap .cols {
      flex-direction: column;
    }
  }
  .navigation-menu .wrap .cols .col {
    width: 50%;
    flex: 1;
  }
  @media (max-width: 799px) {
    .navigation-menu .wrap .cols .col {
      width: 100%;
      flex: auto;
    }
  }
  .navigation-menu .wrap .cols .col.col-links {
    transform: translateY(20%);
    opacity: 0;
    transition: opacity 0.3s ease, transform 0.3s ease;
  }
  .navigation-menu .wrap .cols .col.col-links .links {
    display: flex;
    flex-direction: column;
    margin-bottom: 60px;
    max-width: 600px;
    margin: 0 auto;
  }
  .navigation-menu .wrap .cols .col.col-links .links .link {
    margin-bottom: 20px;
  }
  .navigation-menu .wrap .cols .col.col-links .links .link:last-child {
    margin-bottom: 0;
  }
  .navigation-menu .wrap .cols .col.col-links .links .link a {
    font-size: 32px;
    color: #ffffff;
    text-decoration: none;
    position: relative;
  }
  @media (max-width: 799px) {
    .navigation-menu .wrap .cols .col.col-links .links .link a {
      font-size: 24px;
    }
  }
  .navigation-menu .wrap .cols .col.col-links .links .link a:after {
    position: absolute;
    top: auto;
    bottom: -2.5px;
    left: 0;
    transform: translateY(100%);
    content: "";
    height: 2px;
    width: 100%;
    background-color: #ffffff;
    border-radius: 4px;
    transform: scaleX(0);
    transform-origin: left center;
    transition: transform 0.3s ease;
  }
  .navigation-menu .wrap .cols .col.col-links .links .link a:hover:after {
    transform: scaleX(1);
  }
  
  /*=============================================>>>>> = Header styles = ===============================================>>>>>*/
  .header {
    display: block;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    padding: 40px;
    z-index: 6;
  }
  .header .wrap {
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    align-items: center;
  }
  .header .wrap .nav-button {
    display: block;
    position: relative;
    height: 30px;
  }
  .header .wrap .nav-button:hover,
  .header .wrap .nav-button:focus,
  .header .wrap .nav-button:active {
    outline: none;
  }
  .header .wrap .nav-button:hover {
    cursor: pointer;
  }
  @media (max-width: 799px) {
    .header .wrap .nav-button {
      height: 20px;
    }
  }
  .header .wrap .nav-button.is-animating span.active {
    transform: translateY(50%);
    opacity: 0;
  }
  .header .wrap .nav-button span {
    position: absolute;
    top: 0;
    left: auto;
    right: 0;
    display: block;
    transform: translateY(-50%);
    opacity: 0;
    transition: transform 0.3s ease, opacity 0.3s ease;
    text-transform: uppercase;
    letter-spacing: 0.1em;
  }
  .header .wrap .nav-button span.active {
    transform: translateY(0%);
    opacity: 1;
  }
  .header .wrap .nav-button span.label--nav-open.active {
    color: #ffffff;
  }
    .img {
    float: left;
  }

  button {
    border: none;
    margin: 0;
    padding: 0;
    width: auto;
    overflow: visible;
    background: transparent;
    color: inherit;
    font: inherit;
    line-height: normal;
    .header_btn {
      background-color: #0132a6;
      border: none;
      color: white;
      padding: 10px 30px;
      text-align: center;
      text-decoration: none;
      display: inline-block;
    }
  li {
      list-style:  none none;
}

`;
