import React, {Component} from "react";
import classes from "./MaterialsPart.css";

class MaterialsPart extends Component {

    componentDidMount() {
        document.addEventListener("scroll", this.isInViewport);
    }

    componentWillUnmount() {
        document.removeEventListener("scroll", this.isInViewport);
    }

    isInViewport = () => {
        const top = this.viewElement.getBoundingClientRect().top;

        if(top <= 0){
            console.log("Element is in view");
        }else{
            console.log("Element is outside view");
        }
    };

    render() {
        let setRef = (el) => {
            this.viewElement = el;
        };
        return (
            <section className={classes.MaterialSection} ref={setRef}>
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