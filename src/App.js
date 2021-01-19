import React from "react";
import './style.css';

class App extends React.Component {
    state = {
        name: "SS"
    }

    render () {
        return (
            <p>hello {this.state.name}</p>
        );
    }
}

export default App;