import React from "react";
import classes from "./Location.css";
import ContactUs from "./ContactUs/ContactUs";

const location = () => {

    return (
        <section className={classes.LocationSection}>
            <div className={classes.background}/>
            <div className={classes.wrapper}>
                <h1 className={classes.locationHeader}><div className={classes.locationHeaderLabel}>visit our store</div></h1>
                <div className={classes.locationWrapper}>
                    <ContactUs/>
                    <div className={classes.map}></div>
                </div>
            </div>
        </section>
    );
};

export default location;