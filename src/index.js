import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

function Hi() {
    return <h1>Hello world</h1>;
}

const el = <Hi />;

ReactDOM.render(el, document.getElementById('app'));
