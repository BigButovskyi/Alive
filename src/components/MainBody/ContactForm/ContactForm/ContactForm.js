import React, {Component} from "react";
import classes from "./ContactForm.css";
import Input from "../../../UI/Input/Input";

class ContactForm extends Component {

    state = {
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
                elementType:"textarea"
            },
            submit:{
                elementType:"submit",
                elementConfig:{
                    placeholder: "send"
                }
            }
        }
    }

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

        return (
            <form className={classes.ContactForm}>
                <fieldset className={classes.fieldset}>
                    {contactFields}
                </fieldset>
            </form>
        );
    }
}

export default ContactForm;