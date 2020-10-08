import React, {Component} from "react";
import classes from "./ContactForm.css";
import Input from "../../../UI/Input/Input";

class ContactForm extends Component {

    state = {
        isVisible: false,
        contactFields:{
            name:{
                label:"full name",
                elementType:"input",
                elementConfig:{
                    type:"text",
                    placeholder:"Your Name"
                }
            },
            email:{
                label:"email",
                elementType:"input",
                elementConfig:{
                    type:"email",
                    placeholder:"Your email"
                }
            },
            phone:{
                label:"phone",
                elementType:"input",
                elementConfig:{
                    type:"tel",
                    placeholder:"Your phone num"
                }
            },
            text:{
                label: "question",
                elementType:"textarea",
                elementConfig:{
                    placeholder:"Describe your question"
                }
            },
            submit:{
                elementType:"submit",
                elementConfig:{
                    placeholder: "send"
                }
            }
        }
    }

    componentDidMount() {
        document.addEventListener("scroll", this.isInViewHandler);
    }

    componentWillUnmount() {
        document.removeEventListener("scroll", this.isInViewHandler);
    }

    isInViewHandler = () => {
        let isInView = this.props.isInViewport(this.viewElement);
        this.setState({
            isVisible: isInView
        });
    };

    render() {
        const contactObject = this.state.contactFields;
        let contactFields = Object.keys(contactObject).map((key) => {
            return(
                <Input key={key}
                       label={contactObject[key].label}
                       elementType={contactObject[key].elementType}
                       elementConfig={contactObject[key].elementConfig}
                />
            );
        });

        let setRef = (el) => {
            this.viewElement = el;
        };

        let formStyle = {
            opacity: (this.state.isVisible)? "1":"0",
            transform:(this.state.isVisible)? "translateY(0)":"translateY(100px)"
        };

        return (
            <form style={formStyle} ref={setRef} className={classes.ContactForm}>
                <h2 className={classes.header}>have a question? write us!</h2>
                <fieldset className={classes.fieldset}>
                    {contactFields}
                </fieldset>
            </form>
        );
    }
}

export default ContactForm;