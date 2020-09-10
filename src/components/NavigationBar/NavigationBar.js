import React, {Component} from "react";
import classes from "./NavigationBar.css";

class NavigationBar extends Component {
    render() {
        return (
            <header className={classes.NavigationBar}>
                Hello, its me
            </header>
        );
    }
}

export default NavigationBar;