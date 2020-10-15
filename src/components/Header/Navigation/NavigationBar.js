import React, {Component} from "react";
import classes from "./NavigationBar.css";
import NavigationItem from "./NavigationItem/NavigationItem";

class NavigationBar extends Component {
    state = {
        navigationItems: [
            {name: "HIGH quality", active: true},
            {name: "Feature", active: false},
            {name: "Advantage", active: false},
            {name: "Types", active: false},
            {name: "Location", active: false},
            {name: "write us", active: false}
        ],
        scrollCheck: true
    }

    componentDidMount() {
        window.addEventListener('scroll', this.checkElementIvView)
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.checkElementIvView)
    }

    checkElementIvView = () => {
        if (this.state.scrollCheck) {
            for (let index = this.props.components.length - 1; index >= 0; index--) {
                let isVisible = this.props.isInViewport(this.props.components[index]);
                if (isVisible) {
                    if (!this.state.navigationItems[index].active) {
                        let navI = [...this.state.navigationItems];
                        navI.forEach((item, pos) => {
                            navI[pos].active = false;
                        });
                        navI[index].active = true;
                        this.setState({navigationItems: navI});
                    }
                    break;
                }
            }
        }
    };

    clickHandler = (key) => {
        let navI = [...this.state.navigationItems];
        navI.forEach((item, pos) => {
            navI[pos].active = false;
        });
        navI[key].active = true;
        this.setState({navigationItems: navI,scrollCheck:false});

        window.scrollTo({
            top: this.props.components[key].offsetTop - window.innerHeight / 10,
            behavior: "smooth"
        });
        setTimeout(() => {
            this.setState({
                scrollCheck:true
            })
        },1000)
    };


    render() {
        const navigationItems = this.state.navigationItems.map((el, position) => {
            return (<NavigationItem key={el.name} active={el.active} position={position}
                                    click={this.clickHandler}
                                    label={el.name}/>);
        });

        return (
            <nav className={classes.NavigationBar}>
                {navigationItems}
            </nav>
        );
    }
}

export default NavigationBar;