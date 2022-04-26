import { useEffect, useContext, useState } from "react";
import MainNav from "./main-nav";
import Image from "next/image";
import image from "../../../assets/images/ufe.png";
import Link from "next/link";
import { BsList } from "react-icons/bs";
import styles from "./header.module.scss";
import { left } from "@popperjs/core";
import { ReactComponent as ExitIcon } from "../../../../public/icon/exit.svg";

const MainHeader = () => {
  const [navOpen, setNavOpen] = useState(false);

  return (
    <>
      <div className={styles.page_header}>
        <div className="d-flex align-items-center justify-content-between">
          <Link href="/">
            <div className="img">
              <Image width={155} height={42} alt="example" src={image} />
            </div>
          </Link>
          <div>
            {/*<button*/}
            {/*    className={"btn btn-secondary"}*/}
            {/*    onClick={(evt: any) => {*/}
            {/*        console.log("Main nav toggle");*/}
            {/*        setNavOpen(!navOpen);*/}
            {/*    }}*/}
            {/*>*/}
            {/*    <BsList*/}
            {/*        className="menu"*/}
            {/*        style={{color: "#fff", fontSize: "30px"}}*/}
            {/*    />*/}
            {/*</button>*/}
            {navOpen ? (
              <button
                className={"btn btn-default"}
                onClick={(evt: any) => {
                  console.log("Main nav toggle");
                  setNavOpen(!navOpen);
                }}
                style={{
                  width: "150px",
                  backgroundColor: "transparent",
                  color: "#FFFFFF",
                  boxShadow: "none",
                  fontSize: "16px",
                  lineHeight: "24px",
                }}
              >
                <div style={{ backgroundColor: "transparent" }}>
                  <img src="/icon/exit.svg" style={{ marginRight: "10px" }} />
                  Хаах
                </div>
              </button>
            ) : (
              <button
                className={"btn btn-primary"}
                onClick={(evt: any) => {
                  console.log("Main nav toggle");
                  setNavOpen(!navOpen);
                }}
                style={{ width: "150px", fontSize: "16px", lineHeight: "24px" }}
              >
                <BsList
                  className="menu"
                  style={{
                    color: "#fff",
                    fontSize: "30px",
                    marginRight: "10px",
                  }}
                />
                Цэс
              </button>
            )}
          </div>
        </div>
      </div>
      <div
        className={`${styles.main_menu_pane} ${navOpen ? styles.active : ""}`}
      >
        <MainNav navOpen={navOpen} setNavOpen={setNavOpen} />
        <div
          className="px-5"
          style={{
            position: "absolute",
            bottom: 0,
            alignItems: "center",
          }}
        >
          <p
            style={{
              border: "1px solid #FFFFFF",
              marginBottom: "40px",
              marginRight: "-25rem",
            }}
          />
          <p style={{ fontSize: "1vw", bottom: 0 }}>Цахим талбарууд</p>

          <div
            style={{
              display: "flex",
              marginLeft: "-50px",
              fontSize: "1vw ",
            }}
          >
            <p className="p-5">
              <a
                href="https://infosys.ufe.edu.mn/"
                target="https://infosys.ufe.edu.mn/"
              >
                Infosys
              </a>
            </p>
            <p className="p-5">
              <a href="http://online.edu.mn/" target="http://online.edu.mn/">
                Moodle
              </a>
            </p>
            <p className="p-5">
              <a
                href="https://www.ufe.edu.mn/eoffice/defaultLogin.aspx?page=1"
                target="https://www.ufe.edu.mn/eoffice/defaultLogin.aspx?page=1"
              >
                Eoffice
              </a>
            </p>
            <p className="p-5">
              <a
                href="https://www.youtube.com/channel/UCbGN_p4WyN_XcgDNUD3dhzQ"
                target="https://www.youtube.com/channel/UCbGN_p4WyN_XcgDNUD3dhzQ"
              >
                Podcast
              </a>
            </p>
            <p className="p-5">
              <a
                href="https://sites.google.com/ufe.edu.mn/eco-ufe/?fbclid=IwAR3UiRc2_IPwTHRtC0Gn9vHngcY42qWqzmhyCGSGypAxBrDjUFniIYzKBf8"
                target="https://sites.google.com/ufe.edu.mn/eco-ufe/?fbclid=IwAR3UiRc2_IPwTHRtC0Gn9vHngcY42qWqzmhyCGSGypAxBrDjUFniIYzKBf8"
              >
                Eco СЭЗИС
              </a>
            </p>
            <p className="p-5">
              <a
                href="https://online.ufe.edu.mn/login/index.php"
                target="https://online.ufe.edu.mn/login/index.php"
              >
                online.edu.mn
              </a>
            </p>
            <p className="p-5">
              <a href="" target="">
                UFE app
              </a>
            </p>
            <p className="p-5">
              <a
                href="https://www.ufe.edu.mn/sezis-virtual-tour/index.htm"
                target="https://www.ufe.edu.mn/sezis-virtual-tour/index.htm"
              >
                UFE 360
              </a>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default MainHeader;
