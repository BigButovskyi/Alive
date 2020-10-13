import React from "react";
import classes from "./NavigationItem.css";

const NavigationItem = (props) => {

    let lineStyle = {
        width:(props.active)?"100%":"0"
    }

    return (
        <div onClick={() => props.click(props.position)} className={classes.NavigationItem}>
            <div style={lineStyle} className={classes.line}/>
            <span className={classes.text}>{props.label}</span>
        </div>
    );
};

export default NavigationItem;