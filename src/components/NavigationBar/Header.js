import React, {Component} from "react";
import classes from "./Header.css";
import NavigationBar from "./Navigation/NavigationBar";

class Header extends Component {
    render() {
        return (
            <header className={classes.Header}>
                <div className={classes.helloText}>alive</div>
                <NavigationBar/>
            </header>
        );
    }
}

export default Header;