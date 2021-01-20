import React, { useState } from "react";
import './style.css';

class App extends React.Component {
    constructor() {
        super();

        this.state = {
            data: []
        }

        this.listUp = this.listUp.bind(this);
    }

    listUp() {
        var arr = ["a", "b", "c"];
        var myArr = arr.map((val) => <li>{val}</li>);
        this.setState({ data: myArr });
    }

    render() {
        return (
            <div>
                <button onClick={this.listUp} >list up</button>
                <p>list: {this.state.data} </p>
            </div>
        );
    }
}

export default App;