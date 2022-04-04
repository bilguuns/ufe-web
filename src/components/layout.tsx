import Footer from "./footer";
import Header from "./layout/header";
import {AppProvider} from "lib/context/app";

const Layout = ({children}: any) => {
    return (
        <AppProvider>
            <Header/>
            {children}
            <Footer/>
        </AppProvider>
    );
};

export default Layout;
