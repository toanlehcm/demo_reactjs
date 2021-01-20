import React, {useState} from "react";
import './style.css';

class App extends React.Component {
    state = {
        counter: 0
    }

    increment = () => {
        this.setState({counter: this.state.counter + 1});
    }

    componentDidMount() {
        // this.setState({counter: 42});
        alert("component did mount");
    }

    componentDidUpdate() {
        alert("Number of clicks: " + this.state.counter);        
    }
    
    render() {
        return (
            <div>
                <button onClick={this.increment}>increment</button>
                <p>{this.state.counter}</p>
            </div>
        );
    }
}

export default App;