import React from "react";
import classes from "./Location.css";
import ContactUs from "./ContactUs/ContactUs";

const location = () => {

    return(
        <section className={classes.LocationSection}>
            <h1 className={classes.locationHeader}>visit our store</h1>
            <div className={classes.locationWrapper}>
                <ContactUs/>
                <div className={classes.map}></div>
            </div>
        </section>
    );
};

export default location;