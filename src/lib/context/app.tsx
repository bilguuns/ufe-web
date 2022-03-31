import {createContext, useState} from "react";
import {MenuSWR} from "lib/api/menu";

const AppContext = createContext(null);
const {Provider}: any = AppContext;

const AppProvider = ({children}: any) => {

    const {data: menuData, error: menuDataError} = MenuSWR();
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
    }

    return (
        <Provider value={{menuData, menuStack, mainMenuClick}}>
            {children}
        </Provider>
    );
};

export {AppContext, AppProvider};