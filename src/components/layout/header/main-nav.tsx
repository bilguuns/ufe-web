import {useContext, useEffect, useState} from "react";
import {AppContext} from "../../../lib/context/app";
import Link from "next/link";
import {MenuSWR} from "../../../lib/api/menu";
import styles from "./main-nav.module.scss";

const ESC_KEY_CODE = "Escape";

const MainNav = ({navOpen, setNavOpen, navIsAnimating, closeNav}: any) => {
    // const {menuData, menuStack, mainMenuClick}: any = useContext(AppContext);

    const {data: menuData, error: menuDataError} = MenuSWR();
    console.log("menuData: ", menuData);
    const [menuStack, setMenuStack]: any = useState();
    const [parentIds, setParentIds]: any = useState();

    useEffect(() => {

        if (menuStack) {
            if (menuStack.length > 0) {
                return;
            }
        }

        if (!menuData) {
            return;
        }

        let pIds = [];
        let menu;
        for (menu of menuData) {
            if (menu.parentId !== 0) {
                pIds.push(menu.parentId);
            }
        }

        let stackItem: any = {
            parentId: 0,
            activeId: 0,
            menuItems: [],
        };

        for (menu of menuData) {
            if (menu.parentId === 0) {
                stackItem.menuItems.push({
                    menu: menu,
                    hasChild: pIds.includes(menu.id),
                });
            }
        }

        setParentIds(pIds);
        setMenuStack([stackItem]);

    }, [navOpen, menuData]);

    const mainMenuClick = (menuItem: any) => {

        if (!menuItem) {
            return;
        }

        console.log(menuStack);

        let stackIds = [];
        let stackItem: any;
        for (stackItem of menuStack) {
            console.log(stackItem);
            stackIds.push(stackItem.parentId);
        }

        while (stackIds.includes(menuItem?.menu?.parentId)) {
            stackIds.pop();
        }

        if (menuItem) {
            stackIds.push(menuItem.menu.parentId);
            stackIds.push(menuItem.menu.id);
        } else {
            stackIds.push(0);
        }

        let stack = [];
        let i: number;
        let menu;

        for (i = 0; i < stackIds.length; i++) {

            stackItem = {
                parentId: stackIds[i],
                activeId: 0,
                menuItems: [],
            };

            for (menu of menuData) {
                if (menu.parentId === stackItem.parentId) {
                    stackItem.menuItems.push({
                        menu: menu,
                        hasChild: parentIds.includes(menu.id)
                    });
                }
            }
            if (stackIds[i + 1]) {
                stackItem.activeId = stackIds[i + 1];
            }

            stack.push(stackItem);

        }

        setMenuStack(stack);
        console.log(stack);
    }

    return (
        <div className={styles.nav_container}>


            <div className={"row"}>
                {
                    menuStack?.map((stack: any, i1: number) => {
                        return (
                            <div key={i1} className={"col-md-3"}>
                                <ul>
                                    {
                                        stack.menuItems.map((menuItem: any, i2: number) => {
                                            return (
                                                <>
                                                    {
                                                        <li key={i2} className="link">
                                                            <Link
                                                                href={menuItem.hasChild ? '#' : `/c/${menuItem.menu.id}/${menuItem.menu.translates[0].name}`}
                                                            >
                                                                <a
                                                                    onClick={(evt: any) => {
                                                                        if (menuItem.hasChild) {
                                                                            evt.preventDefault();
                                                                            mainMenuClick(menuItem);
                                                                        } else {
                                                                            setNavOpen(false);
                                                                        }
                                                                    }}
                                                                >{menuItem.menu.translates[0].name}</a>
                                                            </Link>
                                                        </li>
                                                    }
                                                </>

                                            );
                                        })
                                    }
                                </ul>
                            </div>
                        );
                    })
                }
            </div>
        </div>
    );
};

export default MainNav;