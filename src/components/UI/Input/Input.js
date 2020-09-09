import React from "react";
import classes from "./Input.css";

const input = (props) => {

    let inputElement = null;

    switch (props.elementType) {
        case ("input"):
            inputElement = (
                <input type={props.elementConfig.type} placeholder={props.elementConfig.placeholder}/>);
            break;
        case("textarea"):
            inputElement = (
                <textarea></textarea>
            );
            break;
        case("submit"):
            inputElement = (
                <input type="submit" value={"Submit"}/>
            )
            break;
    }

    return (
        <div className={classes.Input}>
            <label>{props.label}</label>
            {inputElement}
        </div>
    );
}

export default input;