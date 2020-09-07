import React from "react";
import classes from "./Location.css";

const location = () => {

    return(
        <section className={classes.LocationSection}>
            <h1 className={classes.locatioHeader}>visit our store</h1>
            <div className={classes.locationWrapper}>
                <div className={classes.contactUs}></div>
                <div className={classes.map}></div>
            </div>
        </section>
    );
};

export default location;