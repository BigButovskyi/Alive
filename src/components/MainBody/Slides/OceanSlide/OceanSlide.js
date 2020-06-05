import React, {Component} from "react";
import classes from "./OceanSlide.css";
import Ocean from "../../../../assets/images/parallaxSlides/oceanSlide/ocean.png";
import Reef from "../../../../assets/images/parallaxSlides/oceanSlide/reef.png";
import SeaGirl from "../../../../assets/images/parallaxSlides/oceanSlide/seagirl.png";
import Divers from "../../../../assets/images/parallaxSlides/oceanSlide/divers.png";
import Turtle from "../../../../assets/images/parallaxSlides/oceanSlide/turtle.png";

class OceanSlide extends Component {
    state = {
        renderObjects: {
            ocean: {
                name: "Ocean",
                image: Ocean,
                speed: 0.1,
                transform: "translateY(0px)"
            },
            reef: {
                name: "Reef",
                image: Reef,
                speed: -0.2,
                transform: "translateY(0px)"
            },
            seagirl: {
                name: "SeaGirl",
                image: SeaGirl,
                speed: 0.25,
                transform: "translateY(0px)"
            },
            divers: {
                name: "Divers",
                image: Divers,
                speed: -0.3,
                transform: "translateY(0px)"
            },
            turtle: {
                name: "Turtle",
                image: Turtle,
                speed: -0.4,
                transform: "translateY(0px)"
            },
            label: {
                speed: -0.1,
                transform: "translateY(0px)"
            }
        }
    }

    componentDidMount() {
        document.addEventListener("scroll", this.scrollHandler);
    }

    componentWillUnmount() {
        document.removeEventListener("scroll", this.scrollHandler);
    }

    scrollHandler = () => {
        let clientY = window.pageYOffset;
        let elements = {...this.state.renderObjects};
        Object.keys(elements).forEach((key) => {
            let elYC = clientY * elements[key].speed;
            elements[key].transform = "translateY(" + elYC + "px)";
        });

        this.setState({
            renderObjects: elements
        });
    };

    render() {
        const renderObjects = this.state.renderObjects;
        const slide = Object.keys(renderObjects).map((key) => {
            if (renderObjects[key].image !== undefined) {
                let name = renderObjects[key].name;
                let wrapper = classes["Wrapper_" + name];
                let imgName = classes[name];
                return (
                    <div key={key} style={{transform: renderObjects[key].transform}} className={wrapper}>
                        <img className={imgName} src={renderObjects[key].image} alt={name}/>
                    </div>
                );
            } else {
                return "";
            }
        });
        return (
            <div className={classes.OceanSlide}>
                {slide}
                <div style={{transform: this.state.renderObjects["label"].transform}}  className={classes.Wrapper_IS}>
                    <div className={classes.I_letter}>I</div>
                    <div className={classes.S_letter}>S</div>
                </div>
                <div className={classes.FullSize}>
                </div>
            </div>
        )
    }
}

export default OceanSlide;