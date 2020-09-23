import React from "react";
import classes from "./BackpackPart.css";
import Stuffs from "./Stuffs/Stuffs";


const backpackPart = (props) => {

    return (
        <section className={classes.BackpackPart}>
            <div className={classes.clouds}>
                <div className={classes.cloud1}/>
            </div>
            <Stuffs/>
        </section>
    );


};

export default backpackPart;