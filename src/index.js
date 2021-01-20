import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import App from "./App";

function Mylist(props) {
    var arr = props.data;
    var listItems = arr.map((val) => <li>{val}</li>);

    return <ul>{listItems}</ul>;
}

var arr = ["A", "B", "C"];

// ReactDOM.render(<Mylist data={arr} />, document.getElementById('app'));
ReactDOM.render(<App />, document.getElementById('app'));
