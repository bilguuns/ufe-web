import React from "react";
// import image from "../../assets/images/ufe.png";
import Link from "next/link";

import Image from "next/image";
import image from "../../assets/images/ufe.png";
import styled from "styled-components";

const HeaderStyle = styled.div`
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
    font-size: 2x;
    color: #ffffff;
    text-decoration: none;
    position: relative;
  }
  @media (max-width: 799px) {
    .navigation-menu .wrap .cols .col.col-links .links .link a {
      font-size: 2px;
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
    position: sticky;
    top: 0;
    left: 0;
    width: 100%;
    padding: 20px 0;
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
    /* text-transform: uppercase; */
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
  }
`;
const ESC_KEY_CODE = "Escape";

const NavigationMenu = (props: any) => {
  const { navOpen, navIsAnimating, closeNav } = props;
  const keyPressHandler = ({ key }: any) => {
    if (key === ESC_KEY_CODE && navOpen) {
      closeNav();
    }
  };
  React.useEffect(() => {
    window.addEventListener("keydown", keyPressHandler);
    return () => {
      window.removeEventListener("keydown", keyPressHandler);
    };
  }, [navOpen]);
  const classes = `${navOpen ? " active" : ""}${
    navIsAnimating ? " is-animating" : ""
  }`;
  return (
    <HeaderStyle>
      <div className={`navigation-menu${classes}`}>
        <div className="wrap">
          <div className="cols">
            <div className="col col-left col-links">
              <ul className="links">
                <Link href="/">
                  <li className="link">
                    <a>Сургалт</a>
                  </li>
                </Link>
                <Link href="/about">
                  <li className="link">
                    <a>Судалгаа</a>
                  </li>
                </Link>
                <Link href="/about">
                  <li className="link">
                    <a>Оюутны амьдрал</a>
                  </li>
                </Link>
                <Link href="/about">
                  <li className="link">
                    <a>Бидний тухай</a>
                  </li>
                </Link>
              </ul>
            </div>
            {/* <div className="col col-right col-image">
            <img
              className="astro"
              src="https://i.imgur.com/0pWqp5j.png" />
          </div> */}
          </div>
        </div>
      </div>
    </HeaderStyle>
  );
};

const Header = (props: any) => {
  const { navOpen, navIsAnimating, toggleNavHandler } = props;
  return (
    <div className="container">
      <HeaderStyle>
        <header className="header">
          <div className="img">
            <Image width={155} height={48} alt="example" src={image} />
          </div>
          <div className="wrap">
            <button
              className={`nav-button${navIsAnimating ? " is-animating" : ""}`}
              type="button"
              aria-label="Toggle Navigation"
              onClick={(event) => toggleNavHandler(event)}
            >
              <span
                className={`btn btn-primary label--nav-closed ${
                  !navOpen ? " active" : ""
                }`}
              >
                Цэс
              </span>
              <span className={`label--nav-open${navOpen ? " active" : ""}`}>
                Хаах
              </span>
            </button>
          </div>
        </header>
      </HeaderStyle>
    </div>
  );
};

class App extends React.Component {
  state = {
    navOpen: false,
    navIsAnimating: false,
  };

  toggleNav = (event: any) => {
    event.preventDefault();
    const { navOpen } = this.state;
    if (event) event.preventDefault();
    this.setState({
      navIsAnimating: true,
    });
    if (navOpen) document.body.classList.remove("nav-open");
    if (!navOpen) document.body.classList.add("nav-open");
    setTimeout(() => {
      this.setState({
        navIsAnimating: false,
        navOpen: !navOpen,
      });
    }, 500);
  };

  openNav = (event: any) => {
    if (event) event.preventDefault();
    document.body.classList.add("nav-open");
    this.setState({
      navOpen: true,
    });
  };

  closeNav = (event: any) => {
    document.body.classList.remove("nav-open");
    this.setState({
      navOpen: false,
    });
  };

  render() {
    const { navOpen, navIsAnimating } = this.state;
    return (
      <HeaderStyle>
        <div className="layout">
          <Header
            navOpen={navOpen}
            toggleNavHandler={(event: any) => this.toggleNav(event)}
            navIsAnimating={navIsAnimating}
          />
          <NavigationMenu
            navOpen={navOpen}
            navIsAnimating={navIsAnimating}
            closeNav={(event: any) => this.closeNav(event)}
            toggleNavHandler={(event: any) => this.toggleNav(event)}
          />
        </div>
      </HeaderStyle>
    );
  }
}
export default App;
