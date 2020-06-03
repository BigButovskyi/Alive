import React, {Component} from "react";
import classes from "./MainBody.css";
import Parallax from "./Parallax/Parallax";
import {sliderHandler} from "./scrollAnimation";

class MainBody extends Component {

    state = {
        position: 1,
        timeAnimation: 0
    }

    scrollHandler = (e) => {
        let nextSlide = e.deltaY > 0;
        let currentPosition = this.state.position;
        let scrollTime = new Date().getTime();
        if (scrollTime - this.state.timeAnimation > 2500) {
            if (nextSlide && currentPosition !== 3) {
                sliderHandler(this.state.position, true);

                this.setState({
                    position: currentPosition + 1,
                    timeAnimation: new Date().getTime()
                });
            } else if((!nextSlide) && currentPosition !== 1) {
                sliderHandler(this.state.position, false);

                this.setState({
                    position: currentPosition - 1,
                    timeAnimation: new Date().getTime()
                });
            }
        }
    };

    render() {
        return (
            <div onWheel={(e) => this.scrollHandler(e)} className={classes.MainBody}>
                <Parallax/>
                <section className={classes.scrollSnap} style={{
                    background: "brown"
                }}>
                </section>
                <section style={{
                    background: "yellow"
                }} className={classes.scrollSnap}>
                </section>
            </div>
        );
    }
}

export default MainBody;