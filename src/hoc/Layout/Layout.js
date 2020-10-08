import React from 'react';
import Aox from "../Aox/Aox";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";

const Layout = (props) => {

    return (
        <Aox>
            <Header/>
            {/*swipeDrawer*/}
            <main>
                {props.children}
            </main>
            <Footer/>
        </Aox>
    );

}

export default Layout;