import Link from "next/link";
import Image from "next/image";
import image from "../../../assets/images/ufe.png";
import { BsList } from "react-icons/bs";

const Header = ({ navOpen, navIsAnimating, toggleNavHandler }: any) => {
  return (
    <div className="container">
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
              <BsList className="menu" />
              Цэс
            </span>
            <span className={`label--nav-open${navOpen ? " active" : ""}`}>
              Хаах
            </span>
          </button>
        </div>
      </header>
    </div>
  );
};

export default Header;
