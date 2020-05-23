import React, {Component} from "react";
import classes from "./PageContainer.css";
import NavigationBar from "../../components/UI/NavigationBar/NavigationBar";
import Parallax from "../../components/Parallax/Parallax";

class PageContainer extends Component{
    render() {
        return (
            <div className={classes.PageContainer}>
                <header className={classes.header}>
                    <NavigationBar/>
                </header>
                <main className={classes.main}>
                    <Parallax/>
                    <section style={{width:"100%",height:"100vh"}}></section>
                </main>
            </div>
        );
    }
}

export default PageContainer;