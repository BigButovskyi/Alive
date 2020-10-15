import React from "react";
import classes from "./Header.css";
import NavigationBar from "./Navigation/NavigationBar";

const Header = (props) => {
    return (
        <header className={classes.Header}>
            <div className={classes.helloText}>alive</div>
            <NavigationBar isInViewport={(el) => props.isInViewport(el)} components={props.components}/>
        </header>
    );
}


export default Header;