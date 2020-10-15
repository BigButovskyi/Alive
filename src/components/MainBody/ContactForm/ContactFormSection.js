import React, {Component} from "react";
import classes from "./ContactFormSection.css";
import ContactForm from "./ContactForm/ContactForm";

class contactFormSection extends Component {
    componentDidMount() {
        this.props.setChildRef(this.viewElement);
    }

    render() {
        let setRef = (el) => {
            this.viewElement = el;
        };
        return (
            <section ref={setRef} className={classes.ContactFormSection}>
                <ContactForm isInViewport={(el) => this.props.isInViewport(el)}/>
            </section>
        );
    }
}

export default contactFormSection;