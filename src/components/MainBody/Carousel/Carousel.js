import React, {Component} from "react";
import classes from "./Carousel.css";

class Carousel extends Component {

    state = {
        isDown: false,
        startX: 0,
        translateX: 0
    }

    mouseDownHandler = (e) => {
        let isDown = true;
        // let startX = e.pageX - this.state.scrollLeft;
        // let scrollLeft = slider.scrollLeft;
        //
        this.setState({
            isDown: isDown
            // startX: startX,
            // scrollLeft: scrollLeft
        });
    };

    mouseLeaveHandler = () => {
        this.setState({
            isDown: false
        })
    };

    mouseUpHandler = () => {
        this.setState({
            isDown: false
        })
    };

    mouseMoveHandler = (e) => {
        if (!this.state.isDown)
            return;
        let startX = this.state.startX;
        // let scrollLeft = this.state.scrollLeft;
        //
        // const x = e.pageX - slider.offsetLeft;
        // const walk = (x - startX) * 3;
        // slider.scrollLeft = scrollLeft - walk;

        let translateX = this.state.translateX;

        const speed = 15;

        if (e.pageX > startX) {
            if (translateX !== 0)
                translateX = translateX + speed;
        } else {
            translateX = translateX - speed;
        }


        this.setState({
            translateX: translateX,
            startX: e.pageX
        });
    };

    render() {
        const translateX = this.state.translateX;
        const carouselBackpacks = [];
        for (let i = 0; i < 10; i++) {
            carouselBackpacks.push(
                <div key={"carousel_" + i} className={classes.carousel_element}>
                    <div className={classes.carousel_El_outer}>
                        <h2>sale</h2>
                        <div className={classes.hover_div}>
                            <div className={classes.top_left_triangle}></div>
                            <div className={classes.bottom_right_triangle}></div>
                        </div>
                    </div>
                </div>
            )
        }
        return (
            <section className={classes.CarouselSection}>
                <div onMouseMove={(e) => this.mouseMoveHandler(e)}
                     onMouseUp={this.mouseUpHandler}
                     onMouseLeave={this.mouseLeaveHandler}
                     onMouseDown={(e) => this.mouseDownHandler(e)}
                     className={classes.Carousel}
                     style={{transform: "translateX(" + translateX + "px)"}}
                >
                    {carouselBackpacks}
                </div>
            </section>
        );
    }
}

export default Carousel;