import Image from "next/image";
import styles from "./page-header.module.scss";
import {MenuSWR} from "../../../lib/api/menu";
import {useEffect, useState} from "react";
import Link from "next/link";

const Header = ({image, id, navOpen, setNavOpen}: any) => {

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
        let menuItem;
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
            if (menu.id === 1) {
                if (menu.parentId === 0) {
                    stackItem.menuItems.push({
                        menu: menu,
                        hasChild: pIds.includes(menu.id),
                    });
                }
            }

        }
        setParentIds(pIds);
        setMenuStack([stackItem]);
        console.log("--------------------------------------------1-", stackItem);
        console.log("--------------------------------------------2-", pIds);


    }, );

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
                        hasChild: parentIds.includes(menu.id),
                    });
                }
            }
            if (stackIds[i + 1]) {
                stackItem.activeId = stackIds[i + 1];
            }

            stack.push(stackItem);
        }
        console.log("--------------------------------------------3-", stack);
        setMenuStack(stack);
        console.log(stack);
    };

    return (
        <div>
            <div>
                {menuStack?.map((stack: any, i1: number) => {
                    return (
                        <>
                                <div key={i1}>

                                    {stack.menuItems.map((menuItem: any, i2: number) => {
                                        return (
                                            <>
                                                {
                                                    <div
                                                        key={i2}
                                                    >
                                                        <Link
                                                            href={
                                                                menuItem.hasChild
                                                                    ? "#"
                                                                    : `/c/${menuItem.menu.id}/${menuItem.menu.translates[0].name}`
                                                            }
                                                        >
                                                            <a
                                                                onClick={(evt: any) => {
                                                                    if (menuItem.hasChild) {
                                                                        evt.preventDefault();
                                                                        mainMenuClick(menuItem);
                                                                    }
                                                                }}
                                                            >
                                                                <h1>{menuItem.menu.translates[0].name}</h1>
                                                            </a>
                                                        </Link>
                                                    </div>
                                                }
                                            </>
                                        );
                                    })}
                                </div>

                        </>
                    );
                })}
            </div>
        </div>
    );
};

export default Header;