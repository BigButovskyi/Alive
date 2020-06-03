import React from "react";
import classes from "./PageContainer.css";
import NavigationBar from "../../components/UI/NavigationBar/NavigationBar";
import MainBody from "../../components/MainBody/MainBody";

const PageContainer = (props) => {
    return (
        <div className={classes.PageContainer}>
            <header>
                <NavigationBar/>
            </header>
            <main>
                <MainBody/>
            </main>
        </div>
    );
}

export default PageContainer;