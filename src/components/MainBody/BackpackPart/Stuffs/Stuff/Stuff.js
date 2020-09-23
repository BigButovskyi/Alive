import React from "react";
import classes from "./Stuff.css";

const stuff = (props) => {
    const className = classes[props.name + "Wrapper"];
    const style = {
        transform: "translateX(" + props.translate + "%) rotate(" + props.rotate + "deg)"
    };

    const imageClassname = classes[props.name + "Image"];
    const imagePath = props.image;

    return (
        <div className={className} style={style}>
            <img className={imageClassname} src={imagePath} alt={props.name}/>
        </div>
    );

}

export default stuff;