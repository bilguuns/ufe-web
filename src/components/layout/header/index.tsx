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
      </div>
    </>
  );
};

export default MainHeader;
