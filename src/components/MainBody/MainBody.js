import React from "react";
import MountainsParallax from "./MountainsParallax/MountainsParallax";
import BackpackPart from "./BackpackPart/BackpackPart";
import MaterialsPart from "./MaterialsPart/MaterialsPart";
import CarouselSection from "./Carousel/CarouselSection";
import Location from "./Location/Location";
import ContactFormSection from "./ContactForm/ContactFormSection";
import Aox from "../../hoc/Aox/Aox";

const MainBody = (props) => {

    return (
        <Aox>
            <MountainsParallax setChildRef={(el) => props.setChildRef(el)}/>
            <BackpackPart setChildRef={(el) => props.setChildRef(el)}/>
            <MaterialsPart setChildRef={(el) => props.setChildRef(el)} isInViewport={(el) => props.isInViewport(el)}/>
            <CarouselSection setChildRef={(el) => props.setChildRef(el)}/>
            <Location setChildRef={(el) => props.setChildRef(el)} isInViewport={(el) => props.isInViewport(el)}/>
            <ContactFormSection setChildRef={(el) => props.setChildRef(el)} isInViewport={props.isInViewport}/>
        </Aox>
    );

}

export default MainBody;