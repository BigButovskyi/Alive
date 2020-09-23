import React from "react";
import classes from "./Footer.css";
import Aox from "../../hoc/Aox/Aox";

const footer = (props) => {
    return(
        <footer className={classes.footer}>
            <Aox>
                <div className={classes.copyright}>©Copyright 2020 Vladyslav Butovskyi</div>
                <div className={classes.sign}>Developed by Vladyslav Butovskyi</div>
            </Aox>
        </footer>
    );
};

export default footer;