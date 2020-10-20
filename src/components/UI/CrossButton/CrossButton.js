import React from "react";
import classes from "./CrossButton.css";

const CrossButton = (props) => {


    let className = "";
    if(props.sideDrawerAppear){
        className = classes.open;
    }

    return (
        <div className={classes.crossWrapper + " " + className}>
            <div className={classes.line}/>
            <div className={classes.line}/>
            <div className={classes.line}/>
        </div>
    );
}


export default CrossButton;