import React, { useState } from "react";
import { Navbar, NavbarBrand } from "reactstrap";
import "./style.css";

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      data: [],
    };

    this.listUp = this.listUp.bind(this);
  }

  listUp() {
    var arr = ["a", "b", "c"];
    var myArr = arr.map((val, index) => <li key={index}>{val}</li>);
    this.setState({ data: myArr });
  }

  render() {
    return (
      <div className="App">
        <Navbar dark color="primary">
          <div className="container">
            <NavbarBrand href="/">React</NavbarBrand>
          </div>
          <div>
            <button onClick={this.listUp}>list up</button>
            <p>list: {this.state.data} </p>
          </div>
        </Navbar>
      </div>
    );
  }
}

export default App;
