import React, {Component} from 'react';
import classes from './App.css';
import Layout from "./hoc/Layout/Layout";
import PageContainer from "./containers/PageContainer/PageContainer";

let COMPONENTS = [];

class App extends Component {

    componentDidMount() {
        window.addEventListener("load", function () {
            let loadingScreen = document.getElementById('loading_screen');
            loadingScreen.style.background = 'transparent';

            let loadingEl = document.getElementById("loading_text");
            loadingEl.style.animation = "aliveAppearing 3s ease-in-out forwards";
            setTimeout(function () {
                loadingScreen.style.display = "none";
            }, 3000);
        });
    }

    componentWillUnmount() {
        window.removeEventListener("load", function () {
            let loadingScreen = document.getElementById("loading_screen");
            loadingScreen.style.display = "none";
        });
    }

    isInViewport = (element, coef = 0.8) => {
        const top = element.getBoundingClientRect().top;
        return top <= (coef * window.innerHeight);
    };

    setChildRef = (el) => {
        COMPONENTS.push(el);
    };

    render() {
        return (
            <div className={classes.App}>
                <Layout isInViewport={this.isInViewport} components={COMPONENTS} advantages={this.advantages}>
                    <PageContainer
                        isInViewport={this.isInViewport}
                        setChildRef={this.setChildRef}
                        addElement={(el) => this.addElement(el)}/>
                </Layout>
            </div>
        );
    }
}

export default App;