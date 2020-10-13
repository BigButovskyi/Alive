import React, {Component} from "react";
import classes from "./Carousel.css";
import CarouselItem from "./CarouselItem/CarouselItem";

class Carousel extends Component {

    state = {
        isDown: false,
        startX: 0,
        translateX: 0,
        cursor:"grab"
    }

    componentDidMount() {
        window.addEventListener('mouseup',this.mouseUpHandler);
    }

    componentWillUnmount() {
        window.removeEventListener('mouseup',this.mouseUpHandler);
    }

    mouseDownHandler = (e) => {
        let isDown = true;
        let startX = e.pageX - this.state.translateX;
        // let startX = e.pageX - this.state.scrollLeft;
        // let scrollLeft = slider.scrollLeft;
        //
        this.setState({
            isDown: isDown,
            startX: startX,
            cursor:"grabbing"
            // scrollLeft: scrollLeft
        });
    };

    mouseLeaveHandler = () => {
        this.setState({
            isDown: false,
            cursor:"grab"
        })
    };

    mouseUpHandler = () => {
        this.setState({
            isDown: false,
            cursor:"grab"
        })
    };

    mouseMoveHandler = (e) => {
        if (!this.state.isDown)
            return;

        let translateX = -(this.state.startX - e.pageX);
        this.setState({
            translateX:translateX
        });

    };
    sliderEdgesHandler = () => {
        let translateX = this.state.translateX;
        if(this.slider.getBoundingClientRect().left > 0){
            translateX = 0;
        }else if(this.slider.getBoundingClientRect().right < window.innerWidth){
            translateX = -(this.slider.getBoundingClientRect().width - window.innerWidth - 100);
        }

        this.setState({
            translateX:translateX
        })
    };

    render() {
        const translateX = this.state.translateX;
        const carouselBackpacks = [];
        for (let i = 1; i <= 8; i++) {
            carouselBackpacks.push(
                <CarouselItem imageNum={i}  key={"carouselItem_" + i} alt={"backpack_" + i}/>
            )
        }

        let setRef = (el) => {
            this.slider = el;
        };
        return (
                <div ref={setRef} onMouseMove={(e) => this.mouseMoveHandler(e)}
                     onMouseUp={this.mouseUpHandler}
                     onMouseLeave={this.mouseLeaveHandler}
                     onMouseDown={(e) => this.mouseDownHandler(e)}
                     onTransitionEnd={this.sliderEdgesHandler}
                     className={classes.Carousel}
                     style={{transform: "translateX(" + translateX + "px)",cursor:this.state.cursor}}
                >
                    {carouselBackpacks}
                </div>
        );
    }
}

export default Carousel;