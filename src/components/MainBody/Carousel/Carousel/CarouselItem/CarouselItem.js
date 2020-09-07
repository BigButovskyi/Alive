import React, {useState} from "react";
import classes from "./CarouselItem.css"

const TRIANGLE_POSITION = 100;
const SALE_POSITION = 60;

const CarouselItem = (props) => {

    const [state, setState] = useState({
        triangleTranslate3d: TRIANGLE_POSITION,
        saleTranslateY: SALE_POSITION
    });


    let hoverHandler = () => {
        setState((prevState) => {

            return {
                triangleTranslate3d: 0,
                saleTranslateY: 0
            }
        });
    };

    let leaveHandler = () => {
        setState((prevState) => {
            return {
                triangleTranslate3d: TRIANGLE_POSITION,
                saleTranslateY: SALE_POSITION
            }
        });
    };

    let topLeftTriangleStyle = {transform: "translate3d(" + state.triangleTranslate3d + "%,-" + state.triangleTranslate3d + "%,0)"};
    let bottomRightTriangleStyle = {transform: "translate3d(-" + state.triangleTranslate3d + "%," + state.triangleTranslate3d + "%,0)"};
    let saleStyle = {transform: "translateY(" + state.saleTranslateY + "%)"};

    return (
        <div onMouseOver={hoverHandler} onMouseLeave={leaveHandler} className={classes.CarouselElement}>
            <div className={classes.carousel_El_outer}>
                <div className={classes.hover_div}>
                    <div style={topLeftTriangleStyle} className={classes.top_left_triangle}></div>
                    <div style={bottomRightTriangleStyle} className={classes.bottom_right_triangle}></div>
                </div>
                <div style={saleStyle} className={classes.saleHeader}>
                    <h2><span>sale</span></h2>
                </div>
            </div>
        </div>
    );
};

export default CarouselItem;