import React, {Component} from 'react';
import Aox from "../Aox/Aox";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import SideDrawer from "../../components/SideDrawer/SideDrawer";

class Layout extends Component{

    state = {
        showNavBar: true,
        sideDrawerAppear:false
    }

    componentDidMount() {
        this.updateWindowDimensions();
        window.addEventListener("resize", this.updateWindowDimensions);
    }

    componentWillUnmount() {
        window.removeEventListener("resize", this.updateWindowDimensions)
    }

    updateWindowDimensions = () => {
        this.setState({
            showNavBar: !(window.innerWidth < 600)
        });
    }

    setSideBtn = () => {
        this.setState({
            sideDrawerAppear:!this.state.sideDrawerAppear
        });
    }

    render()
    {
        return (
            <Aox>
                <Header sideBtn={this.setSideBtn} showNavBar={this.state.showNavBar}
                        sideDrawerAppear={this.state.sideDrawerAppear}
                        isInViewport={this.props.isInViewport} components={this.props.components}/>
                <SideDrawer sideBtn={this.setSideBtn} components={this.props.components}
                            sideDrawerAppear={this.state.sideDrawerAppear} show={!this.state.showNavBar}/>
                <main>
                    {this.props.children}
                </main>
                <Footer/>
            </Aox>
        );
    }
}

export default Layout;