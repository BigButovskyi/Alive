import React, {Component} from "react";
import classes from "./PageContainer.css";
import NavigationBar from "../../components/UI/NavigationBar/NavigationBar";
import Parallax from "../../components/Parallax/Parallax";

class PageContainer extends Component {

    state = {
        pagePosition: 0,
        timeStart: new Date().getTime()
    }

    handleClick = () => {
        let html = document.documentElement;
        let totalTime = 600;
        let easingPower = 3;
        let timeInterval = 1; //in ms
        let scrollPosition = Math.round(html.scrollTop);
        let timeLeft = totalTime;
        let coef = 0.5;
        let scrollByPixel = setInterval(() => {
            let percentSpent = (totalTime - timeLeft) / totalTime;
            if (timeLeft >= 0) {
                let newScrollPosition = scrollPosition * (1 - coef*this.easeInOut(percentSpent, easingPower));
                html.scrollTop = newScrollPosition;
                timeLeft--;
            } else {
                clearInterval(scrollByPixel);
            }
        }, timeInterval);
    };

    easeInOut = (t, power) => {
        if (t < 0.5) {
            return 0.5 * Math.pow(2 * t, power);
        } else {
            return 0.5 * (2 - Math.pow(2 * (1 - t), power));
        }
    }

    render() {
        let styleTransform = {
            transform: "translateY(" + this.state.pagePosition + "vh)"
        }
        return (
            <div className={classes.PageContainer}>
                <header className={classes.header}>
                    <NavigationBar/>
                </header>
                <main style={styleTransform} className={classes.main}>
                    <Parallax/>
                    <section className={classes.scrollSnap} style={{
                        background: "brown",
                        textAlign: "center",
                        paddingTop: "300px",
                        boxSizing: "border-box"
                    }}>
                        <button onClick={this.handleClick}>BUTTON</button>
                    </section>
                    <section style={{
                        background: "yellow",
                        textAlign: "center",
                        paddingTop: "300px",
                        boxSizing: "border-box"
                    }} className={classes.scrollSnap}>
                        <button onClick={this.handleClick}>BUTTON</button>
                    </section>

                </main>
            </div>
        );
    }
}

export default PageContainer;