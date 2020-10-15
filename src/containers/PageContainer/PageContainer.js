import React from "react";
import classes from "./PageContainer.css";
import MainBody from "../../components/MainBody/MainBody";

const PageContainer = (props) => {
    return (
        <div className={classes.PageContainer}>
                <MainBody isInViewport={props.isInViewport} setChildRef={props.setChildRef} addElement={props.addElement}/>
        </div>
    );
}

export default PageContainer;