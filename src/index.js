import React from "react";
import ReactDOM from "react-dom";
// import App from "./App";
import './style.css';

class Hello extends React.Component {
    state = {
        name: "Toan"
    }

    render() {
        return <h1>Hello {this.state.name}</h1>
    }
}

ReactDOM.render(<Hello />, document.getElementById('app'));
