import React, {Component} from "react";
import classes from "./BackpackPart.css";
import Stuffs from "./Stuffs/Stuffs";


class backpackPart extends Component{

    componentDidMount() {
        this.props.setChildRef(this.viewElement);
    }

    render() {
        let setRef = (el) => {
            this.viewElement = el;
        };

        return (
            <section ref={setRef} className={classes.BackpackPart}>
                <div className={classes.oval}/>
                <div className={classes.oval2}/>
                <div className={classes.oval3}/>
                <Stuffs/>
            </section>
        );
    }

};

export default backpackPart;