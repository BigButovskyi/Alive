import React from "react";
import classes from "./Detail.css";
import Aox from "../../../../../hoc/Aox/Aox"

const detail = (props) => {
    return(
        <Aox>
            <h5 className={classes.title}>{props.title}:</h5>
            <div className={classes.value}>{
                props.value.map((item,index) => <p key={index}>{item}</p>)
            }</div>
        </Aox>
    )
};

export default detail;