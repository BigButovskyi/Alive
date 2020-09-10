import React from "react";
import classes from "./ContactFormSection.css";
import ContactForm from "./ContactForm/ContactForm";

const contactFormSection = () => {

    return (
        <section className={classes.ContactFormSection}>
            <h2 className={classes.header}>have a question? write us!</h2>
            <ContactForm/>
        </section>
    );
};

export default contactFormSection;