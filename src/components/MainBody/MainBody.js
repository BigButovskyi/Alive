import React from "react";
import MountainsParallax from "./MountainsParallax/MountainsParallax";
import BackpackPart from "./BackpackPart/BackpackPart";
import MaterialsPart from "./MaterialsPart/MaterialsPart";
import CarouselSection from "./Carousel/CarouselSection";
import Location from "./Location/Location";
import ContactFormSection from "./ContactForm/ContactFormSection";
import Aox from "../../hoc/Aox/Aox";

const MainBody = (props) => {
        const isInViewport = (element, coef = 0.8) => {
            const top = element.getBoundingClientRect().top;
            return top <= (coef * window.innerHeight);
        };

        return (
            <Aox>
                <MountainsParallax/>
                <BackpackPart/>
                <MaterialsPart isInViewport={(el) => isInViewport(el)}/>
                <CarouselSection/>
                <Location/>
                <ContactFormSection/>
            </Aox>
        );

    }

export default MainBody;