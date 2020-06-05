import React, {Component} from 'react';
import classes from './App.css';
import PageContainer from "./containers/PageContainer/PageContainer";

class App extends Component {

    componentDidMount() {
        window.addEventListener("load",this.loaded);
    }

    componentWillUnmount() {
        window.removeEventListener("load",this.loaded);
    }

    loaded = () => {
    };

    render() {
        return (
            <div className={classes.App}>
                <PageContainer/>
            </div>
        );
    }
}

export default App;