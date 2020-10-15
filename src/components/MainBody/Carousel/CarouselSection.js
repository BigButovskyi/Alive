import React, {Component} from "react";
import classes from "./CarouselSection.css";
import Carousel from "./Carousel/Carousel";

class carouselSection extends Component {
    componentDidMount() {
        this.props.setChildRef(this.viewElement);
    }

    render() {
        let setRef = (el) => {
            this.viewElement = el;
        };
        return (
            <section ref={setRef} className={classes.CarouselSection}>
                <h1 className={classes.header}>choose best one</h1>
                <Carousel/>
            </section>
        );
    }
}

export default carouselSection;