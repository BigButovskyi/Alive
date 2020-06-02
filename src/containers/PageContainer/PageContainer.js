import React, {Component} from "react";
import classes from "./PageContainer.css";
import NavigationBar from "../../components/UI/NavigationBar/NavigationBar";
import Parallax from "../../components/Parallax/Parallax";

class PageContainer extends Component{

    state = {
        pagePosition: 0,
        timeStart: new Date().getTime()
    }

    wheelHandler = (e) => {
        let y = e.deltaY;
        alert(y);
        let timeStop = new Date().getTime();
        let timeDiff = timeStop - this.state.timeStart;
        if (timeDiff > 1000) {
            if (y > 0) {
                this.nextSlide();
            } else if (y < 0) {
                this.prevSlide();
            }
        }
    };

    prevSlide() {
        let trans = this.state.pagePosition;
        trans -= 100;
        document.getElementsByTagName("main")[0].style.transform = "translateY(-" + trans + "vh)";
        let timeStart = new Date().getTime();
        this.setState({
            timeStart: timeStart
        });
    }

    nextSlide() {
        let trans = this.state.pagePosition;
        trans += 100;
        document.getElementsByTagName("main")[0].style.transform = "translateY(-" + trans + "vh)";
        let timeStart = new Date().getTime();
        this.setState({
            timeStart: timeStart
        });

    }

    render() {
        return (
            <div className={classes.PageContainer}>
                <header className={classes.header}>
                    <NavigationBar/>
                </header>
                <main onWheel={this.wheelHandler} className={classes.main}>
                    <Parallax/>
                    <section className={classes.scrollSnap} style={{background: "yellow"}}></section>
                    <section className={classes.scrollSnap} style={{background: "brown"}}></section>
                </main>
            </div>
        );
    }
}

export default PageContainer;