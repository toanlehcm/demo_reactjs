import React from "react";
import './style.css';

class App extends React.Component {
    state = {
        counter: 0
    }

    increment = () => {
        this.setState({ counter: this.state.counter + 1});
    }

    render() {
        return (
            <div>
                <button onClick = {this.increment}>Increment</button>
                <p>{this.state.counter}</p>
            </div>
        );
    }
}

export default App;