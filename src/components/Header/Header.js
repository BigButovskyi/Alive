import React from "react";
import classes from "./Header.css";
import NavigationBar from "./Navigation/NavigationBar";
import CrossButton from "../UI/CrossButton/CrossButton";

const Header = (props) => {
    return (
        <header className={classes.Header}>
            <div className={classes.helloText}>alive</div>
            {(props.showNavBar) ?
                (<NavigationBar isInViewport={(el) => props.isInViewport(el)} components={props.components}/>)
                :
                <div onClick={props.sideBtn} className={classes.sideDrawerBtn}>
                    <CrossButton sideDrawerAppear={props.sideDrawerAppear}/>
                </div>
            }
        </header>
    );
}


export default Header;