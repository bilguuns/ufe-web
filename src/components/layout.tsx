import Footer from "./footer";
import Header from "./header";
import {AppProvider} from "lib/context/app";

const Layout = ({children}: any) => {
    return (
        <div className="content">
            <AppProvider>
                <Header/>
                {children}
                <Footer/>
            </AppProvider>
        </div>
    );
};

export default Layout;
