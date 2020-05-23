import React, {Component} from "react";
import c from "./Parallax.css";
import mountain from "../../assets/images/parallax/mountains.jpg";
import man from "../../assets/images/parallax/man.png";
import clouds from "../../assets/images/parallax/clouds.png";

class Parallax extends Component{
    state = {
        movement: {
            alive: {
                speed: -0.5,
                transform: "translateY(0)"
            },
            // man: {
            //     speed: 0.2,
            //     transform: "translateY(0)"
            // },
            clouds: {
                speed: -0.1,
                transform: "translateY(0)"
            },
            man: {
                speed: 0.4,
                transform: "translateY(0)"
            },
            mountains: {
                speed: 0.08,
                transform: "translateY(0)"
            },
        }
    };

    componentDidMount() {
        document.addEventListener("scroll", this.scrollHandler);
    }

    componentWillUnmount() {
        document.removeEventListener("scroll", this.scrollHandler);
    }

    scrollHandler = () => {
        let clientY = window.pageYOffset;
        let elementsMove = {...this.state.movement};
        Object.keys(elementsMove).forEach((key) => {
            let elYC = clientY * elementsMove[key].speed;
            elementsMove[key].transform = "translateY(" + elYC + "px)";
        });

        this.setState({
            movement:elementsMove
        });
    };

    render() {
        return(
            <div className={c.Parallax}>
                <div style={{transform:this.state.movement.mountains.transform}} className={c.mountain}></div>
                <div style={{transform:this.state.movement.alive.transform}} className={c.alive}>
                    <span className={c.al}>AL</span>
                    <span className={c.ve}>VE</span>
                </div>
                <img style={{transform:this.state.movement.man.transform}} className={c.man} src={man} alt={"man"} />
                <img style={{transform:this.state.movement.clouds.transform}} className={c.clouds} src={clouds} alt={"clouds"}/>
            </div>
        );
    }

}

export default Parallax;