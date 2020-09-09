import React from "react";
import classes from "./ContactFormSection.css";
import ContactForm from "./ContactForm/ContactForm";

const contactFormSection = () => {

    return (
        <section className={classes.ContactFormSection}>
            <ContactForm/>
        </section>
    );
};

export default contactFormSection;