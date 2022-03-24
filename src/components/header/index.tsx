import React from "react";
// import image from "../../assets/images/ufe.png";
import Link from "next/link";

import Image from "next/image";
import image from "../../assets/images/ufe.png";
import background from "../../assets/images/Revolving-Building-Background .png";
import { BsList, BsSearch } from "react-icons/bs";
import { HeaderStyle } from "./style";
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
              <ul className="links hide">
                <li className="link">
                  {/* <Link href="/"> */}
                  <a>Сургалт</a>
                  {/* </Link> */}
                </li>
                <li className="link">
                  <a>Судалгаа</a>
                </li>
                <li className="link">
                  <Link href="/education">
                    <a>Оюутны амьдрал</a>
                    {/* <ul>
                      <li>Black tea</li>
                      <li>Green tea</li>
                    </ul> */}
                  </Link>
                </li>
                <li className="link">
                  <Link href="/about">
                    <a className="mainmenu">Бидний тухай</a>
                  </Link>
                  {/* <ul className="hide">
                    <li>
                      <a href="#">Pi</a>
                    </li>
                    <li>
                      <a href="#">Co</a>
                    </li>
                  </ul> */}
                </li>
              </ul>
              <hr />
            </div>
            {/* <div className="col col-right col-image">
              <Image
                alt=""
                className="astro"
                src={background}
                layout="responsive"
              />
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
          <Link href="/">
            <div className="img">
              <Image width={155} height={48} alt="example" src={image} />
            </div>
          </Link>
          {/* <button className="nav-button1">
            <span className="header_btn1">
              <BsSearch
                className="menu"
                style={{ color: "#fff", fontSize: "30px" }}
              />
              Хайлт
            </span>
          </button> */}
          <div className="wrap">
            <button
              className={`nav-button${navIsAnimating ? " is-animating" : ""}`}
              type="button"
              aria-label="Toggle Navigation"
              onClick={(event) => toggleNavHandler(event)}
            >
              <span
                className={`header_btn label--nav-closed ${
                  !navOpen ? " active" : ""
                }`}
              >
                <BsList
                  className="menu"
                  style={{ color: "#fff", fontSize: "30px" }}
                />
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
