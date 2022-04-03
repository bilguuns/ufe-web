import {useEffect, useContext, useState} from "react";
import {HeaderStyle} from "./style";
import Header from "components/headerold/header";
import MainNav from "components/headerold/main-nav";

const PageHeader = () => {

    const [navOpen, setNavOpen] = useState(false);
    const [navIsAnimating, setNavIsAnimating] = useState(false);

    const toggleNav = (event: any) => {
        // event.preventDefault();
        setNavIsAnimating(true);

        // if (navOpen) {
        //     document.body.classList.remove("nav-open");
        // } else {
        //     document.body.classList.add("nav-open");
        // }

        setTimeout(() => {
            setNavIsAnimating(false);
            setNavOpen(!navOpen);
        }, 500);
    };

    const openNav = (event: any) => {
        // if (event) event.preventDefault();
        document.body.classList.add("nav-open");
        setNavOpen(true);
    };

    const closeNav = (event: any) => {
        document.body.classList.remove("nav-open");
        setNavOpen(false);
    };

    return (
        <HeaderStyle>
            <div className="layout">
                <Header
                    navOpen={navOpen}
                    toggleNavHandler={(event: any) => toggleNav(event)}
                    navIsAnimating={navIsAnimating}
                />
                <MainNav
                    navOpen={navOpen}
                    navIsAnimating={navIsAnimating}
                    closeNav={closeNav}
                    toggleNavHandler={toggleNav}
                />
            </div>
        </HeaderStyle>
    );
};

export default PageHeader;
