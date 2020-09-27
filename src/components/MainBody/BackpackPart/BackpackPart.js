import React from "react";
import classes from "./BackpackPart.css";
import Stuffs from "./Stuffs/Stuffs";


const backpackPart = (props) => {

    return (
        <section className={classes.BackpackPart}>
            <div className={classes.oval}/>
            <div className={classes.oval2}/>
            <div className={classes.oval3}/>
            <Stuffs/>
        </section>
    );


};

export default backpackPart;