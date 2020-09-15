import React, {Component} from "react";
import classes from "./MaterialsPart.css";

class MaterialsPart extends Component {

    state={
        isVisible:false
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
           isVisible:isInView
        });

    };


    render() {
        const setRef = (el) => {
            this.viewElement = el;
        };

        let materialStyle = {};
        materialStyle.opacity = (this.state.isVisible)? "1":"0";
        materialStyle.transform = "translateY(" + ((this.state.isVisible)? "0":"sd") + "px)";

        return (
            <section style={{opacity:(this.state.isVisible)?"1":"0"}} className={classes.MaterialSection} ref={setRef}>
                <div className={classes.materialWrapper}>
                    <div className={classes.material + " " + classes.zipper}>
                        <h2><span className={classes.high_word}>High</span><span className={classes.quality_words}>quality materials</span>
                        </h2>
                    </div>
                    <div className={classes.material + " " + classes.bkp}>
                        <h2><span className={classes.take_word}>take</span><span
                            className={classes.anywhere_word}>anywhere</span></h2>
                    </div>
                </div>
            </section>
        );
    }
}

export default MaterialsPart;