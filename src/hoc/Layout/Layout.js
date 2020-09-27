import React from 'react';
import Aox from "../Aox/Aox";
import NavigationBar from "../../components/NavigationBar/NavigationBar";
import Footer from "../../components/Footer/Footer";

const layout = (props) => {

    return (
        <Aox>
            <NavigationBar/>
            {/*swipeDrawer*/}
            <main>
                {props.children}
            </main>
            <Footer/>
        </Aox>
    );

}

export default layout;