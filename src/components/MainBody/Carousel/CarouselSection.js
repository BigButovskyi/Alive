import React from "react";
import classes from "./CarouselSection.css";
import Carousel from "./Carousel/Carousel";

const carouselSection = () => {
    return (
        <section className={classes.CarouselSection}>
           <Carousel/>
        </section>
    );
};

export default carouselSection;