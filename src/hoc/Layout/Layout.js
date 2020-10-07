import React from 'react';
import Aox from "../Aox/Aox";
import Header from "../../components/NavigationBar/Header";
import Footer from "../../components/Footer/Footer";

const layout = (props) => {

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

export default layout;