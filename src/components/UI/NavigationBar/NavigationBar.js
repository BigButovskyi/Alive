import React, {Component} from "react";
import classes from "./NavigationBar.css";

class NavigationBar extends Component {
    render() {
        return (
            <nav className={classes.NavigationBar}>
                Hello, its me
            </nav>
        );
    }
}

export default NavigationBar;