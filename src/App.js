import React, {useState} from "react";
import './style.css';

class App extends React.Component {
    constructor (props) {
        super(props);

        this.state = {
            result: 0
        }

        this.updatestate = this.updatestate.bind(this);
        this.convert = this.convert.bind(this);
    }

    updatestate(e) {
        this.setState({result: e.target.value});
    }

    convert(km) {
        alert(km);
        this.setState({result: km/1.609});
    }

    // handleChange(e) {
    //     this.setState(e.target.value);
    // }

    // componentDidMount() {
    //     // this.setState({counter: 42});
    //     alert("convert km to miles app");
    // }

    // componentDidUpdate() {
    //     alert("Updaing: " + this.state.result);        
    // }
    
    render() {
        return (
            <div>
                <input type="number" value = {this.state.result} onChange={this.updatestate} />
                <p>{this.state.result} km is {this.convert} miles</p> 
                {/* {this.convert(this.state.result)} */}
            </div>
        );
    }
}

export default App;