import React from "react";
import classes from "./Input.css";

const input = (props) => {

    let inputElement = null;

    switch (props.elementType) {
        case ("input"):
            inputElement = (
                <input className={classes.input} type={props.elementConfig.type}
                       placeholder={props.elementConfig.placeholder}/>);
            break;
        case("textarea"):
            inputElement = (
                <textarea className={classes.textArea}></textarea>
            );
            break;
        case("submit"):
            inputElement = (
                <input className={classes.submit} type="submit" value={props.elementConfig.placeholder}/>
            );
            break;
        default:
            inputElement = (
                <input className={classes.input} type={"text"}
                       placeholder={"write text"}/>);
    }

    return (
        <div className={classes.InputWrapper}>
            {inputElement}
        </div>
    );
}

export default input;