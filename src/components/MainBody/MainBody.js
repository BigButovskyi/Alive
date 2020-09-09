import React, {Component} from "react";
import classes from "./MainBody.css";
import MountainsParallax from "./MountainsParallax/MountainsParallax";
import BackpackPart from "./BackpackPart/BackpackPart";
import MaterialsPart from "./MaterialsPart/MaterialsPart";
import CarouselSection from "./Carousel/CarouselSection";
import Location from "./Location/Location";
import ContactFormSection from "./ContactForm/ContactFormSection";
import Aox from "../../hoc/Aox/Aox";

class MainBody extends Component {

    state = {
        position: 1,
        timeAnimation: 0
    }

    render() {
        return (
            <Aox>
                <MountainsParallax/>
                <BackpackPart/>
                <MaterialsPart/>
                <CarouselSection/>
                <Location/>
                <ContactFormSection/>
            </Aox>
        );
    }
}

export default MainBody;