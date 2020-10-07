import React, {Component} from "react";
import classes from "./NavigationBar.css";
import NavigationItem from "./NavigationItem/NavigationItem";

class NavigationBar extends Component {
    state = {
        navigationItems: [
            {name: "Main"},
            {name: "Feature"},
            {name: "Advantage"},
            {name: "Types"},
            {name: "Location"},
            {name: "write us"}
        ]
    }

    render() {
        const navigationItems = this.state.navigationItems.map((el) => {
            return (<NavigationItem key={el.name} label={el.name}/>);
        });

        return (
            <nav className={classes.NavigationBar}>
                {navigationItems}
            </nav>
        );
    }
}

export default NavigationBar;