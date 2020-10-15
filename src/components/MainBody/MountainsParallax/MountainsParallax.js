import React, {Component} from "react";
import c from "./MountainsParallax.css";
import clouds from "../../../assets/images/parallaxSlides/clouds.png";

class MountainsParallax extends Component {
    state = {
        movement: {
            alive: {
                speed: 0.8,
                transform: "translateY(0)"
            },
            clouds: {
                speed: -0.8,
                transform: "translateY(0)"
            },
            man: {
                speed: 0.4,
                transform: "translateY(0)"
            },
            mountains: {
                speed: 0.03,
                transform: "translateY(0)"
            },
        }
    };

    componentDidMount() {
        document.addEventListener("scroll", this.scrollHandler);
        this.props.setChildRef(this.viewElement);
    }

    componentWillUnmount() {
        document.removeEventListener("scroll", this.scrollHandler);
    }

    scrollHandler = () => {
        let clientY = window.pageYOffset;
        let elementsMove = {...this.state.movement};
        Object.keys(elementsMove).forEach((key) => {
            let elYC = clientY * elementsMove[key].speed;
            elementsMove[key].transform = "translateY(" + elYC + "px)";

        });

        this.setState({
            movement: elementsMove
        });
    };

    render() {
    let setRef = (el) => {
        this.viewElement = el;
    };
        return (
            <section ref={setRef} className={c.MountainsSlide}>
                <div style={{transform: this.state.movement.mountains.transform}} className={c.mountain}/>
                <div style={{transform: this.state.movement.alive.transform}} className={c.alive}>
                    <span className={c.al}>AL</span>
                    <span className={c.ve}>VE</span>
                </div>
                <div style={{transform: this.state.movement.man.transform}} className={c.man}/>
                <div className={c.cloudsParent}>
                    <img style={{transform: this.state.movement.clouds.transform}} src={clouds} className={c.clouds}
                         alt={"clouds"}/>
                </div>
            </section>
        );
    }

}

export default MountainsParallax;