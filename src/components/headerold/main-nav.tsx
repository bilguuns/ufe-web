import { useContext, useEffect, useState } from "react";
import { AppContext } from "../../lib/context/app";
import { HeaderStyle } from "./style";
import Link from "next/link";
import { MenuSWR } from "../../lib/api/menu";

const ESC_KEY_CODE = "Escape";

const MainNav = ({ navOpen, navIsAnimating, closeNav }: any) => {
  // const {menuData, menuStack, mainMenuClick}: any = useContext(AppContext);

  const { data: menuData, error: menuDataError } = MenuSWR();
  const [menuStack, setMenuStack] = useState([0]);

  const mainMenuClick = (menuItem: any) => {
    let stack = menuStack;
    while (stack.includes(menuItem.parentId)) {
      stack.pop();
    }
    stack.push(menuItem.parentId);
    stack.push(menuItem.id);
    setMenuStack(stack);
    console.log(stack);
  };

  const keyPressHandler = ({ key }: any) => {
    if (key === ESC_KEY_CODE && navOpen) {
      closeNav();
    }
  };

  // useEffect(() => {
  //     window.addEventListener("keydown", keyPressHandler);
  //     return () => {
  //         window.removeEventListener("keydown", keyPressHandler);
  //     };
  // }, [navOpen]);

  // const classes = `${navOpen ? " active" : ""}${navIsAnimating ? " is-animating" : ""}`;

  return (
    <HeaderStyle>
      <div
        className={`navigation-menu ${navOpen ? " active" : ""} ${
          navIsAnimating ? " is-animating" : ""
        }`}
      >
        <div className="wrap">
          <div className={"row"} style={{ width: "100%" }}>
            {menuStack.map((parentId: any, i1: number) => {
              return (
                <div key={i1} className={"col-md-3"}>
                  <ul className="links hide">
                    {menuData?.map((menuItem: any, i2: number) => {
                      return (
                        <>
                          {menuItem.parentId == parentId && (
                            <li key={i2} className="link">
                              {/* <Link href="/"> */}
                              <a
                                onClick={(evt: any) => {
                                  console.log("Main menu click");

                                  mainMenuClick(menuItem);
                                }}
                              >
                                {menuItem.translates[0].name}
                              </a>
                              {/* </Link> */}
                            </li>
                          )}
                        </>
                      );
                    })}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </HeaderStyle>
  );
};

export default MainNav;
