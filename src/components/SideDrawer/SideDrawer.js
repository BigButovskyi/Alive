import React, {Component} from "react";
import classes from "./SideDrawer.css";

class SideDrawer extends Component {
    state = {
        navigationItems: ["HIGH quality", "Feature", "Advantage", "Types", "Location", "write us"],
        translationX: 0
    }

    clickHandler = (key) => {
        window.scrollTo({
            top: this.props.components[key].offsetTop - window.innerHeight / 10,
            behavior: "smooth"
        });
        this.props.sideBtn();
    };

    render() {
        if (!this.props.show) {
            return null;
        }

        const sideDrawerStyle = {
            transform:(this.props.sideDrawerAppear)? "translateX(0)":"translateX(100%)"
        }

        const navigation = this.state.navigationItems.map((el, i) => {
            return (<div onClick={() => this.clickHandler(i)} className={classes.navItem} key={"swipe_" + i}>{el}</div>)
        });
        return (
            <section style={sideDrawerStyle} className={classes.SideDrawer}>
                <div className={classes.navWrapper}>
                    {navigation}
                </div>
            </section>
        );
    }
}


export default SideDrawer;