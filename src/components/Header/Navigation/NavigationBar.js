import React, {Component} from "react";
import classes from "./NavigationBar.css";
import NavigationItem from "./NavigationItem/NavigationItem";

class NavigationBar extends Component {
    state = {
        navigationItems: [
            {name: "HIGH quality", active: true},
            {name: "Feature", active: false},
            {name: "Advantage", active: false},
            {name: "Types", active: false},
            {name: "Location", active: false},
            {name: "write us", active: false}
        ]
    }

    clickHandler = (key) => {
        let navI = [...this.state.navigationItems];
        navI.forEach((item,pos) => {
            navI[pos].active = false;
        });
        navI[key].active = true;
        this.setState({navigationItems:navI});
    };

    render() {
        const navigationItems = this.state.navigationItems.map((el, position) => {
            return (<NavigationItem key={el.name} active={el.active} position={position} click={this.clickHandler}
                                    label={el.name}/>);
        });

        return (
            <nav className={classes.NavigationBar}>
                {navigationItems}
            </nav>
        );
    }
}

export default NavigationBar;