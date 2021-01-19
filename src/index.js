import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

function Hi(props) {
    return <h1>Hello {props.name}</h1>;
}

const el = <Hi name="the world" />;

ReactDOM.render(el, document.getElementById('app'));
