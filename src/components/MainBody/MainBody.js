import React, {Component} from "react";
import classes from "./MainBody.css";
import MountainsParallax from "./MountainsParallax/MountainsParallax";
import BackpackPart from "./BackpackPart/BackpackPart";
import MaterialsPart from "./MaterialsPart/MaterialsPart";
import Carousel from "./Carousel/Carousel";

class MainBody extends Component {

    state = {
        position: 1,
        timeAnimation: 0
    }

    render() {
        return (
            <div className={classes.MainBody}>
                <MountainsParallax/>
                <BackpackPart/>
                <MaterialsPart/>
                <Carousel/>
            </div>
        );
    }
}

export default MainBody;