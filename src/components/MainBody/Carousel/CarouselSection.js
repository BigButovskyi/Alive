import React, {Component} from "react";
import classes from "./CarouselSection.css";
import Carousel from "./Carousel/Carousel";
import Aox from "../../../hoc/Aox/Aox";

class carouselSection extends Component {
    state = {
        isVisible: false
    }

    componentDidMount() {
        this.props.setChildRef(this.viewElement);
        window.addEventListener('scroll', this.appearScrollHandler);
    }

    componentWillUnmount() {
        window.addEventListener('scroll', this.appearScrollHandler);
    }

    appearScrollHandler = () => {
        let isVisible = this.props.isInViewport(this.viewElement);

        this.setState({
            isVisible: isVisible
        })
    };

    render() {
        let setRef = (el) => {
            this.viewElement = el;
        };

        let carouselStyle = {
            transform: (this.state.isVisible)? 'translateX(0)':"translateX(-50%)"
        }
        return (
            <section ref={setRef} className={classes.CarouselSection}>
                <h1 className={classes.header}>choose best one</h1>
                <div style={carouselStyle} className={classes.carouselWrapper}>
                    <Carousel/>
                </div>
            </section>
        );
    }
}

export default carouselSection;