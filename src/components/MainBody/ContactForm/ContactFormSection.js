import React from "react";
import classes from "./ContactFormSection.css";
import ContactForm from "./ContactForm/ContactForm";

const contactFormSection = (props) => {
    return (
        <section className={classes.ContactFormSection}>
            <ContactForm isInViewport={(el) => props.isInViewport(el)}/>
        </section>
    );
};

export default contactFormSection;