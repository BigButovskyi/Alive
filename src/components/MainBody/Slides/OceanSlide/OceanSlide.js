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
                image: Ocean
            },
            reef: {
                name: "Reef",
                image: Reef
            },
            seagirl: {
                name: "SeaGirl",
                image: SeaGirl
            },
            divers: {
                name: "Divers",
                image: Divers
            },
            turtle: {
                name: "Turtle",
                image: Turtle
            }
        }
    }

    render() {
        const renderObjects = this.state.renderObjects;
        const slide = Object.keys(renderObjects).map((obj) => {
            let name = renderObjects[obj].name;
            let wrapper = classes["Wrapper_" + name];
            let imgName = classes[name];
            return (
                <div key={obj} className={wrapper}>
                    <img className={imgName} src={renderObjects[obj].image} alt={name}/>
                </div>
            );
        });
        return (
            <div className={classes.OceanSlide}>
                {slide}
                <div className={classes.FullSize}>
                </div>
            </div>
        )
    }
}

export default OceanSlide;