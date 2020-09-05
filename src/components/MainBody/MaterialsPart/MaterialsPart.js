import React, {Component} from "react";
import classes from "./MaterialsPart.css";

class MaterialsPart extends Component {

    render() {
        return (
            <section className={classes.MaterialSection}>
                <div className={classes.materialWrapper}>
                    <div className={classes.material + " " + classes.zipper}>
                        <h2><span className={classes.high_word}>High</span><span className={classes.quality_words}>quality materials</span></h2>
                    </div>
                    <div className={classes.material + " " + classes.bkp}>
                        <h2><span className={classes.take_word}>take</span><span className={classes.anywhere_word}>anywhere</span></h2>
                    </div>
                </div>
            </section>
        );
    }
}

export default MaterialsPart;