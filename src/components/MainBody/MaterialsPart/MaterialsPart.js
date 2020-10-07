import React, {Component} from "react";
import classes from "./MaterialsPart.css";

class MaterialsPart extends Component {

    state = {
        isVisible: false,
        textFields: [
            {

                speed: 0.3
            }, {
                speed: 0.3
            }
        ],
        speedA: -0.3,
        transformA: 0,
        speedB: 0.3,
        transformB: 0,
    }

    componentDidMount() {
        document.addEventListener("scroll", this.isInViewHandler);
    }

    componentWillUnmount() {
        document.removeEventListener("scroll", this.isInViewHandler);
    }

    isInViewHandler = () => {
        let isInView = this.props.isInViewport(this.viewElement);
        this.setState({
            isVisible: isInView
        });

        let pageOffset = window.pageYOffset;
        let transformA = pageOffset * this.state.speedA;
        let transformB = pageOffset * this.state.speedB;

        this.setState({
            transformA: transformA,
            transformB: transformB
        })

    };


    render() {
        const setRef = (el) => {
            this.viewElement = el;
        };

        return (
            <section style={{opacity: (this.state.isVisible) ? "1" : "0"}} className={classes.MaterialSection}
                     ref={setRef}>
                {/*<div className={classes.background}></div>*/}
                <div className={classes.materialWrapper}>
                    <div className={classes.material + " " + classes.zipper}>
                        <h2 style={{transform:"translateY(" + this.state.transformA + "%)"}}>
                            <span className={classes.high_word}>High</span>
                            <span className={classes.quality_words}>quality materials</span>
                        </h2>
                    </div>
                    <div className={classes.material + " " + classes.bkp}>
                        <h2 style={{transform:"translateY(" + this.state.transformB + "%)"}}>
                            <span className={classes.take_word}>take</span>
                            <span className={classes.anywhere_word}>anywhere</span>
                        </h2>
                    </div>
                </div>
            </section>
        );
    }
}

export default MaterialsPart;