import React, {Component} from "react";
import classes from "./MaterialsPart.css";

class MaterialsPart extends Component {

    state = {
        isVisible:false,
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
        document.addEventListener("scroll", this.scrollHandler);
    }

    componentWillUnmount() {
        document.removeEventListener("scroll", this.scrollHandler);
    }

    scrollHandler = () => {
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
        let setRef = (el) => {
            this.viewElement = el;
        };

        let cardsStyle = {
            opacity:(this.state.isVisible)?"1":"0",
            transform:(this.state.isVisible)? "translateY(0)":"translateY(100px)"
        };
        return (
            <section ref={setRef} className={classes.MaterialSection}>
                <h1 className={classes.header}><div className={classes.headerLabel}>advantages</div></h1>
                <div style={cardsStyle} className={classes.materialWrapper}>
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