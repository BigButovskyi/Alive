import React, {useState} from "react";
import classes from "./ContactUs.css"
import Aox from "../../../../hoc/Aox/Aox";
import Detail from "./Detail/Detail";

const ContactUs = (props) => {
    const [state, setState] = useState([
        {
            className: "phone",
            title: "Tel",
            value: ["+38 (095) 0123225"]
        },
        {
            className: "address",
            title: "Address",
            value: ["Kyiv, Ukraine"]
        },
        {
            className: "email",
            title: "Email",
            value: ["b.butovskyi@gmail.com"]
        },
        {
            className: "worktime",
            title: "Work time",
            value: ["Mon - Friday: 10:00 - 18:00","Sat - Sun: 10:00 - 17:00"]
        }
    ]);


    let contactDetails = state.map(detail => {
        return (<Detail key={detail.className} title={detail.title} value={detail.value}/>);
    });

    return (
        <div className={classes.outWrapper}>
            <div className={classes.innerWrapper}>
                <h4 className={classes.contactUsTitle}>contact us</h4>
                {contactDetails}
            </div>
        </div>
    );
};

export default ContactUs;