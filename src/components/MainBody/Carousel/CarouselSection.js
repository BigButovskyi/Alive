import React from "react";
import classes from "./CarouselSection.css";
import Carousel from "./Carousel/Carousel";

const carouselSection = () => {
    return (
        <section className={classes.CarouselSection}>
            <h1 className={classes.header}>choose best one</h1>
           <Carousel/>
        </section>
    );
};

export default carouselSection;