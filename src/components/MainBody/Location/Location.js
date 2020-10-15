import React, {Component} from "react";
import classes from "./Location.css";
import ContactUs from "./ContactUs/ContactUs";

class Location extends Component {

    state = {
        isVisible: false
    }

    componentDidMount() {
        document.addEventListener("scroll", this.scrollHandler);
        this.props.setChildRef(this.viewElement);
    }

    componentWillUnmount() {
        document.removeEventListener("scroll", this.scrollHandler);
    }

    scrollHandler = () => {
        const isVisible = this.props.isInViewport(this.viewElement);
        this.setState(
            {
                isVisible: isVisible
            });
    };


    render() {
        const setRef = (el) => {
            this.viewElement = el;
        };

        const mapStyle = {transform:(this.state.isVisible)?"":"translateX(100%)"},
            contactUsStyle = {transform:(this.state.isVisible)?"":"translateX(-100%)"};

        return (
            <section ref={setRef} className={classes.LocationSection}>
                <div className={classes.background}/>
                <div className={classes.wrapper}>
                    <h1 className={classes.locationHeader}>
                        <div className={classes.locationHeaderLabel}>visit our store</div>
                    </h1>
                    <div className={classes.locationWrapper}>
                        <ContactUs style={contactUsStyle}/>
                        <div style={mapStyle} className={classes.map}/>
                    </div>
                </div>
            </section>
        )
    }

}

export default Location;