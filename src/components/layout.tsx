import Footer from "./footer";
import Header from "./layout/header";
import {AppProvider} from "lib/context/app";

const Layout = ({children}: any) => {
    return (
        <div className="content" style={{border: "2px solid yellow"}}>
            <AppProvider>
                <Header/>
                {children}
                <Footer/>
            </AppProvider>
        </div>
    );
};

export default Layout;
