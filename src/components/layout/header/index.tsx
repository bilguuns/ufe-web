import {useEffect, useContext, useState} from "react";
import Header from "./header";
import MainNav from "./main-nav";
import Image from "next/image";
import image from "../../../assets/images/ufe.png";
import Link from "next/link";
import {BsList} from "react-icons/bs";
import styles from "./header.module.scss";

const MainHeader = () => {

    const [navOpen, setNavOpen] = useState(false);

    return (
        <>
            <div className={styles.page_header}>
                <div className={"row"} style={{border: "1px solid green"}}>
                    <div className={"col-sm-4"}>
                        <Link href="/">
                            <div className="img">
                                <Image width={155} height={48} alt="example" src={image}/>
                            </div>
                        </Link>
                    </div>
                    <div className={"col-sm-8"}>

                        <div className={"d-flex justify-content-end"} style={{border: "1px solid cyan"}}>

                            <button
                                className={"btn btn-secondary"}
                                onClick={(evt: any) => {
                                    console.log("Main nav toggle");
                                    setNavOpen(!navOpen);
                                }}
                            >
                                <BsList
                                    className="menu"
                                    style={{color: "#fff", fontSize: "30px"}}
                                />
                            </button>

                            <button
                                className={"btn btn-primary"}
                                onClick={(evt: any) => {
                                    console.log("Main nav toggle");
                                    setNavOpen(!navOpen);
                                }}
                            >
                                <BsList
                                    className="menu"
                                    style={{color: "#fff", fontSize: "30px"}}
                                />
                            </button>

                        </div>

                    </div>
                </div>
            </div>

            <div className={`${styles.main_menu_pane} ${navOpen ? styles.active : ''}`}>

                <MainNav
                    navOpen={navOpen}
                    setNavOpen={setNavOpen}
                />

            </div>

        </>
    );
};

export default MainHeader;
